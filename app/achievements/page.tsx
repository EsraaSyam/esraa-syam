import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import AchievementCard from "@/components/AchievementCard";
import { achievements } from "@/data/portfolio";

export default function AchievementsPage() {
  return (
    <main>
      <Navbar />
      <div className="page-shell">
        <PageIntro
          eyebrow="06. Milestones"
          title="My"
          accent="Achievements"
          description="A few highlights from my journey."
        />
        <div className="achievement-list">
          {achievements.map((item) => (
            <AchievementCard key={item.title} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
