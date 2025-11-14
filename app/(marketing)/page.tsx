import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
//import { WritingPromptHero } from "@/components/drafts/writing-prompt-hero";

export default function Home() {
  return (
    <>
    <section className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center">
      <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge/Label */}
          <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
            <span className="font-medium">Built with Next.js 16</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Beautiful and Functional
            <span className="block text-primary">UI Components Library</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              A modern UI component library and design system built with Next.js 16, React 19, and shadcn/ui.
              Fast, accessible, and customizable.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="text-base" asChild>
              <Link href="/components">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <Link href="/docs">
                Learn More
              </Link>
            </Button>
          </div>

        {/* Optional: Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Built with Turbopack for instant updates
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Type Safe</h3>
            <p className="text-sm text-muted-foreground">
              Full TypeScript support out of the box
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Dark Mode</h3>
            <p className="text-sm text-muted-foreground">
              Beautiful themes that adapt to your preference
            </p>
          </div>
        </div>
          
        </div>

      </div>
    </section>

    {/* Writing Prompt Hero Demo */}
    {/* <WritingPromptHero /> */}
    </>
  )
}
