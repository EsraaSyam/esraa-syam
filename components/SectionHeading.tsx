import Link from "next/link";

type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
  accent?: string;
  href?: string;
};

export default function SectionHeading({
  number,
  label,
  title,
  accent,
  href,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          {number}. {label}
        </p>
        <h2>
          {title} {accent && <span>{accent}</span>}
        </h2>
      </div>
      {href && (
        <Link href={href} className="text-link">
          View all projects <span aria-hidden="true">↗</span>
        </Link>
      )}
    </div>
  );
}
