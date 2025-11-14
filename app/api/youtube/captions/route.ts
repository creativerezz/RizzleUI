import { NextResponse } from "next/server"
import { getVideoCaptions, extractVideoId } from "@/lib/youtube-api"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const video = searchParams.get("video")
    const languages = searchParams.get("languages")?.split(",") || ["en"]

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

    const captions = await getVideoCaptions(videoId, languages)
    return NextResponse.json({ captions })
  } catch (error) {
    console.error("Error fetching video captions:", error)
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to fetch captions",
      },
      { status: 500 }
    )
  }
}

