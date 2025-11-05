import Link from "next/link";
import { ArrowRight, Code2, Palette, Rocket, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";

export default function DocsPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto prose-lg prose-headings:scroll-mt-20 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:mb-6 prose-li:my-2 prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-code:text-sm prose-code:font-mono prose-a:font-medium prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary">
      {/* Hero Section */}
      <div className="not-prose mb-12">
        <Badge variant="outline" className="mb-4">
          Documentation
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
          Next.js 16 Starter Documentation
        </h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to building modern web applications with Next.js 16,
          React 19, shadcn/ui, and Tailwind CSS v4.
        </p>
      </div>

      {/* Quick Links */}
      <div className="not-prose mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <Rocket className="mb-2 h-6 w-6 text-primary" />
            <CardTitle className="text-base">Quick Start</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Get up and running in minutes</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Code2 className="mb-2 h-6 w-6 text-primary" />
            <CardTitle className="text-base">Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Modern tools and frameworks</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Palette className="mb-2 h-6 w-6 text-primary" />
            <CardTitle className="text-base">UI Components</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Beautiful shadcn/ui library</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="mb-2 h-6 w-6 text-primary" />
            <CardTitle className="text-base">Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Follow proven patterns</CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="introduction" className="mb-16 scroll-mt-20">
        <h2>Introduction</h2>
        <p>
          This starter template is built with the latest web technologies to help you
          create fast, modern, and production-ready applications. It combines the power
          of Next.js 16 with React 19, shadcn/ui components, and Tailwind CSS v4.
        </p>
        <Alert className="not-prose my-6">
          <AlertTitle>Next.js 16 Beta</AlertTitle>
          <AlertDescription>
            This project uses Next.js 16 beta with Turbopack as the default bundler.
            Be aware that some APIs may change before the stable release.
          </AlertDescription>
        </Alert>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="mb-16 scroll-mt-20">
        <h2>Philosophy</h2>
        <p>This starter follows key principles to ensure code quality and maintainability:</p>
        <ul>
          <li><strong>Type Safety First</strong> - Full TypeScript support with strict mode</li>
          <li><strong>Theme-Based Design</strong> - All colors use CSS variables for light/dark mode</li>
          <li><strong>Mobile-First Responsive</strong> - Designed for all screen sizes</li>
          <li><strong>Server Components by Default</strong> - Leverage React 19 Server Components</li>
          <li><strong>Accessibility</strong> - WCAG compliant components from shadcn/ui</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="mb-16 scroll-mt-20">
        <h2>Tech Stack</h2>

        <h3>Core Framework</h3>
        <ul>
          <li><strong>Next.js 16.0.0-beta.0</strong> - App Router with Turbopack</li>
          <li><strong>React 19.1.0</strong> - New JSX transform and Server Components</li>
          <li><strong>TypeScript 5</strong> - Strict mode enabled</li>
        </ul>

        <h3>Styling</h3>
        <ul>
          <li><strong>Tailwind CSS v4</strong> - Latest version with PostCSS</li>
          <li><strong>shadcn/ui</strong> - Beautifully designed components (New York style)</li>
          <li><strong>CVA</strong> - Class Variance Authority for component variants</li>
          <li><strong>Lucide React</strong> - Modern icon library</li>
        </ul>

        <h3>Build Tools</h3>
        <ul>
          <li><strong>Turbopack</strong> - Next.js built-in bundler</li>
          <li><strong>Bun</strong> - Fast package manager and runtime</li>
          <li><strong>ESLint</strong> - Code quality and consistency</li>
        </ul>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="mb-16 scroll-mt-20">
        <h2>Getting Started</h2>

        <h3>Prerequisites</h3>
        <p>Make sure you have Bun installed on your system:</p>
        <CodeBlock code="curl -fsSL https://bun.sh/install | bash" language="bash" />

        <h3>Installation</h3>
        <p>Clone and install dependencies:</p>
        <CodeBlock code={`git clone <your-repo>
cd next16
bun install`} language="bash" />

        <h3>Development</h3>
        <p>Start the development server with Turbopack:</p>
        <CodeBlock code="bun dev" language="bash" />
        <p>Open <Link href="http://localhost:3000">http://localhost:3000</Link> in your browser.</p>

        <h3>Build for Production</h3>
        <CodeBlock code={`bun build
bun start`} language="bash" />

        <Alert className="not-prose my-6" variant="default">
          <AlertTitle>Important: Use Bun</AlertTitle>
          <AlertDescription>
            This project uses Bun as the package manager. Always use <code>bun</code> commands
            instead of npm, yarn, or pnpm.
          </AlertDescription>
        </Alert>
      </section>

      {/* Development Workflow */}
      <section id="workflow" className="mb-16 scroll-mt-20">
        <h2>Development Workflow</h2>

        <h3>Adding shadcn/ui Components</h3>
        <p>Use the shadcn CLI to add components:</p>
        <CodeBlock code="bunx shadcn@latest add button" language="bash" />
        <p>Components are installed to <code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">components/ui/</code> and can be imported:</p>
        <CodeBlock code={`import { Button } from "@/components/ui/button"`} language="typescript" />

        <h3>Server vs Client Components</h3>
        <p>Use Server Components by default:</p>
        <CodeBlock code={`// Server Component (default)
export function StaticContent() {
  return <div>Static content</div>
}`} language="typescript" />
        <p>Add <code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">&quot;use client&quot;</code> only when needed:</p>
        <CodeBlock code={`"use client"

import { useState } from "react"

export function InteractiveContent() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}`} language="tsx" />

        <h3>Async APIs in Next.js 16</h3>
        <p>Remember that cookies, headers, and params are now async:</p>
        <CodeBlock code={`// ✅ Next.js 16 (correct)
const cookieStore = await cookies()
const headersList = await headers()

// ❌ Next.js 15 syntax (doesn't work in v16)
const cookieStore = cookies()
const headersList = headers()`} language="typescript" />
      </section>

      {/* Configuration */}
      <section id="configuration" className="mb-16 scroll-mt-20">
        <h2>Environment & Configuration</h2>

        <h3>Environment Variables</h3>
        <p>Create a <code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">.env.local</code> file in the root directory:</p>
        <CodeBlock code={`# Example environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=your-database-url
OPENAI_API_KEY=your-api-key`} language="bash" />

        <h3>Path Aliases</h3>
        <p>The project uses TypeScript path aliases configured in <code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">tsconfig.json</code>:</p>
        <ul>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">@/components</code> - React components</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">@/components/ui</code> - shadcn/ui components</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">@/lib</code> - Utility functions</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">@/hooks</code> - Custom React hooks</li>
        </ul>
      </section>

      {/* Project Structure */}
      <section id="structure" className="mb-16 scroll-mt-20">
        <h2>Project Structure</h2>
        <CodeBlock code={`next16/
├── app/                    # App Router pages and layouts
│   ├── (marketing)/        # Marketing route group
│   │   ├── page.tsx        # Home page
│   │   └── docs/           # Documentation
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # React components
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions
│   └── utils.ts            # cn() helper
├── hooks/                  # Custom React hooks
├── LLMS/                   # Documentation and guides
├── components.json         # shadcn/ui configuration
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts`} language="bash" />
      </section>

      {/* UI & Styling */}
      <section id="styling" className="mb-16 scroll-mt-20">
        <h2>UI & Styling</h2>

        <h3>Theme Tokens</h3>
        <p><strong>Always use theme tokens, never hardcoded colors:</strong></p>
        <CodeBlock code={`// ✅ Good - Uses theme tokens
<div className="bg-background text-foreground">
<button className="bg-primary text-primary-foreground hover:bg-primary/90">

// ❌ Bad - Hardcoded colors
<div className="bg-white dark:bg-black text-black dark:text-white">
<button className="bg-blue-500 hover:bg-blue-600">`} language="tsx" />

        <h3>Available Theme Tokens</h3>
        <ul>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">bg-background</code> / <code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">text-foreground</code> - Main background and text</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">bg-card</code> / <code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">text-card-foreground</code> - Card backgrounds</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">bg-primary</code> / <code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">text-primary-foreground</code> - Primary buttons</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">bg-secondary</code> / <code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">text-secondary-foreground</code> - Secondary buttons</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">text-muted-foreground</code> - Secondary/muted text</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">border-border</code> - Default borders</li>
        </ul>

        <h3>Responsive Padding Pattern</h3>
        <p>Use consistent responsive padding:</p>
        <CodeBlock code={`// ✅ Good
<div className="px-4 sm:px-6 lg:px-8">

// ❌ Bad - Inconsistent padding
<div className="px-16">`} language="tsx" />

        <h3>Conditional Classes</h3>
        <p>Always use the <code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">cn()</code> utility:</p>
        <CodeBlock code={`import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)}>`} language="tsx" />
      </section>

      {/* Scripts & Tooling */}
      <section id="tooling" className="mb-16 scroll-mt-20">
        <h2>Scripts & Tooling</h2>

        <h3>Available Scripts</h3>
        <ul>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">bun dev</code> - Start development server with Turbopack</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">bun build</code> - Build for production</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">bun start</code> - Start production server</li>
          <li><code className="px-1.5 py-0.5 rounded bg-muted border border-border text-sm">bun lint</code> - Run ESLint</li>
        </ul>

        <h3>Adding Dependencies</h3>
        <CodeBlock code={`bun add <package>           # Production dependency
bun add -d <package>        # Development dependency
bun remove <package>        # Remove dependency`} language="bash" />
      </section>

      {/* Next Steps */}
      <div className="not-prose mt-20">
        <div className="overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-card to-secondary/5 shadow-xl">
          <div className="p-8 md:p-10">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                <Rocket className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Ready to build something amazing?
              </h3>
              <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
                Explore the LLMS folder for detailed patterns and examples on forms,
                authentication, layouts, and AI integration. Everything you need to ship fast.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="min-w-[160px] shadow-lg shadow-primary/20" asChild>
                  <Link href="/">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Get Started
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="min-w-[160px]" asChild>
                  <Link
                    href="https://nextjs.org/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 className="mr-2 h-4 w-4" />
                    Next.js Docs
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="min-w-[160px]" asChild>
                  <Link
                    href="https://ui.shadcn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Palette className="mr-2 h-4 w-4" />
                    shadcn/ui
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
