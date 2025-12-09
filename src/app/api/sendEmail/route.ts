import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 简单的内存速率限制 (IP -> { count, startTime })
const rateLimit = new Map<string, { count: number; startTime: number }>();

// 限制规则: 1小时内最多 5 次请求
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

// 每小时清理一次过期 IP，防止内存泄漏
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimit.entries()) {
    if (now - data.startTime > WINDOW_MS) {
      rateLimit.delete(ip);
    }
  }
}, WINDOW_MS);

export async function POST(request: Request) {
  // 1. 获取客户端 IP (兼容 Nginx 代理)
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  // 2. 速率限制检查
  const now = Date.now();
  const limitData = rateLimit.get(ip);

  if (limitData) {
    if (now - limitData.startTime < WINDOW_MS) {
      if (limitData.count >= MAX_REQUESTS) {
        return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
      }
      limitData.count++;
    } else {
      // 时间窗口过期，重置
      rateLimit.set(ip, { count: 1, startTime: now });
    }
  } else {
    // 新 IP
    rateLimit.set(ip, { count: 1, startTime: now });
  }

  try {
    const data = await request.json();

    // 3. 基本输入验证
    if (!data.email || !data.message || !data.name) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 长度限制
    if (data.message.length > 5000) {
      return NextResponse.json({ message: 'Message too long (max 5000 chars)' }, { status: 400 });
    }

    // 简单的 XSS 防御 (将 < 和 > 转义)
    const safeMessage = String(data.message).replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeName = String(data.name).replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${data.subject || 'No Subject'}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #444; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; margin: 0;">${safeMessage}</p>
          </div>

          <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
            <p>This email was sent from your website's contact form.</p>
            <p>Sender IP: ${ip}</p>
          </div>
        </div>
      `,
    });
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
