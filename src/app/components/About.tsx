const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Leaflet / GIS",
      "Recharts",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "C# / .NET Core",
      "REST APIs",
      "SQL Server",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    category: "AI & LLMs",
    items: [
      "Claude / Claude Code",
      "MCP (Model Context Protocol)",
      "OpenCode",
      "Llama",
      "Qwen Coder",
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      "Git",
      "Vercel",
      "Azure",
      "Stripe",
      "Playwright",
      "Jest",
      "CI/CD",
    ],
  },
];

const experience = [
  {
    role: "Application Developer III",
    company: "Marco Technologies",
    period: "Dec 2024 - Present",
    location: "Minnetonka, MN (Remote)",
    description:
      "Full-stack application development with React.js and .NET Core, building internal tools and integrations for a national technology solutions provider.",
  },
  {
    role: "Software Development Consultant",
    company: "Intertech",
    period: "May 2019 - Dec 2024",
    location: "Eagan, MN",
    description:
      "Full-stack consulting across JavaScript, React, .NET, Azure, and cloud migration projects for enterprise clients. Recognized as a standout internal staff consultant.",
  },
  {
    role: "Software Engineer Intern",
    company: "Transcendent Technologies, Inc.",
    period: "May 2017 - Oct 2017",
    location: "Neenah, WI",
    description:
      "Software engineering internship gaining hands-on experience in professional development workflows.",
  },
];

const education = [
  {
    school: "Fox Valley Technical College",
    honors: "Dean's List (2016, 2017, 2018)",
  },
];

const certifications = [
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    year: "2020",
  },
];

import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-accent font-mono text-sm mb-2 tracking-wide">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-16">
            About Me
          </h2>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Bio */}
          <FadeIn className="lg:col-span-2 space-y-4">
            <p className="text-muted leading-relaxed">
              I&apos;m a full-stack developer based in St. Paul, Minnesota. I specialize in
              building data-driven web applications that turn complex, messy
              datasets into tools people actually use. My projects span civic
              tech, aviation safety research, and personal finance &mdash; each one
              driven by a real problem I wanted to solve.
            </p>
            <p className="text-muted leading-relaxed">
              I work across the entire stack &mdash; from React and Next.js on the
              frontend to Node.js, Express, C#, and .NET Core on the backend, with
              databases like MongoDB and SQL Server and deployment on Vercel and Azure.
              I care about shipping things that work well, load fast, and are genuinely useful.
            </p>

            {/* Experience */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Experience
              </h3>
              {experience.map((exp) => (
                <div key={exp.company} className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h4 className="font-medium text-foreground">{exp.role}</h4>
                    <span className="text-sm text-muted">{exp.location}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-2">
                    <p className="text-accent text-sm">{exp.company}</p>
                    <span className="text-xs text-muted">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted">{exp.description}</p>
                </div>
              ))}
            </div>

            {/* Education & Certs */}
            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Education
                </h3>
                {education.map((ed) => (
                  <div key={ed.school}>
                    <p className="font-medium text-foreground text-sm">
                      {ed.school}
                    </p>
                    <p className="text-sm text-muted">{ed.honors}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Certifications
                </h3>
                {certifications.map((cert) => (
                  <div key={cert.name}>
                    <p className="font-medium text-foreground text-sm">
                      {cert.name}
                    </p>
                    <p className="text-sm text-muted">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Skills sidebar */}
          <FadeIn className="space-y-8">
            <h3 className="text-lg font-semibold text-foreground">Skills</h3>
            {skills.map((group) => (
              <div key={group.category}>
                <h4 className="text-sm font-medium text-accent mb-3">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
