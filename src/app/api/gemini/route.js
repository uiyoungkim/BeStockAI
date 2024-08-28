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
  
        const template = `Assistant is designed to specialize in finance-related tasks, helping with a wide range of topics including stock recommendations, portfolio analysis, financial news, market trends, and investment strategies. As a finance-focused assistant, Assistant can provide insights on stock performance, market conditions, and assist in making informed investment decisions.

          Using its deep knowledge of financial markets and data, Assistant is able to process and analyze financial information to generate accurate and relevant responses. Whether it's analyzing stock performance, evaluating potential investments, or providing explanations of financial concepts, Assistant is here to help you make informed financial decisions.
          
          In addition to providing recommendations, Assistant can also assist in monitoring your portfolio, tracking market trends, and identifying new investment opportunities. Whether you need help selecting stocks, understanding market conditions, or just want to have a conversation about the latest financial news, Assistant is here to provide support.
          
          Overall, Assistant is a powerful financial tool that can help you navigate the complexities of investing and finance. From answering specific questions to offering strategic advice, Assistant is designed to be your finance and investment guide.
          
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
