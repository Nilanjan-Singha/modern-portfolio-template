import { Zap, CircleArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-6 bg-white dark:bg-black">

      {/* Center Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-white dark:bg-black"
        style={{
          backgroundImage:
            'radial-gradient(125% 125% at 50% 90%, rgba(255,255,255,0.1) 40%, #6366f1 100%)',
        }}
      />

      {/* Grid Pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full stroke-gray-400/30 dark:stroke-gray-600/20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)] skew-y-12"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-grid-pattern"
            width={40}
            height={40}
            patternUnits="userSpaceOnUse"
            x={-1}
            y={-1}
          >
            <path d="M.5 40V.5H40" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#hero-grid-pattern)" />
      </svg>

      {/* Content */}
      <div className="relative z-[1] mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center justify-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
          <Zap className="h-3 w-3 fill-current" />
          Fullstack Web Developer
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl md:text-6xl">
          Building Modern, Fast &nbsp;Indian Web Experiences
        </h1>

        <p className="mt-6 text-[17px] md:text-lg text-muted-foreground">
          Hey! I'm Nilanjan, a second-year Computer Science student from India,
          passionate about building performant and user-centric web applications.
          I love working across the stack — from designing clean UIs to crafting
          scalable backend systems.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <a href='/#about'><button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 text-base font-medium text-primary-foreground shadow-xs transition-[color,box-shadow] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
            See What I Do
            <CircleArrowDown className="ml-2 h-[22px] w-[22px]" />
          </button></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
