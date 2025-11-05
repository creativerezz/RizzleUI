"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useTheme } from "next-themes";
import { codeTheme } from "@/lib/code-block-theme";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = "bash", showLineNumbers = false }: CodeBlockProps) {
  return (
    <div className="not-prose my-4">
      <div className="rounded-lg border border-border overflow-hidden">
        <SyntaxHighlighter
          language={language}
          style={codeTheme as any}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            background: "transparent",
          }}
          codeTagProps={{
            style: {
              fontFamily: "var(--font-geist-mono), monospace",
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
