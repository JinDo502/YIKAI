import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import SendgridTransport from 'nodemailer-sendgrid';

export async function POST(request: Request) {
  const { subject, message } = await request.json();

  const transporter = nodemailer.createTransport(
    SendgridTransport({
      apiKey: process.env.SENDGRID_API_KEY,
    })
  );

  // 邮件内容
  const mailOptions: MailOptions = {
    from: `YourApp <no-reply@yikai.global>`,
    to,
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
