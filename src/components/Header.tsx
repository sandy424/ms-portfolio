import Link from "next/link";
import { profile } from "../data/profile";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#background", label: "Background" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-bold tracking-tight text-ink">
          <img src="/Logo.png" alt="" width={26} height={26} className="rounded-md" />
          {profile.englishName}
        </Link>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-sub transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-sub transition-colors hover:bg-ink/5 hover:text-ink sm:inline-flex"
          >
            GitHub
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink/85"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
