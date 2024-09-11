import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    console.log(reqBody);
    const { username, userEmail, message } = reqBody;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASS,
      },
    });
    const mailOptions = {
      from: process.env.EMAILUSER,
      to: "mohapatrasandeep28@gmail.com",
      subject: "From the PortFolio",
      html: `<h3>${username}</h3> send an email from <h4> ${userEmail}</h4> and the topic is <p> ${message}</p>`,
    };
    const mailResponse = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success",mailResponse }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
