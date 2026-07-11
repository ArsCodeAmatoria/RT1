import Image from "next/image";

/**
 * Fullscreen hero media — photography with carbon weave and blue signal glow.
 */
function HeroVideo({
  poster,
  alt = "",
  className,
}: {
  poster?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={className} aria-hidden>
      {poster ? (
        <Image
          src={poster}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-left scale-110 translate-x-[12%]"
        />
      ) : null}

      <div
        className={
          poster
            ? "texture-carbon absolute inset-0 opacity-40 mix-blend-overlay"
            : "texture-carbon absolute inset-0"
        }
      />
      {poster ? (
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--rt-background)_0%,rgb(9_9_9_/_0.92)_12%,rgb(9_9_9_/_0.55)_24%,transparent_38%,transparent_78%,rgb(9_9_9_/_0.72)_92%,var(--rt-background)_100%)]" />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_15%,rgb(59_158_255_/_0.14),transparent_58%),linear-gradient(180deg,rgb(9_9_9_/_0.28)_0%,rgb(9_9_9_/_0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_80%_70%,rgb(125_211_252_/_0.08),transparent_55%)]" />
    </div>
  );
}

export { HeroVideo };
