import ScrollReveal from "@/components/animations/ScrollReveal";
import IntroVideoPlayer from "./IntroVideoPlayer";
import type { IntroVideoContent } from "./types";

type IntroVideoSectionProps = {
  content: IntroVideoContent;
};

export default function IntroVideoSection({ content }: IntroVideoSectionProps) {
  return (
    <section
      id="video"
      aria-labelledby="intro-video-title"
      className="relative overflow-hidden bg-white pb-4 pt-20 md:pb-8 md:pt-28"
    >
      <div className="container relative">
        <ScrollReveal className="mx-auto mb-12 max-w-[760px] text-center md:mb-16">
          <p className="eyebrow mb-4 text-ulpiano-green">{content.eyebrow}</p>
          <h2 id="intro-video-title" className="h2 text-ink">
            {content.title}{" "}
            <span className="hero__title-accent">{content.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-relaxed text-slate md:text-lg">
            {content.subtitle}
          </p>
        </ScrollReveal>

        <IntroVideoPlayer content={content} />
      </div>
    </section>
  );
}
