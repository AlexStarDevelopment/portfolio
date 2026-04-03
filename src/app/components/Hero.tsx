import Starfield from "./Starfield";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Starfield background */}
      <Starfield />

      {/* Gradient background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        <p className="text-accent font-mono text-sm mb-4 tracking-wide">
          Full-Stack Developer
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 gradient-text">
          Alex Star
        </h1>
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          I build data-driven web applications that solve real problems.
          From interactive crime maps to aviation safety analysis tools,
          I turn complex data into intuitive experiences.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-light transition-colors"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-hover transition-colors"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
