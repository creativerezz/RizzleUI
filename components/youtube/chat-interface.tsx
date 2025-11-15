"use client"

import * as React from "react"
import { useChat } from "@ai-sdk/react"
import { Send, Bot, User, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"

interface ChatInterfaceProps {
  transcript: string | null
}

export function ChatInterface({ transcript }: ChatInterfaceProps) {
  // Use a stable key based on transcript to avoid unnecessary resets
  const chatKey = React.useMemo(() => {
    if (!transcript) return "chat-default"
    // Use transcript length for a stable key that doesn't change unnecessarily
    return `chat-${transcript.length}`
  }, [transcript])

  const [input, setInput] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)
  const [messages, setMessages] = React.useState<Array<{ id: string; role: string; content: string; createdAt?: Date }>>([])

  const scrollAreaRef = React.useRef<HTMLDivElement>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading])

  // Focus input when transcript becomes available
  React.useEffect(() => {
    if (transcript && inputRef.current) {
      // Small delay to ensure the component is fully rendered
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [transcript])

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // Handle sending message
  const sendMessage = async () => {
    if (!input.trim() || isLoading || !transcript) return

    const userMessage = input.trim()
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
          transcript,
          provider: "openai",
          model: "gpt-4o-mini",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      // Handle streaming response
      const reader = response.body?.getReader()
      if (!reader) throw new Error("No response body")

      const decoder = new TextDecoder()
      let assistantMessage = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        assistantMessage += decoder.decode(value, { stream: true })
      }

      // Note: In a real implementation, you'd parse the streaming response properly
      // For now, we're reading the entire response as text
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to send message"))
    } finally {
      setIsLoading(false)
    }
  }

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendMessage()
  }

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>Chat About This Video</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <ScrollArea
          ref={scrollAreaRef}
          className="flex-1 rounded-md border border-border p-4"
        >
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                <Bot className="mb-2 h-8 w-8" />
                <p className="text-sm font-medium mb-1">
                  {transcript
                    ? "Ask me anything about this video transcript!"
                    : "Fetch a video transcript to start chatting about it."}
                </p>
                {transcript && (
                  <p className="text-xs text-muted-foreground">
                    Press Enter to send, Shift+Enter for new line
                  </p>
                )}
              </div>
            )}
            {messages.map((message: any) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3 group",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-primary/10">
                      <Bot className="h-4 w-4 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-4 py-2.5 shadow-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  )}
                >
                  <div className="text-sm whitespace-pre-wrap break-words">
                    {message.content || (typeof message === "string" ? message : JSON.stringify(message))}
                  </div>
                  {message.createdAt && (
                    <div
                      className={cn(
                        "text-xs mt-1.5 opacity-70",
                        message.role === "user"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      )}
                    >
                      {formatDistanceToNow(new Date(message.createdAt), {
                        addSuffix: true,
                      })}
                    </div>
                  )}
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-primary">
                      <User className="h-4 w-4 text-primary-foreground" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarFallback className="bg-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg px-4 py-2.5 flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Thinking...
                  </span>
                </div>
              </div>
            )}
            {error && (
              <div className="flex gap-3 justify-start">
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarFallback className="bg-destructive/10">
                    <Bot className="h-4 w-4 text-destructive" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-destructive/10 rounded-lg px-4 py-2.5 max-w-[80%]">
                  <div className="text-sm text-destructive font-medium mb-1">
                    Error
                  </div>
                  <div className="text-sm text-destructive/90">
                    {error.message || "Failed to send message. Please try again."}
                  </div>
                  {error.message?.includes("API_KEY") && (
                    <div className="text-xs text-destructive/70 mt-2 pt-2 border-t border-destructive/20">
                      💡 Tip: Add OPENAI_API_KEY to your .env file and restart the server.
                    </div>
                  )}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        <form
          onSubmit={handleFormSubmit}
          className="flex gap-2"
        >
          <Input
            ref={inputRef}
            id="chat-input"
            value={input ?? ""}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={
              transcript
                ? "Ask a question about the video... (Press Enter to send)"
                : "Fetch a transcript first..."
            }
            disabled={isLoading || !transcript}
            className="flex-1"
            autoComplete="off"
            type="text"
          />
          <Button
            type="submit"
            disabled={isLoading || !transcript || !input?.trim()}
            size="default"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
