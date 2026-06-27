import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import { education, experiences, profile, projects, skillGroups } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name}`,
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar no-print">
        <Link href="/">← Back to portfolio</Link>
        <PrintButton />
      </div>

      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">DATA SCIENCE · APPLIED AI · SYSTEMS</p>
            <h1>{profile.name}</h1>
            <p className="resume-role">{profile.role}</p>
          </div>
          <div className="resume-contact">
            <span>Philadelphia, PA</span>
            <span>{profile.email}</span>
            <span>
  <a href={profile.linkedin} target="_blank" rel="noreferrer">
    linkedin.com/in/yuzhang-liu-x09051420
  </a>
  {" · "}
  <a href={profile.github} target="_blank" rel="noreferrer">
    github.com/yuzliu1222
  </a>
</span>
          </div>
        </header>

        <section className="resume-section resume-summary">
          <h2>Profile</h2>
          <p>{profile.about}</p>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-list">
            {experiences.slice(1).map((item) => (
              <article key={`${item.organization}-${item.role}`}>
                <div className="resume-item-heading">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.organization}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Selected Projects</h2>
          <div className="resume-list">
            {projects.slice(0, 4).map((project) => (
              <article key={project.slug}>
                <div className="resume-item-heading">
                  <h3>{project.title}</h3>
                  <span>{project.stack.slice(0, 3).join(" · ")}</span>
                </div>
                <p>{project.summary}</p>
                <ul>
                  {project.impact.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-list">
            {education.map((item) => (
              <article key={item.school}>
                <div className="resume-item-heading">
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.degree}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section resume-skills">
          <h2>Technical Skills</h2>
          {skillGroups.map((group) => (
            <p key={group.title}>
              <strong>{group.title}:</strong> {group.items.join(", ")}
            </p>
          ))}
        </section>
      </article>
    </main>
  );
}
