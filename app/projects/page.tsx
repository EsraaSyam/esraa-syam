"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";
import { projects, type ProjectCategory } from "@/data/portfolio";

const filters = ["All", "Backend", "Full Stack", "Personal"] as const;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === (filter as ProjectCategory),
        );

  return (
    <main>
      <Navbar />
      <div className="page-shell">
        <PageIntro
          eyebrow="03. Selected work"
          title="My"
          accent="Projects"
          description="Here are some of the projects I've worked on, with a focus on backend development and real-world problem solving."
        />
        <div className="filter-tabs" role="tablist">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
              role="tab"
              aria-selected={filter === item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="project-grid project-grid-page">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
