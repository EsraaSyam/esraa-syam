import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { education, experience, projects } from "@/data/portfolio";
import { BookOpen, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import QuoteBlock from "@/components/QuoteBlock";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <section className="section-wrap about-section about-section-simple" id="about">
        <div className="about-copy">
          <SectionHeading
            number="01"
            label="About Me"
            title="A little bit about"
            accent="me"
          />
          <p className="section-lead">
            I&apos;m Esraa, a Computer Science graduate from Suez Canal
            University. I&apos;m a backend developer who enjoys turning ideas
            into real, functional systems. I care about clean architecture, good
            design, and continuous learning.
          </p>
          <Link href="/about" className="button button-outline">
            More about me
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <Reveal className="about-note info-card">
          <p className="eyebrow">How I work</p>
          <h3>Thoughtful systems, built to last.</h3>
          <p className="muted">
            I like turning complex requirements into simple, dependable backend
            solutions that people can build on with confidence.
          </p>
          <div className="about-points">
            <div>
              <span>01</span>
              <p>Understand the problem</p>
            </div>
            <div>
              <span>02</span>
              <p>Design a clear solution</p>
            </div>
            <div>
              <span>03</span>
              <p>Keep learning and improving</p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section-wrap journey-section">
        <SectionHeading
          number="02"
          label="My Journey"
          title="Education &"
          accent="experience"
        />
        <div className="journey-grid">
          <Reveal className="info-card journey-card">
            <div className="info-block">
              <span className="soft-icon">
                <BookOpen size={19} />
              </span>
              <div>
                <p className="eyebrow">Education</p>
                <h3>{education.degree}</h3>
                <p className="muted">
                  {education.school} · {education.year}
                </p>
                <p className="accent-text">{education.result}</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="info-card journey-card">
            {experience.map((item) => (
              <div className="info-block" key={item.company}>
                <span className="soft-icon">
                  <BriefcaseBusiness size={19} />
                </span>
                <div>
                  <p className="eyebrow">Experience</p>
                  <h3>{item.role}</h3>
                  <p className="muted">
                    {item.company} · {item.period}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="section-wrap projects-section" id="work">
        <SectionHeading
          number="03"
          label="Featured Projects"
          title="Some things I've"
          accent="built"
          href="/projects"
        />
        <div className="project-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <QuoteBlock />
      <ContactSection />
      <Footer />
    </main>
  );
}
