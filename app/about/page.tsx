import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import TimelineItem from "@/components/TimelineItem";
import SkillGroup from "@/components/SkillGroup";
import AchievementCard from "@/components/AchievementCard";
import {
  achievements,
  experience,
  skillGroups,
} from "@/data/portfolio";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="page-shell about-page">
        <PageIntro
          eyebrow="01. About me"
          title="More about"
          accent="Esraa"
          description="A closer look at my experience, skills, and milestones as a backend developer."
        />

        <section className="about-page-section" aria-labelledby="experience-heading">
          <div className="page-section-heading">
            <p className="eyebrow">02. Experience</p>
            <h2 id="experience-heading">Where I&apos;ve <span>grown</span></h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <TimelineItem key={item.company} item={item} />
            ))}
          </div>
        </section>

        <section className="about-page-section" aria-labelledby="skills-heading">
          <div className="page-section-heading">
            <p className="eyebrow">03. Skills</p>
            <h2 id="skills-heading">What I <span>work with</span></h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section className="about-page-section" aria-labelledby="achievements-heading">
          <div className="page-section-heading">
            <p className="eyebrow">04. Achievements</p>
            <h2 id="achievements-heading">A few <span>milestones</span></h2>
          </div>
          <div className="achievement-list">
            {achievements.map((item) => (
              <AchievementCard key={item.title} {...item} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
