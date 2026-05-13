import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const smtpEmail = process.env.SMTP_EMAIL;
        const smtpPassword = process.env.SMTP_PASSWORD;
        const contactEmail = process.env.CONTACT_EMAIL || "sinuarlowbaby.dev@gmail.com";

        if (!smtpEmail || !smtpPassword) {
            console.warn("SMTP credentials not found in .env.local. Simulating success.");
            return NextResponse.json({ message: `Thanks ${name}! (Simulated success)` });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: smtpEmail,
                pass: smtpPassword,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${smtpEmail}>`,
            to: contactEmail,
            replyTo: email,
            subject: `Portfolio Contact: ${name}`,
            text: `New message from your portfolio website!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return NextResponse.json({
            message: `Thanks ${name}! Your message has been received. I'll reply to ${email} soon.`,
        });
    } catch (error) {
        console.error("Failed to send email:", error);
        return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }
}
