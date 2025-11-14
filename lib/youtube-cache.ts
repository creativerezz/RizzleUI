const CACHE_PREFIX = "youtube_transcript_"
const CACHE_VERSION = "1"
const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000 // 24 hours

interface CachedData {
  videoId: string
  metadata: unknown
  transcript: string
  timestamp: number
  version: string
}

export function getCachedTranscript(videoId: string): {
  metadata: unknown | null
  transcript: string | null
} {
  try {
    const cached = localStorage.getItem(`${CACHE_PREFIX}${videoId}`)
    if (!cached) return { metadata: null, transcript: null }

    const data: CachedData = JSON.parse(cached)

    // Check version
    if (data.version !== CACHE_VERSION) {
      localStorage.removeItem(`${CACHE_PREFIX}${videoId}`)
      return { metadata: null, transcript: null }
    }

    // Check expiry
    const age = Date.now() - data.timestamp
    if (age > CACHE_EXPIRY_MS) {
      localStorage.removeItem(`${CACHE_PREFIX}${videoId}`)
      return { metadata: null, transcript: null }
    }

    return {
      metadata: data.metadata,
      transcript: data.transcript,
    }
  } catch (error) {
    console.error("Error reading cache:", error)
    return { metadata: null, transcript: null }
  }
}

export function setCachedTranscript(
  videoId: string,
  metadata: unknown,
  transcript: string
): void {
  try {
    const data: CachedData = {
      videoId,
      metadata,
      transcript,
      timestamp: Date.now(),
      version: CACHE_VERSION,
    }
    localStorage.setItem(`${CACHE_PREFIX}${videoId}`, JSON.stringify(data))
  } catch (error) {
    console.error("Error writing cache:", error)
    // If storage is full, try to clear old entries
    try {
      clearOldCacheEntries()
      localStorage.setItem(`${CACHE_PREFIX}${videoId}`, JSON.stringify(data))
    } catch (retryError) {
      console.error("Failed to write cache after cleanup:", retryError)
    }
  }
}

function clearOldCacheEntries(): void {
  try {
    const keys = Object.keys(localStorage)
    const now = Date.now()

    for (const key of keys) {
      if (key.startsWith(CACHE_PREFIX)) {
        try {
          const data: CachedData = JSON.parse(localStorage.getItem(key) || "{}")
          const age = now - data.timestamp
          if (age > CACHE_EXPIRY_MS || data.version !== CACHE_VERSION) {
            localStorage.removeItem(key)
          }
        } catch {
          localStorage.removeItem(key)
        }
      }
    }
  } catch (error) {
    console.error("Error clearing old cache entries:", error)
  }
}

export function clearCache(videoId?: string): void {
  try {
    if (videoId) {
      localStorage.removeItem(`${CACHE_PREFIX}${videoId}`)
    } else {
      const keys = Object.keys(localStorage)
      for (const key of keys) {
        if (key.startsWith(CACHE_PREFIX)) {
          localStorage.removeItem(key)
        }
      }
    }
  } catch (error) {
    console.error("Error clearing cache:", error)
  }
}

