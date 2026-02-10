"use client"

import { useEffect, useRef, useState } from "react"

const VIDEO_PATH = "/videos/embryo-timelapse.mp4"

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Set video src only on client to avoid SSR/hydration issues and ensure
  // the request is made in the browser (fixes black screen in some setups).
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const video = videoRef.current
    if (!video) return

    const src =
      typeof window !== "undefined"
        ? `${window.location.origin}${VIDEO_PATH}`
        : VIDEO_PATH

    const play = () => {
      video.play().catch(() => {})
    }

    const handleLoadedData = () => {
      setError(false)
      play()
    }

    const handleError = () => {
      setError(true)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    // Assign src only on client so the browser loads and decodes in the right context.
    video.src = src
    video.load()

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [mounted])

  if (!mounted) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted/30 text-muted-foreground">
        <span className="text-sm">加载中…</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-muted/30 p-4 text-center text-sm text-muted-foreground">
        <p>视频无法播放</p>
        <p className="text-xs">
          请将视频转为 H.264 编码的 MP4，或使用 Chrome/Edge 浏览器
        </p>
      </div>
    )
  }

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="auto"
      className="h-full w-full object-cover"
      aria-label="胚胎时差成像演示"
    />
  )
}
