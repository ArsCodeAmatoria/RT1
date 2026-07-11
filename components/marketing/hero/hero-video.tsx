/**
 * Fullscreen hero media layer — carbon fiber atmosphere with blue signal glow.
 */
function HeroVideo({
  poster,
  className,
}: {
  poster?: string;
  className?: string;
}) {
  return (
    <div className={className} aria-hidden>
      {poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      ) : null}

      <div className="texture-carbon absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_15%,rgb(59_158_255_/_0.16),transparent_58%),linear-gradient(180deg,rgb(9_9_9_/_0.35)_0%,rgb(9_9_9_/_0.85)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_80%_70%,rgb(125_211_252_/_0.08),transparent_55%)]" />
    </div>
  );
}

export { HeroVideo };
