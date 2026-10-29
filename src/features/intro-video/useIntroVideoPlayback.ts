"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PRELOAD_DISTANCE_FROM_VIEWPORT = "600px";
const VISIBILITY_THRESHOLD_TO_AUTOPLAY = 0.35;

export function useIntroVideoPlayback() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        video.preload = "auto";
        preloadObserver.disconnect();
      },
      { rootMargin: PRELOAD_DISTANCE_FROM_VIEWPORT }
    );

    preloadObserver.observe(video);
    return () => preloadObserver.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasEnded) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && !isSoundEnabled) return;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        const isVisibleEnough = entry.intersectionRatio >= VISIBILITY_THRESHOLD_TO_AUTOPLAY;
        if (isVisibleEnough && video.paused) {
          video.play().catch((error) => console.error("Intro video autoplay failed:", error));
        } else if (!isVisibleEnough && !video.paused) {
          video.pause();
        }
      },
      { threshold: [0, VISIBILITY_THRESHOLD_TO_AUTOPLAY] }
    );

    visibilityObserver.observe(video);
    return () => visibilityObserver.disconnect();
  }, [hasEnded, isSoundEnabled]);

  const playWithSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.currentTime = 0;
    setIsSoundEnabled(true);
    setHasEnded(false);
    video.play().catch((error) => console.error("Intro video playback failed:", error));
  }, []);

  const handleEnded = useCallback(() => setHasEnded(true), []);

  return { videoRef, isSoundEnabled, hasEnded, playWithSound, handleEnded };
}
