"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
          <span aria-hidden="true">&lt;&gt;</span> Esraa Syam
        </Link>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Link href="/#contact" className="button button-outline nav-contact">
            Contact <span aria-hidden="true">↗</span>
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="icon-button menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {isOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="button button-primary"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s connect <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
