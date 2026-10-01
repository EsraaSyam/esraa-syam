import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function ProjectCard({ project }: { project: Project }) {
  const imageSrc = `${
    process.env.NODE_ENV === "production" ? "/esraa-syam" : ""
  }${project.image}`;

  return (
    <Reveal className="project-card">
      <div className="project-image">
        <Image
          src={imageSrc}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="project-card-content">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <p className="muted project-description">{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <a
          className="text-link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          View project <ExternalLink size={15} />
        </a>
      </div>
    </Reveal>
  );
}
