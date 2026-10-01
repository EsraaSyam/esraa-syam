import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function AchievementCard({
  title,
  detail,
  icon: Icon,
}: {
  title: string;
  detail: string;
  icon: LucideIcon;
}) {
  return (
    <Reveal className="achievement-card">
      <span className="soft-icon">
        <Icon size={19} />
      </span>
      <div>
        <h3>{title}</h3>
        <p className="muted">{detail}</p>
      </div>
    </Reveal>
  );
}
