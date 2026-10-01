import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import SkillGroup from "@/components/SkillGroup";
import { skillGroups } from "@/data/portfolio";

export default function SkillsPage() {
  return (
    <main>
      <Navbar />
      <div className="page-shell">
        <PageIntro
          eyebrow="04. Toolbox"
          title="My"
          accent="Skills"
          description="Technologies and tools I work with."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
