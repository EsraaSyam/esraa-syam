import type { SkillGroup as SkillGroupType } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function SkillGroup({ group }: { group: SkillGroupType }) {
  const GroupIcon = group.icon;
  return (
    <Reveal className="skill-card">
      <div className="skill-card-heading">
        <span className="soft-icon">
          <GroupIcon size={19} />
        </span>
        <h3>{group.title}</h3>
      </div>
      <div className="skill-list">
        {group.items.map((item) => {
          const Icon = item.icon;
          return (
            <div className="skill-item" key={item.label}>
              <Icon className="skill-item-icon" size={20} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
