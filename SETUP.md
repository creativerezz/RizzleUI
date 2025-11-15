# Setup Guide

## Quick Start

1. **Create `.env` file** in the root directory:
```bash
cp .env.example .env
```

2. **Add your OpenAI API key** to `.env`:
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

3. **Get your API key** from [OpenAI Platform](https://platform.openai.com/api-keys)

4. **Restart your dev server**:
```bash
bun dev
```

## Troubleshooting

### Chat Not Working

If the chat isn't working, check:

1. **Is `.env` file created?**
   ```bash
   ls -la .env
   ```

2. **Is OPENAI_API_KEY set?**
   ```bash
   grep OPENAI_API_KEY .env
   ```

3. **Restart the dev server** after adding the key

4. **Check browser console** for error messages

### WebSocket Errors

The WebSocket connection errors (`ws://192.168.5.162:3000/_next/webpack-hmr`) are **not related to chat**. They're Hot Module Replacement (HMR) warnings when accessing via IP address. These are harmless and don't affect functionality.

**To fix HMR warnings:**
- Use `localhost:3000` instead of `192.168.5.162:3000` for development
- Or ignore them - they don't affect the app

## Environment Variables

Required:
- `OPENAI_API_KEY` - Your OpenAI API key (required for AI chat)

Optional (for future providers):
- `ANTHROPIC_API_KEY` - For Anthropic Claude
- `GOOGLE_GENERATIVE_AI_API_KEY` - For Google Gemini


