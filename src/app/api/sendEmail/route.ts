import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { subject, message } = await request.json();

  // 配置 Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465', // 465 使用 SSL，587 使用 STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // 邮件内容
  const mailOptions = {
    from: `YourApp <no-reply@yikai.global>`,
    to: 'newright_hpp@163.com',
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: '邮件发送成功' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: '邮件发送失败' }, { status: 500 });
  }
}
