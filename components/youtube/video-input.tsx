"use client"

import * as React from "react"
import { Loader2, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { extractVideoId } from "@/lib/youtube-api"

interface VideoInputProps {
  onVideoSubmit: (videoId: string) => void
  isLoading?: boolean
  error?: string | null
}

export function VideoInput({ onVideoSubmit, isLoading, error }: VideoInputProps) {
  const [input, setInput] = React.useState("")
  const [localError, setLocalError] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError(null)

    if (!input.trim()) {
      setLocalError("Please enter a YouTube URL or video ID")
      return
    }

    const videoId = extractVideoId(input.trim())
    if (!videoId) {
      setLocalError("Invalid YouTube URL or video ID")
      return
    }

    onVideoSubmit(videoId)
  }

  const displayError = error || localError

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="video-url">YouTube Video URL or ID</Label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Youtube className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="video-url"
              type="text"
              placeholder="https://youtube.com/watch?v=... or dQw4w9WgXcQ"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="pl-10"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Fetch Transcript"
            )}
          </Button>
        </div>
      </div>
      {displayError && (
        <Alert variant="destructive">
          <AlertDescription>{displayError}</AlertDescription>
        </Alert>
      )}
    </form>
  )
}

