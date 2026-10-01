import Link from "next/link";
import { navItems } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="logo">
        <span aria-hidden="true">&lt;&gt;</span> Esraa Syam
      </Link>
      <div className="footer-links">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <p className="muted">© {new Date().getFullYear()} Esraa Syam</p>
    </footer>
  );
}
