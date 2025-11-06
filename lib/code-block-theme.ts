export const codeTheme = {
  'code[class*="language-"]': {
    color: "var(--foreground)",
    background: "none",
    fontFamily: "var(--font-mono)",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "var(--foreground)",
    background: "var(--muted)",
    fontFamily: "var(--font-mono)",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "var(--muted)",
    padding: ".1em",
    borderRadius: ".3em",
    whiteSpace: "normal",
  },
  comment: {
    color: "var(--muted-foreground)",
  },
  prolog: {
    color: "var(--muted-foreground)",
  },
  doctype: {
    color: "var(--muted-foreground)",
  },
  cdata: {
    color: "var(--muted-foreground)",
  },
  punctuation: {
    color: "var(--muted-foreground)",
  },
  ".namespace": {
    opacity: ".7",
  },
  property: {
    color: "var(--primary)",
  },
  tag: {
    color: "var(--primary)",
  },
  boolean: {
    color: "var(--primary)",
  },
  number: {
    color: "var(--primary)",
  },
  constant: {
    color: "var(--primary)",
  },
  symbol: {
    color: "var(--primary)",
  },
  deleted: {
    color: "var(--primary)",
  },
  selector: {
    color: "var(--accent-foreground)",
  },
  "attr-name": {
    color: "var(--accent-foreground)",
  },
  string: {
    color: "var(--accent-foreground)",
  },
  char: {
    color: "var(--accent-foreground)",
  },
  builtin: {
    color: "var(--accent-foreground)",
  },
  inserted: {
    color: "var(--accent-foreground)",
  },
  operator: {
    color: "var(--foreground)",
  },
  entity: {
    color: "var(--foreground)",
    cursor: "help",
  },
  url: {
    color: "var(--foreground)",
  },
  ".language-css .token.string": {
    color: "var(--foreground)",
  },
  ".style .token.string": {
    color: "var(--foreground)",
  },
  atrule: {
    color: "var(--secondary-foreground)",
  },
  "attr-value": {
    color: "var(--secondary-foreground)",
  },
  keyword: {
    color: "var(--secondary-foreground)",
  },
  function: {
    color: "var(--chart-1)",
  },
  "class-name": {
    color: "var(--chart-1)",
  },
  regex: {
    color: "var(--destructive)",
  },
  important: {
    color: "var(--destructive)",
    fontWeight: "bold",
  },
  variable: {
    color: "var(--destructive)",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};