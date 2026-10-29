"use client";

import { RotateCcw, Volume2 } from "lucide-react";
import { INTRO_VIDEO_POSTER, INTRO_VIDEO_SOURCE } from "./content";
import type { IntroVideoContent } from "./types";
import { useIntroVideoPlayback } from "./useIntroVideoPlayback";

type IntroVideoPlayerProps = {
  content: IntroVideoContent;
};

export default function IntroVideoPlayer({ content }: IntroVideoPlayerProps) {
  const { videoRef, isSoundEnabled, hasEnded, playWithSound, handleEnded } = useIntroVideoPlayback();
  const showSoundPrompt = !isSoundEnabled && !hasEnded;

  return (
    <div className="intro-video__frame relative isolate mx-auto w-full max-w-[1120px]">
      <div
        className="pointer-events-none absolute -inset-x-8 -inset-y-6 -z-10 rounded-[48px] bg-[radial-gradient(ellipse_at_center,rgba(45,106,79,0.16),transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-mist/70 bg-[#F1EFEA] p-1.5 shadow-[0_32px_64px_-24px_rgba(15,31,61,0.28),0_12px_28px_-12px_rgba(15,31,61,0.14)] md:rounded-[20px] md:p-2">
        <div className="relative aspect-video overflow-hidden rounded-xl md:rounded-[14px]">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster={INTRO_VIDEO_POSTER}
            preload="metadata"
            muted
            playsInline
            controls={isSoundEnabled && !hasEnded}
            controlsList="nodownload"
            onEnded={handleEnded}
            aria-label={content.videoLabel}
            width={1920}
            height={1080}
          >
            <source src={INTRO_VIDEO_SOURCE} type="video/mp4" />
          </video>

          {showSoundPrompt && (
            <button
              type="button"
              onClick={playWithSound}
              className="group absolute inset-0 flex cursor-pointer items-end justify-start p-4 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-green-light md:p-6"
              aria-label={`${content.soundLabel} (${content.durationLabel})`}
            >
              <span className="flex items-center gap-2.5 rounded-full bg-night/85 py-2 pl-3 pr-4 text-[13px] font-medium text-white shadow-[0_8px_24px_rgba(15,31,61,0.25)] backdrop-blur-md transition-transform duration-300 group-hover:scale-105 md:text-sm">
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-ulpiano-green">
                  <span
                    className="absolute inset-0 rounded-full bg-ulpiano-green/50 motion-safe:animate-ping [animation-duration:2.4s]"
                    aria-hidden
                  />
                  <Volume2 className="relative h-4 w-4" strokeWidth={2.25} aria-hidden />
                </span>
                {content.soundLabel}
                <span className="font-mono text-white/60">{content.durationLabel}</span>
              </span>
            </button>
          )}

          {hasEnded && (
            <button
              type="button"
              onClick={playWithSound}
              className="group absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-4 bg-night/35 backdrop-blur-[2px] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-green-light"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ulpiano-green text-white shadow-[0_12px_32px_rgba(45,106,79,0.5)] transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                <RotateCcw className="h-6 w-6 md:h-8 md:w-8" strokeWidth={2.25} aria-hidden />
              </span>
              <span className="text-sm font-medium text-white md:text-base">{content.replayLabel}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
