import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  education,
  experiences,
  metrics,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-shell">
          <Link className="brand" href="#top" aria-label="Yuzhang Liu home">
            <span>{profile.initials}</span>
          </Link>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </nav>
          <Link className="nav-resume" href="/resume">
            Resume ↗
          </Link>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">DATA SCIENCE · APPLIED AI · SYSTEMS</p>
            <h1>
              Building useful AI,
              <span> from model to workflow.</span>
            </h1>
            <p className="hero-lede">{profile.headline}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects
              </a>
              <Link className="button button-secondary" href="/resume">
                View résumé
              </Link>
            </div>
            <p className="availability">
              <span className="status-dot" /> {profile.availability}
            </p>
          </div>

          <aside className="hero-card" aria-label="Profile snapshot">
            <div className="hero-card-top">
              <div className="monogram">{profile.initials}</div>
              <div>
                <p className="mini-label">PROFILE</p>
                <h2>{profile.name}</h2>
                <p>{profile.role}</p>
              </div>
            </div>
            <div className="code-panel" aria-hidden="true">
              <div className="code-toolbar">
                <span />
                <span />
                <span />
              </div>
              <pre>
                <code>{`project = {
  "focus": "reliable AI",
  "tools": ["ML", "LLM", "SQL"],
  "goal": "real-world impact"
}`}</code>
              </pre>
            </div>
            <div className="hero-card-footer">
              <span>Philadelphia, PA</span>
              <span>Available 2027+</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="metrics-strip" aria-label="Selected impact metrics">
        <div className="container metrics-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="container two-column about-grid">
          <SectionHeading
            eyebrow="01 / ABOUT"
            title="A data scientist who enjoys the engineering part, too."
          />
          <div className="about-copy">
            <p>{profile.about}</p>
            <p>
              I am especially interested in the space between research prototypes and production systems:
              data quality, model evaluation, APIs, databases, monitoring, and user-centered delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="experience">
        <div className="container">
          <SectionHeading
            eyebrow="02 / EXPERIENCE"
            title="Working across healthcare, semiconductors, and enterprise systems."
            copy="A mix of analytical depth, software implementation, and cross-functional problem solving."
          />
          <div className="timeline">
            {experiences.slice(1).map((experience, index) => (
              <article className="timeline-item" key={`${experience.organization}-${experience.role}`}>
                <div className="timeline-index">0{index + 1}</div>
                <div>
                  <p className="timeline-period">{experience.period}</p>
                  <h3>{experience.role}</h3>
                  <p className="timeline-org">{experience.organization}</p>
                </div>
                <p className="timeline-details">{experience.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <SectionHeading
            eyebrow="03 / SELECTED PROJECTS"
            title="Projects designed around measurable outcomes."
            copy="Each case study shows the problem, technical approach, and impact—not just the tool list."
          />
          <div className="projects-grid">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="section-action">
            <Link className="button button-secondary" href={`/projects/${projects[4].slug}`}>
              View database project
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="skills">
        <div className="container">
          <SectionHeading
            eyebrow="04 / CAPABILITIES"
            title="A balanced toolkit for data, models, and delivery."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="container two-column education-grid">
          <SectionHeading eyebrow="05 / EDUCATION" title="Grounded in data science and statistics." />
          <div className="education-list">
            {education.map((item) => (
              <article key={item.school}>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <span>{item.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-card">
          <div>
            <p className="eyebrow">LET’S CONNECT</p>
            <h2>Looking for someone who can connect data, AI, and business context?</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="button button-outline-light" href={profile.linkedin} target="_blank" rel="noreferrer">
              https://www.linkedin.com/in/yuzhang-liu-x09051420r
            </a>
            <a className="button button-outline-light" href={profile.github} target="_blank" rel="noreferrer">
              https://github.com/yuzliu1222
            </a>
          </div>
          <p className="privacy-note">
            Before publishing, replace the placeholder LinkedIn and GitHub links in <code>src/data/portfolio.ts</code>.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-row">
          <span>© 2026 {profile.name}</span>
          <span>Built with Next.js · Ready for Vercel</span>
        </div>
      </footer>
    </main>
  );
}
