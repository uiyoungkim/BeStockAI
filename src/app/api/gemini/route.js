// app/api/gemini/route.js

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
    try {
        const { message } = await req.json();

        if (!message) {
            throw new Error("No message provided");
        }

        // Initialize the generative model with the API key
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        // Select the model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Send the message to the Gemini API
        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ content: text });
    } catch (error) {
        console.error("Error in Gemini API Route:", error.message || error);

        return NextResponse.json(
            { error: "Failed to fetch data from Gemini API" },
            { status: 500 }
        );
    }
}
