const items = [
  "Music beyond Grid",
  "From practice to performance",
  "Guitar and vocals",
  "Dubai",
  "Every Sunday",
  "Western",
  "Bollywood",
  "South Indian",
];

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <span className="marquee__group">
          {items.map((item) => (
            <span className="marquee__item" key={item}>
              {item}
              <span className="marquee__dot" />
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
