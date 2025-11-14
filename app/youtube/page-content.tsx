"use client"

import * as React from "react"
import { Container } from "@/components/container"
import { VideoInput } from "@/components/youtube/video-input"
import { VideoMetadataDisplay } from "@/components/youtube/video-metadata"
import { TranscriptDisplay } from "@/components/youtube/transcript-display"
import { ChatInterface } from "@/components/youtube/chat-interface"
import { LoadingProgress } from "@/components/youtube/loading-progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { VideoMetadata } from "@/lib/youtube-api"
import { Separator } from "@/components/ui/separator"
import { getCachedTranscript, setCachedTranscript } from "@/lib/youtube-cache"
import { retryFetch } from "@/lib/retry"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

type LoadingStage = "metadata" | "transcript" | "complete" | null

export function YouTubeTranscriptPageContent() {
  const [videoId, setVideoId] = React.useState<string | null>(null)
  const [metadata, setMetadata] = React.useState<VideoMetadata | null>(null)
  const [transcript, setTranscript] = React.useState<string | null>(null)
  const [loadingStage, setLoadingStage] = React.useState<LoadingStage>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [isRetrying, setIsRetrying] = React.useState(false)

  const handleVideoSubmit = async (id: string, useCache = true) => {
    setVideoId(id)
    setError(null)
    setMetadata(null)
    setTranscript(null)
    setLoadingStage(null)

    // Check cache first
    if (useCache) {
      const cached = getCachedTranscript(id)
      if (cached.metadata && cached.transcript) {
        setMetadata(cached.metadata as VideoMetadata)
        setTranscript(cached.transcript)
        setLoadingStage("complete")
        toast.success("Loaded from cache")
        return
      }
    }

    // Fetch metadata
    setLoadingStage("metadata")
    try {
      const response = await retryFetch(`/api/youtube/metadata?video=${id}`, {
        method: "GET",
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to fetch metadata")
      }

      const data = await response.json()
      setMetadata(data)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch metadata"
      setError(errorMessage)
      setLoadingStage(null)
      toast.error(errorMessage)
      return
    }

    // Fetch transcript
    setLoadingStage("transcript")
    try {
      const response = await retryFetch(`/api/youtube/captions?video=${id}`, {
        method: "GET",
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to fetch transcript")
      }

      const data = await response.json()
      setTranscript(data.captions)

      // Cache the results
      if (metadata) {
        setCachedTranscript(id, metadata, data.captions)
      }

      setLoadingStage("complete")
      toast.success("Transcript loaded successfully")
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch transcript"
      setError(errorMessage)
      setLoadingStage(null)
      toast.error(errorMessage)
    }
  }

  const handleRetry = async () => {
    if (!videoId) return
    setIsRetrying(true)
    setError(null)
    await handleVideoSubmit(videoId, false)
    setIsRetrying(false)
  }

  const isLoading = loadingStage !== null && loadingStage !== "complete"

  return (
    <div className="flex min-h-screen flex-col">
      <Container className="py-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              YouTube Transcript Fetcher & AI Chat
            </h1>
            <p className="text-muted-foreground">
              Fetch transcripts from YouTube videos and chat with AI about the
              content
            </p>
          </div>

          <VideoInput
            onVideoSubmit={(id) => handleVideoSubmit(id, true)}
            isLoading={isLoading}
            error={error}
          />

          {isLoading && (
            <LoadingProgress stage={loadingStage} error={error} />
          )}

          {error && !isLoading && videoId && (
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={handleRetry}
                disabled={isRetrying}
              >
                <RefreshCw
                  className={cn(
                    "mr-2 h-4 w-4",
                    isRetrying && "animate-spin"
                  )}
                />
                Retry
              </Button>
            </div>
          )}

          {metadata && <VideoMetadataDisplay metadata={metadata} />}

          {transcript && (
            <>
              <Separator />
              <Tabs defaultValue="transcript" className="w-full">
                <TabsList>
                  <TabsTrigger value="transcript">Transcript</TabsTrigger>
                  <TabsTrigger value="chat">AI Chat</TabsTrigger>
                </TabsList>
                <TabsContent value="transcript" className="mt-4">
                  <TranscriptDisplay transcript={transcript} />
                </TabsContent>
                <TabsContent value="chat" className="mt-4">
                  <div className="h-[600px]">
                    <ChatInterface transcript={transcript} />
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

