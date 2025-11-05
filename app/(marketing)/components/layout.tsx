import type { ReactNode } from "react";
import Link from "next/link";
import { Blocks, Sparkles, Layout, FormInput } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type ComponentNavItem = {
  title: string;
  href: string;
  description?: string;
  badge?: string;
};

type ComponentNavGroup = {
  title: string;
  items: ComponentNavItem[];
};

const componentsNavigation: ComponentNavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/components" },
      { title: "Installation", href: "/components#installation" },
    ],
  },
  {
    title: "Hero Sections",
    items: [
      {
        title: "Writing Prompt Hero",
        href: "/components#writing-prompt-hero",
        badge: "New"
      },
    ],
  },
  {
    title: "Forms",
    items: [
      {
        title: "Interactive Textarea",
        href: "/components#interactive-textarea",
        description: "Coming soon"
      },
    ],
  },
  {
    title: "Layout",
    items: [
      {
        title: "Grid Layouts",
        href: "/components#grid-layouts",
        description: "Coming soon"
      },
    ],
  },
];

export default function ComponentsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-background">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-10 px-4 py-10 md:flex-row md:px-6 lg:px-8">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-20">
            <ScrollArea className="h-[calc(100vh-6rem)] pr-4">
              <div className="space-y-6">
             
                {componentsNavigation.map((group) => (
                  <div key={group.title} className="space-y-2">
                       {/* Group Title */}
                    <p className="text-xs font-semibold  uppercase tracking-wide text-white/80">
                      {group.title}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "hover:bg-muted/70 hover:text-foreground focus-visible:ring-ring block rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.title}</span>
                              {item.badge && (
                                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          </Link>
                          {item.description && (
                            <p className="mt-1 px-2 text-xs text-muted-foreground/80">
                              {item.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <Separator />

                {/* Quick Links */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Quick Links
                  </p>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/docs"
                        className="hover:bg-muted/70 hover:text-foreground focus-visible:ring-ring flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      >
                        <Layout className="h-4 w-4" />
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/playground"
                        className="hover:bg-muted/70 hover:text-foreground focus-visible:ring-ring flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      >
                        <Sparkles className="h-4 w-4" />
                        Playground
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollArea>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1 pb-16">
          {children}
        </main>
      </div>
    </div>
  );
}
