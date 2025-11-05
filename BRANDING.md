# RizzleUI Branding Configuration

This document explains how the site branding is configured and managed across the project.

## Configuration File

The main site configuration is centralized in `/config/site.ts`:

```typescript
export const siteConfig = {
  name: "RizzleUI",
  description: "A modern UI component library and design system built with Next.js, React, and Tailwind CSS",
  url: "https://rizzleui.com",
  ogImage: "https://rizzleui.com/og.jpg",
  links: {
    twitter: "https://twitter.com/rizzleui",
    github: "https://github.com/yourusername/rizzleui",
  },
  creator: {
    name: "Your Name",
    url: "https://yourwebsite.com",
  },
}
```

## Usage Across the Site

### Root Layout (`app/layout.tsx`)
- Imports `siteConfig` for dynamic metadata
- Sets SEO title template: `%s | RizzleUI`
- Configures Open Graph and Twitter Card metadata
- All metadata pulls from the centralized config

### Marketing Header (`components/sections/header.tsx`)
- Displays `siteConfig.name` in the logo
- Links to GitHub using `siteConfig.links.github`
- Includes navigation to Docs and Playground

### Site Header (`components/site-header.tsx`)
- Alternative header component (used in Playground)
- Also uses `siteConfig.name` and links

### Page-Level Metadata
Individual pages (like `/playground`) can override the title:
```typescript
export const metadata: Metadata = {
  title: "Playground", // Will render as "Playground | RizzleUI"
  description: "Custom description for this page",
}
```

## Customization

To update the site branding:

1. **Edit `/config/site.ts`** to change:
   - Site name
   - Description
   - URLs
   - Social media links
   - Creator information

2. **All pages will automatically update** - no need to edit individual files

3. **Update the logo SVG** in `/components/sections/header.tsx` if you want a custom icon

## SEO Benefits

The centralized configuration ensures:
- Consistent branding across all pages
- Proper Open Graph tags for social sharing
- Twitter Card metadata
- Structured metadata for search engines
- Easy maintenance and updates

## Files Using Site Config

- `/app/layout.tsx` - Root metadata
- `/app/playground/page.tsx` - Imports config
- `/components/sections/header.tsx` - Marketing header
- `/components/site-header.tsx` - Alternative header
- `/config/site.ts` - Source of truth
