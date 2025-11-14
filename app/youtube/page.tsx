import type { Metadata } from "next"
import { YouTubeTranscriptPageContent } from "./page-content"

export const metadata: Metadata = {
  title: "YouTube Transcript Fetcher & AI Chat",
  description:
    "Fetch transcripts from YouTube videos and chat with AI about the content",
}

export default function YouTubeTranscriptPage() {
  return <YouTubeTranscriptPageContent />
}
