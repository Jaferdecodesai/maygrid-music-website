import manifest from "@/lib/media-manifest.json";

export type MediaId = keyof typeof manifest;

const TRANSPARENT_GIF =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

type Props = {
  id: MediaId;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Only download the real file at this min-width. Below it, a 1×1 gif is used. */
  onlyAbove?: number;
  objectPosition?: string;
};

export function Media({
  id,
  alt,
  sizes,
  priority = false,
  className,
  onlyAbove,
  objectPosition,
}: Props) {
  const item = manifest[id];
  const media = onlyAbove ? `(min-width: ${onlyAbove}px)` : undefined;
  const avif = item.widths.map((w) => `/media/${id}-${w}.avif ${w}w`).join(", ");
  const webp = item.widths.map((w) => `/media/${id}-${w}.webp ${w}w`).join(", ");
  const fallback = `/media/${id}-${item.widths[item.widths.length - 1]}.webp`;

  return (
    <picture className={className}>
      <source media={media} type="image/avif" srcSet={avif} sizes={sizes} />
      <source media={media} type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={onlyAbove ? TRANSPARENT_GIF : fallback}
        alt={alt}
        width={item.width}
        height={item.height}
        sizes={onlyAbove ? undefined : sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        style={objectPosition ? { objectPosition } : undefined}
      />
    </picture>
  );
}
