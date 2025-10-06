import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function registerRoutes(app: Express): Promise<Server> {
  // Chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, conversationHistory = [] } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Build messages array with conversation context
      const messages = [
        {
          role: "system" as const,
          content: "You are a supportive and empathetic AI wellness companion. Your role is to provide emotional support, encouragement, and helpful guidance for mental wellness. Be warm, understanding, and thoughtful in your responses. Keep responses concise but meaningful."
        },
        ...conversationHistory,
        {
          role: "user" as const,
          content: message
        }
      ];

      const completion = await openai.chat.completions.create({
        model: "gpt-5",
        messages: messages,
        max_completion_tokens: 500,
      });

      const reply = completion.choices[0].message.content;

      res.json({ reply });
    } catch (error: any) {
      console.error("OpenAI API error:", error);
      res.status(500).json({ error: "Failed to get response from AI" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
