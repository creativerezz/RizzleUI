# RizzleUI

A modern UI component library and design system built with Next.js 16, React 19, and shadcn/ui.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your system
- Node.js 18+ (for compatibility)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd RizzleUI
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your OpenAI API key to `.env`:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

5. Start the development server:
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## LLM Provider Setup

This project uses the Vercel AI SDK for LLM integration. Currently configured for OpenAI.

### OpenAI Setup

1. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Add it to your `.env` file:
```env
OPENAI_API_KEY=sk-...
```

### Supported Models

- `gpt-4o` - Latest and most capable model
- `gpt-4o-mini` - Faster and cheaper (default)
- `gpt-4-turbo` - Previous generation
- `gpt-4` - Standard GPT-4
- `gpt-3.5-turbo` - Fast and cost-effective

### Adding Other Providers

To add Anthropic or Google providers:

1. Install the provider package:
```bash
bun add @ai-sdk/anthropic  # or @ai-sdk/google
```

2. Add the API key to `.env`:
```env
ANTHROPIC_API_KEY=your_key_here
# or
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

3. Update `lib/llm-provider.ts` to uncomment the provider code.

## Features

- 🎨 **shadcn/ui Components** - Beautiful, accessible UI components
- 🤖 **AI Chat Integration** - YouTube transcript analysis with AI
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Built-in theme support
- ⚡ **Turbopack** - Fast development builds
- 🔥 **Next.js 16** - Latest App Router features

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── (marketing)/       # Marketing pages
│   └── youtube/           # YouTube transcript fetcher
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   └── youtube/           # YouTube-specific components
├── lib/                   # Utility functions
│   ├── llm-provider.ts    # LLM provider configuration
│   └── youtube-api.ts     # YouTube API client
└── data/                  # Static data
```

## Development

### Available Scripts

- `bun dev` - Start development server with Turbopack
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

### Code Style

This project follows strict development guidelines:
- Use theme tokens, never hardcoded colors
- Mobile-first responsive design
- Server Components by default
- TypeScript for all components

See `.cursorrules` for complete guidelines.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)

## License

MIT
