import { Download } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/data/portfolio";
import BlobImage from "@/components/BlobImage";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <Reveal className="contact-copy">
        <p className="eyebrow">05. Get in touch</p>
        <h2>
          Let&apos;s <span>connect</span>
        </h2>
        <p className="section-lead">
          I&apos;m always open to new opportunities, collaborations, or just a
          friendly chat.
        </p>
        <div className="social-row">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              href={href}
              aria-label={label}
              key={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
        <div className="contact-actions mt-6 -ml-2">
          <Link href="/EsraaSyamResume.pdf" className="button button-outline" download>
            <Download size={16} /> Download CV
          </Link>
        </div>
        
      </Reveal>
      <div className="contact-art">
        <BlobImage
          src=""
          alt="A calm, reflective night scene"
          handwritten="Good things take time ♡"
        />
      </div>
    </section>
  );
}
