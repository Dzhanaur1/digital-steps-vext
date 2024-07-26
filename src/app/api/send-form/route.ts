// app/api/send-form/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const telegramToken = process.env.TELEGRAM_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  const { name, phone, course, email, message } = await req.json();

  // Формирование текста сообщения
  let emailMessage = `Имя: ${name}\nТелефон: ${phone}`;
  let telegramMessage = `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}`;

  if (course) {
    emailMessage += `\nКурс: ${course}`;
    telegramMessage += `\nКурс: ${course}`;
  }
  if (email) {
    emailMessage += `\nПочта: ${email}`;
    telegramMessage += `\nПочта: ${email}`;
  }
  if (message) {
    emailMessage += `\nСообщение: ${message}`;
    telegramMessage += `\nСообщение: ${message}`;
  }

  // Отправка на почту
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Новая заявка",
    text: emailMessage,
  };

  try {
    await transporter.sendMail(mailOptions);

    // Отправка в Telegram
    await axios.post(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        chat_id: telegramChatId,
        text: telegramMessage,
      }
    );

    return NextResponse.json(
      { message: "Форма успешно отправлена" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при отправке формы" },
      { status: 500 }
    );
  }
}
