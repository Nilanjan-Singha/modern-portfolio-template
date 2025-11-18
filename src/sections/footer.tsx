"use client";
import React from "react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303..." />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846..." />
  </svg>
);

const BlueskyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <title>Bluesky</title>
    <path d="M12.11.21c4.2 0 7.8 2.5 9 6.2..." />
  </svg>
);

const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <title>Dribbble</title>
    <path d="M12,24C5.373,24,0,18.627,0,12S5.373,0..." />
  </svg>
);

const Footer = () => {
  return (
    <footer className="py-12 mt-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <h2>Nilanjan.dev</h2>
          <nav className="flex gap-6">
            <a className="text-muted-foreground text-sm hover:text-foreground transition-colors" href="#about">About</a>
            <a className="text-muted-foreground text-sm hover:text-foreground transition-colors" href="#experience">Experience</a>
            <a className="text-muted-foreground text-sm hover:text-foreground transition-colors" href="#projects">Projects</a>
          </nav>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex items-center justify-between text-sm">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Nilanjan. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub">
              <GithubIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <XIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="#" aria-label="Bluesky">
              <BlueskyIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="#" aria-label="Dribbble">
              <DribbbleIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
