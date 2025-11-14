import { openai } from "@ai-sdk/openai"

export type LLMProvider = "openai" | "anthropic" | "google"

export interface LLMConfig {
  provider: LLMProvider
  model: string
  apiKey?: string
}

/**
 * Get the configured LLM provider
 */
export function getLLMProvider(config?: Partial<LLMConfig>) {
  const provider = config?.provider || "openai"
  const model = config?.model || "gpt-4o-mini"

  switch (provider) {
    case "openai": {
      const apiKey = config?.apiKey || process.env.OPENAI_API_KEY
      if (!apiKey) {
        throw new Error(
          "OPENAI_API_KEY is not set. Please add it to your .env file."
        )
      }
      // OpenAI SDK automatically uses OPENAI_API_KEY from env, but we can override
      return openai(model)
    }
    case "anthropic": {
      // Uncomment when @ai-sdk/anthropic is installed
      // const { anthropic } = await import("@ai-sdk/anthropic")
      // const apiKey = config?.apiKey || process.env.ANTHROPIC_API_KEY
      // if (!apiKey) {
      //   throw new Error("ANTHROPIC_API_KEY is not set")
      // }
      // return anthropic(model, { apiKey })
      throw new Error(
        "Anthropic provider not yet configured. Install @ai-sdk/anthropic first."
      )
    }
    case "google": {
      // Uncomment when @ai-sdk/google is installed
      // const { google } = await import("@ai-sdk/google")
      // const apiKey = config?.apiKey || process.env.GOOGLE_GENERATIVE_AI_API_KEY
      // if (!apiKey) {
      //   throw new Error("GOOGLE_GENERATIVE_AI_API_KEY is not set")
      // }
      // return google(model, { apiKey })
      throw new Error(
        "Google provider not yet configured. Install @ai-sdk/google first."
      )
    }
    default:
      throw new Error(`Unsupported provider: ${provider}`)
  }
}

/**
 * Get available models for a provider
 */
export function getAvailableModels(provider: LLMProvider): string[] {
  switch (provider) {
    case "openai":
      return [
        "gpt-4o",
        "gpt-4o-mini",
        "gpt-4-turbo",
        "gpt-4",
        "gpt-3.5-turbo",
      ]
    case "anthropic":
      return ["claude-3-5-sonnet-20241022", "claude-3-opus", "claude-3-sonnet"]
    case "google":
      return ["gemini-pro", "gemini-pro-vision"]
    default:
      return []
  }
}

/**
 * Check if an API key is configured for a provider
 */
export function isProviderConfigured(provider: LLMProvider): boolean {
  switch (provider) {
    case "openai":
      return !!process.env.OPENAI_API_KEY
    case "anthropic":
      return !!process.env.ANTHROPIC_API_KEY
    case "google":
      return !!process.env.GOOGLE_GENERATIVE_AI_API_KEY
    default:
      return false
  }
}

