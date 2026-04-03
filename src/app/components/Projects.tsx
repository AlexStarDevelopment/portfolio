import Image from "next/image";

const projects = [
  {
    title: "Experimental Aircraft Safety Explorer",
    description:
      "Interactive analysis tool exploring 8,817 NTSB accident records for experimental amateur-built aircraft (1982-2026). Features fleet overview dashboards, aircraft type comparisons, engine analysis, risk estimation calculator, and accident browser with map integration.",
    image: "/projects/aviation-safety.png",
    url: "https://experimentalaircraftsafety.com",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Recharts",
      "Leaflet",
      "Vercel",
    ],
    highlights: [
      "8,817 accidents analyzed with initiator-based classification",
      "8 interactive pages including risk calculator and comparison tool",
      "Custom domain with structured data and SEO optimization",
    ],
  },
  {
    title: "Saint Paul Crime Map",
    description:
      "Interactive crime incident map for Saint Paul, MN with filtering by type, neighborhood, and date range. Features automated monthly data ingestion, marker clustering, personal crime dashboards, safety scores, and PDF address safety reports.",
    image: "/projects/crime-map.png",
    url: "https://saintpaulcrimemap.vercel.app",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Leaflet",
      "Material UI",
      "Tailwind",
      "NextAuth",
      "Stripe",
    ],
    highlights: [
      "#1 Google ranking for Saint Paul crime data",
      "Automated monthly data pipeline with address geocoding",
      "User accounts with premium tiers and PDF reports",
    ],
  },
  {
    title: "Lights Out STP",
    description:
      "Civic tech platform for tracking streetlight outages across Saint Paul using crowdsourced reports. Features city-wide streetlight data mapped with status indicators, theft report correlation, community verification system, and a contributor leaderboard.",
    image: "/projects/lights-out.png",
    url: "https://lights-out-stp.vercel.app",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "Leaflet",
      "GeoJSON",
      "Playwright",
    ],
    highlights: [
      "40,000+ streetlights mapped with real-time status",
      "Community-driven outage reporting and verification",
      "Theft report correlation with copper wire crime data",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-accent font-mono text-sm mb-2 tracking-wide">
          Featured Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-16">
          Projects
        </h2>

        <div className="flex flex-col gap-20">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`flex flex-col gap-8 lg:flex-row lg:gap-12 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-1 overflow-hidden rounded-xl border border-border bg-surface"
              >
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={1280}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
              </a>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface px-3 py-1 text-xs font-medium text-accent-light border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
                >
                  View Live Site
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
