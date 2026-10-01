import { BriefcaseBusiness } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function TimelineItem({
  item,
}: {
  item: { company: string; role: string; period: string; bullets: string[] };
}) {
  return (
    <Reveal className="timeline-item">
      <span className="timeline-dot" aria-hidden="true" />
      <article className="timeline-card">
        <div className="timeline-icon">
          <BriefcaseBusiness size={18} />
        </div>
        <div>
          <p className="eyebrow">{item.period}</p>
          <h3>{item.role}</h3>
          <p className="accent-text">{item.company}</p>
          <ul>
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}
