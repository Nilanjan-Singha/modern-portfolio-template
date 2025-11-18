import React from "react";
import { Menu, Github } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const Logo = () => (
  <a href="/" aria-label="Homepage">
    <svg
      width="124"
      height="32"
      viewBox="0 0 124 32"
      className="text-foreground fill-current"
    >
      <circle cx="16" cy="16" r="12" />
      <circle cx="16" cy="16" r="10" className="fill-background" />
      <g className="stroke-current" strokeWidth="1.5" strokeLinecap="round">
        <line x1="12" y1="12" x2="20" y2="20" />
        <line x1="20" y1="12" x2="12" y2="20" />
      </g>
      <text
        x="38"
        y="21"
        fontFamily="var(--font-sans), sans-serif"
        fontSize="14"
        fontWeight="600"
        className="fill-current"
      >
        logoipsum
      </text>
    </svg>
  </a>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z" />
  </svg>
);

export default function Navigation() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <header className="fixed z-10 top-6 inset-x-4 h-14 bg-background border border-border max-w-3xl mx-auto rounded-full backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="py-2 px-4 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right-side buttons */}
        <div className="flex items-center gap-2">

          {/* X icon */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit X profile"
            className="hidden sm:inline-flex items-center justify-center size-9 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <TwitterIcon className="size-4" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="inline-flex items-center justify-center size-9 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Github className="size-5" />
          </a>

          {/* Theme Toggle */}
          <div className="hidden sm:inline-flex">
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              className="inline-flex items-center justify-center size-9 rounded-full border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Menu className="size-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
