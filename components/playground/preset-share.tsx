"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PresetShare() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share preset</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this preset.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://example.com/playground/preset/abc123"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 7H7v6h6V7ZM7 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm9 4V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2H1.5A1.5 1.5 0 0 0 0 10.5v4A1.5 1.5 0 0 0 1.5 16h4a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 5.5 9H5V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h-.5A1.5 1.5 0 0 0 13 10.5v4a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 18.5 9H16Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogDescription>
            This is a shareable link to your preset.
          </DialogDescription>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

