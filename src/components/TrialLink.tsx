import { whatsappHref } from "@/lib/site";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function TrialLink({ className, children }: Props) {
  return (
    <a
      className={className ? `string-link ${className}` : "string-link"}
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="string-link__strings" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} style={{ ["--i" as string]: i }} />
        ))}
      </span>
      <span className="string-link__label">
        {children ?? "Book your free trial"}
        <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
      </span>
    </a>
  );
}
