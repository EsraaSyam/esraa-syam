"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/data/portfolio";
import BlobImage from "@/components/BlobImage";
import SparkleIcon from "@/components/SparkleIcon";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">
            Software Engineer <span className="eyebrow-line" />
          </p>

          <h1>
            Hi, I&apos;m
            <br />
            <span>Esraa Syam</span>
          </h1>

          <p className="hero-role">
            Where ideas meet logic, I build what comes next.
          </p>

          <p className="hero-description">
            A Computer Science graduate who loves solving problems, 
            building things, and learning along the way.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              View projects <ArrowRight size={17} />
            </Link>

            <Link href="/#contact" className="button button-outline">
              Let&apos;s connect <ArrowRight size={17} />
            </Link>
          </div>

          <div className="social-row">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                href={href}
                key={label}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon size={19} />
              </a>
            ))}

          </div>
        </Reveal>
      </div>

      <div className="hero-art">
        <BlobImage
          src="/images/esraa.jpg?v=2"
          alt="Portrait of Esraa Syam"
          handwritten="Better code, brighter future ♡"
        />
      </div>

      <Link
        href="/#about"
        className="scroll-cue"
        aria-label="Scroll to about section"
      >
        <span>scroll to explore</span>
        <ArrowDown size={17} />
      </Link>
      <SparkleIcon className="hero-star" size={18} />
    </section>
  );
}
