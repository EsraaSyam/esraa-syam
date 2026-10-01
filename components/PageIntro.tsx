import Reveal from "@/components/Reveal";

export default function PageIntro({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <Reveal className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>
        {title} <span>{accent}</span>
      </h1>
      <p className="page-subtitle">{description}</p>
    </Reveal>
  );
}
