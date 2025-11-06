"use client";

import { useState } from "react";
import { ArrowUp, Plus, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const prompts = [
  "Write a short story",
  "Compose a haiku",
  "Create a character",
  "Imagine a future",
  "Explore an emotion",
  "Write a dialogue",
  "Describe a place",
];

export function WritingPromptHero() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Message:", message);
  };

  const handlePromptClick = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <main role="main" className="overflow-hidden bg-background">
      <section className="relative py-32 md:py-44 lg:py-52">
        <div className="relative z-30 mx-auto max-w-5xl px-6 text-center">
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold sm:text-5xl text-foreground">
            Write. Refine. Publish.
          </h1>
          <p className="mx-auto mb-7 mt-3 max-w-xl text-balance text-xl text-muted-foreground">
            Write poetry and stories with the world&apos;s first AI poetry muse.
          </p>

          <div className="mx-auto w-full max-w-xl">
            <form
              onSubmit={handleSubmit}
              className="relative w-full divide-y overflow-hidden rounded-xl bg-card shadow-md ring-1 ring-border"
            >
              <Textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What should we write today?"
                className="max-h-[6lh] w-full resize-none rounded-none border-none bg-transparent p-3 shadow-none outline-none ring-0 field-sizing-content focus-visible:ring-0"
              />

              <div className="flex items-center justify-between p-1">
                <div className="flex items-center gap-0 [&_button:first-child]:rounded-bl-xl">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-8 shrink-0 gap-1.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 shrink-0 gap-1.5 rounded-lg px-2.5 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    <Figma className="h-4 w-4" />
                    <span>Design</span>
                  </Button>
                </div>

                <Button
                  type="submit"
                  size="icon"
                  disabled={!message.trim()}
                  className="absolute bottom-1 right-1 size-8 gap-1.5 rounded-lg border-[0.5px] border-white/25 bg-primary text-primary-foreground shadow-md shadow-black/25 ring-1 ring-primary/20 hover:bg-primary/90"
                >
                  <ArrowUp className="h-5 w-5" strokeWidth={3} />
                </Button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {prompts.map((prompt) => (
                <Button
                  key={prompt}
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handlePromptClick(prompt)}
                  className="h-8 cursor-pointer rounded-full border-transparent bg-transparent px-3 text-xs shadow-none ring-1 ring-border transition-all duration-200 hover:bg-card/50 active:scale-98"
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
