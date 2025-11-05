export const types = ["GPT-3", "Codex"] as const

export type ModelType = (typeof types)[number]

export interface Model<Type = string> {
  id: string
  name: string
  description: string
  strengths?: string
  type: Type
}

export const models: Model<ModelType>[] = [
  {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    description:
      "Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003.",
    type: "GPT-3",
    strengths:
      "Dialogue, creative and creative writing, chat, and code generation.",
  },
  {
    id: "gpt-4",
    name: "GPT-4",
    description:
      "More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat.",
    type: "GPT-3",
    strengths:
      "Complex intent, cause and effect, creative generation, search, summarization.",
  },
  {
    id: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    description:
      "The latest GPT-4 model with improved instruction following, JSON mode, reproducible outputs, and parallel function calling.",
    type: "GPT-3",
    strengths:
      "Advanced reasoning, complex problem solving, creative tasks, and structured data generation.",
  },
  {
    id: "text-davinci-003",
    name: "Text Davinci 003",
    description:
      "Can do language tasks with better quality and consistency than the curie, babbage, or ada models.",
    type: "GPT-3",
    strengths:
      "Complex intent, cause and effect, summarization for audience.",
  },
  {
    id: "text-davinci-002",
    name: "Text Davinci 002",
    description:
      "Similar capabilities to text-davinci-003 but trained with supervised fine-tuning instead of reinforcement learning.",
    type: "GPT-3",
    strengths:
      "Language translation, complex classification, text sentiment, summarization.",
  },
  {
    id: "code-davinci-002",
    name: "Code Davinci 002",
    description:
      "Most capable Codex model. Particularly good at translating natural language to code.",
    type: "Codex",
    strengths: "Code generation, code completion, code translation.",
  },
  {
    id: "code-cushman-001",
    name: "Code Cushman 001",
    description: "Almost as capable as Davinci Codex, but slightly faster.",
    type: "Codex",
    strengths:
      "Real-time applications where low-latency is preferable. Good at code generation and completion.",
  },
]
