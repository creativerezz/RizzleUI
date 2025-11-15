import { streamText } from "ai"
import { NextRequest } from "next/server"
import { getLLMProvider } from "@/lib/llm-provider"
import type { LanguageModel } from "ai"

export async function POST(req: NextRequest) {
  try {
    const { messages, transcript, provider, model } = await req.json()

    // Build system message with transcript context if provided
    const systemMessage = transcript
      ? `You are a helpful AI assistant. The user is asking questions about a YouTube video transcript. Use the following transcript as context to answer their questions accurately and helpfully.

Transcript:
${transcript}

Please answer questions about this video transcript. If the question is not related to the transcript, you can still help with general questions.`
      : "You are a helpful AI assistant."

    // Get the configured LLM provider
    const llm = getLLMProvider({
      provider: provider || "openai",
      model: model || "gpt-4o-mini",
    })

    const result = await streamText({
      model: llm as unknown as LanguageModel,
      system: systemMessage,
      messages,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    
    // Provide helpful error messages
    const errorMessage =
      error instanceof Error
        ? error.message.includes("API_KEY")
          ? "LLM API key is not configured. Please add OPENAI_API_KEY to your .env file."
          : error.message
        : "Failed to process chat"

    return Response.json(
      {
        error: errorMessage,
      },
      { status: 500 }
    )
  }
}

