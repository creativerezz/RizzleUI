"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function CodeViewer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          <span className="sr-only">View Code</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-[90vw] overflow-y-scroll lg:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>View Code</DialogTitle>
          <DialogDescription>
            You can use the following code to start integrating your current
            prompt and settings into your application.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-muted flex flex-col gap-4 rounded-md p-4">
          <div className="grid gap-2">
            <p className="text-sm font-medium leading-none">Python</p>
            <pre className="text-muted-foreground mt-2 text-sm">
              <code>{`import anthropic

client = anthropic.Anthropic(
    api_key="my_api_key",
)

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude"}
    ]
)
print(message.content)`}</code>
            </pre>
          </div>
          <div className="grid gap-2">
            <p className="text-sm font-medium leading-none">TypeScript</p>
            <pre className="text-muted-foreground mt-2 text-sm">
              <code>{`import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env['ANTHROPIC_API_KEY'],
});

const message = await client.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 1024,
  messages: [
    { role: "user", content: "Hello, Claude" }
  ]
});

console.log(message.content);`}</code>
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
