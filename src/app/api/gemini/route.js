// app/api/gemini/route.js

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export async function POST(req) {
    try {
        const { message } = await req.json();

        if (!message) {
            throw new Error("No message provided");
        }

        // Initialize the generative model with the API key
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        const llm = new ChatGoogleGenerativeAI({
            model: "gemini-1.5-pro",
            apiKey: process.env.GEMINI_API_KEY,
            temperature: 0,
            maxRetries: 2,
          });
  
          const template = `Assistant is designed to be able to assist with a wide range of tasks, from answering simple questions to providing in-depth explanations and discussions on a wide range of topics. As a language model, Assistant is able to generate human-like text based on the input it receives, allowing it to engage in natural-sounding conversations and provide responses that are coherent and relevant to the topic at hand.
  
  Assistant is constantly learning and improving, and its capabilities are constantly evolving. It is able to process and understand large amounts of text, and can use this knowledge to provide accurate and informative responses to a wide range of questions. Additionally, Assistant is able to generate its own text based on the input it receives, allowing it to engage in discussions and provide explanations and descriptions on a wide range of topics.
  
  Overall, Assistant is a powerful tool that can help with a wide range of tasks and provide valuable insights and information on a wide range of topics. Whether you need help with a specific question or just want to have a conversation about a particular topic, Assistant is here to assist.
  
  input: {input}`;
  
          const customRagPrompt = PromptTemplate.fromTemplate(template);
  
          const chain = customRagPrompt.pipe(llm).pipe(new StringOutputParser());
          const result = await chain.invoke({ input: message });

        return NextResponse.json({ content: result });
    } catch (error) {
        console.error("Error in Gemini API Route:", error.message || error);

        return NextResponse.json(
            { error: "Failed to fetch data from Gemini API" },
            { status: 500 }
        );
    }
}
