// Import necessary modules
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Set up the transporter for sending emails
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD,
    },
});


export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        console.log("Sending email from:", email);
        console.log("Sending email to:", process.env.GOOGLE_EMAIL);


        const mailOptions = {
            from: email,
            to: process.env.GOOGLE_EMAIL || "uiyoungkim.dev@gmail.com",
            subject: "Service Contact from Customer",
            text: message,
            html: `<b>Name:</b> ${name} <br> <b>Email:</b> ${email} <br> <b>Message:</b> ${message}`, // html body
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent!");

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email: ", error.response || error.message || error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
