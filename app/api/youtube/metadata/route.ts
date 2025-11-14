import { NextResponse } from "next/server"
import { getVideoMetadata, extractVideoId } from "@/lib/youtube-api"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const video = searchParams.get("video")

    if (!video) {
      return NextResponse.json(
        { error: "Video parameter is required" },
        { status: 400 }
      )
    }

    const videoId = extractVideoId(video)
    if (!videoId) {
      return NextResponse.json(
        { error: "Invalid YouTube URL or video ID" },
        { status: 400 }
      )
    }

    const metadata = await getVideoMetadata(videoId)
    return NextResponse.json(metadata)
  } catch (error) {
    console.error("Error fetching video metadata:", error)
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to fetch metadata",
      },
      { status: 500 }
    )
  }
}

