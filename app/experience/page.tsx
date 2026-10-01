import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import TimelineItem from "@/components/TimelineItem";
import { experience } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <main>
      <Navbar />
      <div className="page-shell">
        <PageIntro
          eyebrow="05. The journey"
          title="My"
          accent="Experience"
          description="Where I've been, what I've learned, and how I've grown."
        />
        <div className="timeline">
          {experience.map((item) => (
            <TimelineItem key={item.company} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
