"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { VideoMetadata } from "@/lib/youtube-api"

interface VideoMetadataProps {
  metadata: VideoMetadata
}

export function VideoMetadataDisplay({ metadata }: VideoMetadataProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          {metadata.thumbnail_url && (
            <div className="relative h-24 w-40 flex-shrink-0 overflow-hidden rounded-md border border-border">
              <Image
                src={metadata.thumbnail_url}
                alt={metadata.title}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          )}
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold text-foreground">{metadata.title}</h3>
            <div className="flex items-center gap-2">
              <Link
                href={metadata.author_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                {metadata.author_name}
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

