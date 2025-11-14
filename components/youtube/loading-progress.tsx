"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Loader2, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

type LoadingStage = "metadata" | "transcript" | "complete"

interface LoadingProgressProps {
  stage: LoadingStage | null
  error?: string | null
}

export function LoadingProgress({ stage, error }: LoadingProgressProps) {
  if (!stage || stage === "complete") return null

  const stages: Array<{ key: LoadingStage; label: string }> = [
    { key: "metadata", label: "Fetching video metadata..." },
    { key: "transcript", label: "Fetching transcript..." },
  ]

  const currentStageIndex = stages.findIndex((s) => s.key === stage)
  const progress = error
    ? 0
    : ((currentStageIndex + 1) / stages.length) * 100

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {error ? (
            <div className="flex items-center gap-2 text-destructive">
              <Circle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          ) : (
            <>
              <Progress value={progress} className="h-2" />
              <div className="space-y-2">
                {stages.map((s, index) => {
                  const isComplete = index < currentStageIndex
                  const isCurrent = index === currentStageIndex
                  const isPending = index > currentStageIndex

                  return (
                    <div
                      key={s.key}
                      className="flex items-center gap-2 text-sm"
                    >
                      {isComplete ? (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      ) : isCurrent ? (
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      ) : (
                        <Circle className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span
                        className={cn(
                          isComplete && "text-foreground",
                          isCurrent && "text-primary font-medium",
                          isPending && "text-muted-foreground"
                        )}
                      >
                        {s.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

