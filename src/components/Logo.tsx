type Props = {
  className?: string;
};

/**
 * Geometric mark redrawn from the 150px profile picture.
 * The wordmark is set in type, not scaled from the bitmap.
 */
export function Logo({ className }: Props) {
  return (
    <span className={className ? `logo ${className}` : "logo"}>
      <svg className="logo-mark" viewBox="32 14 82 80" aria-hidden="true">
        <rect x="35" y="16" width="18" height="39" fill="currentColor" />
        <polygon points="67,16 83,16 75,28" fill="#E05020" />
        <rect x="92" y="16" width="19" height="11" fill="#F0A010" />
        <circle cx="100.5" cy="47.5" r="13.5" fill="#E05020" />
        <path d="M66 64 V49 A8 8 0 0 1 82 49 V64 Z" fill="currentColor" />
        <rect x="37" y="66" width="12" height="8" fill="#E05020" />
        <circle cx="43" cy="84" r="5.5" fill="#F0A010" />
        <path
          fill="#F0A010"
          fillRule="evenodd"
          d="M59 72 H91 V91 H59 Z M69.5 82 a6.2 6.2 0 0 1 12.4 0 V91 H69.5 Z"
        />
        <polygon points="111,68 111,88 98,78" fill="currentColor" />
      </svg>
      <span className="logo-type">
        <span className="logo-name">MayGrid</span>
        <span className="logo-tag">Music beyond Grid</span>
      </span>
    </span>
  );
}
