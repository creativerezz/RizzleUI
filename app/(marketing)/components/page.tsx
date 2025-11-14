import Link from "next/link";
import { ArrowRight, Blocks, Code2, Palette, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WritingPromptHero } from "@/components/drafts/writing-prompt-hero";

export default function ComponentsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section id="overview" className="scroll-mt-20 space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5">
            <Blocks className="h-3 w-3" />
            Components
          </Badge>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Component Showcase
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground">
            A collection of custom components built with Next.js 16, React 19, and shadcn/ui.
            All components use theme tokens and are fully responsive.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">TypeScript</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Fully typed components with strict TypeScript support
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Theme Tokens</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              All components use CSS variables for light/dark mode
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Blocks className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">shadcn/ui</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Built on top of shadcn/ui component library
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* Components List */}
      <section className="space-y-8">

        {/* Writing Prompt Hero */}
        <div id="writing-prompt-hero" className="scroll-mt-20 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">AI Creative Writer</h3>
              <p className="text-sm text-muted-foreground">
                Interactive hero section with textarea and prompt suggestions
              </p>
            </div>
            <Badge>New</Badge>
          </div>

          <div className="rounded-xl border border-foreground/20 bg-card/50 p-1">
            <WritingPromptHero />
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="relative"
              asChild
            >
              <Link href="/pricing">
                <Lock className="mr-2 h-4 w-4" />
                View Code
                <Badge
                  variant="secondary"
                  className="ml-2 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Pro
                </Badge>
              </Link>
            </Button>
          </div>
        </div>

        {/* More components can be added here */}
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Blocks className="h-5 w-5" />
              More Components Coming Soon
            </CardTitle>
            <CardDescription>
              We&apos;re continuously adding new components to this showcase.
              Check back soon for updates!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild>
              <Link href="/docs">
                View Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
