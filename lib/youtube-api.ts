const API_BASE_URL = "https://fetch.youtubesummaries.cc"

export interface VideoMetadata {
  title: string
  author_name: string
  author_url: string
  type: string
  height: number
  width: number
  version?: string
  provider_name?: string
  provider_url?: string
  thumbnail_url: string
}

export interface APIError {
  detail: string
}

/**
 * Extract video ID from various YouTube URL formats
 */
export function extractVideoId(urlOrId: string): string | null {
  // If it's already an ID (11 characters)
  if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrId)) {
    return urlOrId
  }

  // Extract from URL
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/,
  ]

  for (const pattern of patterns) {
    const match = urlOrId.match(pattern)
    if (match) return match[1]
  }

  return null
}

/**
 * Fetch video metadata
 */
export async function getVideoMetadata(
  videoId: string
): Promise<VideoMetadata> {
  const response = await fetch(
    `${API_BASE_URL}/youtube/metadata?video=${encodeURIComponent(videoId)}`
  )

  if (!response.ok) {
    const error: APIError = await response.json()
    throw new Error(error.detail || `HTTP error! status: ${response.status}`)
  }

  return response.json()
}

/**
 * Fetch video captions/transcript
 */
export async function getVideoCaptions(
  videoId: string,
  languages: string[] = ["en"]
): Promise<string> {
  const params = new URLSearchParams({
    video: videoId,
    languages: languages.join(","),
  })

  const response = await fetch(
    `${API_BASE_URL}/youtube/captions?${params}`
  )

  if (!response.ok) {
    const error: APIError = await response.json()
    throw new Error(error.detail || `HTTP error! status: ${response.status}`)
  }

  return response.text()
}

/**
 * Fetch video timestamps
 */
export async function getVideoTimestamps(
  videoId: string,
  languages: string[] = ["en"]
): Promise<string[]> {
  const params = new URLSearchParams({
    video: videoId,
    languages: languages.join(","),
  })

  const response = await fetch(
    `${API_BASE_URL}/youtube/timestamps?${params}`
  )

  if (!response.ok) {
    const error: APIError = await response.json()
    throw new Error(error.detail || `HTTP error! status: ${response.status}`)
  }

  return response.json()
}

