import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const isHealthcareProject = project.slug === "healthcare-risk-monitoring";

  return (
    <main className="detail-page">
      <header className="site-header detail-header">
        <div className="container nav-shell">
          <Link
            className="brand"
            href="/"
            aria-label={`${profile.name} home`}
          >
            <span>{profile.initials}</span>
          </Link>

          <Link className="back-link" href="/#projects">
            ← Back to projects
          </Link>

          <Link className="nav-resume" href="/resume">
            Resume ↗
          </Link>
        </div>
      </header>

      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <p className="eyebrow">
              CASE STUDY · {project.eyebrow}
            </p>

            <h1>{project.title}</h1>

            <p className="detail-summary">
              {project.summary}
            </p>
          </div>

          <div className="detail-stack">
            <p>Technology stack</p>

            <div className="tag-row">
              {project.stack.map((item) => (
                <span className="tag tag-light" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="section detail-content">
        <div className="container detail-layout">
          {/* 01 — Problem */}
          <aside className="detail-sidebar">
            <span>01</span>
            <p>Problem</p>
          </aside>

          <div className="detail-block">
            <h2>The challenge</h2>
            <p>{project.challenge}</p>
          </div>

          {/* 02 — Method */}
          <aside className="detail-sidebar">
            <span>02</span>
            <p>Method</p>
          </aside>

          <div className="detail-block">
            <h2>Technical approach</h2>

            <ol className="detail-list">
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          {/* Healthcare method visualizations */}
          {isHealthcareProject && (
            <section
              className="detail-visual-section"
              aria-labelledby="healthcare-method-visuals"
            >
              <div className="detail-visual-header">
                <p className="eyebrow">METHOD VISUALIZATION</p>
                <h2 id="healthcare-method-visuals">
                  Combined anomaly detection framework
                </h2>

                <p>
                  Isolation Forest identifies complex transaction anomalies, while
                  Nelson&apos;s Rules detect interpretable statistical shifts,
                  trends, and process-control violations.
                </p>
              </div>

              <div className="method-visual-grid">
                <figure className="case-visual">
                  <div className="case-visual-image">
                    <Image
                      src="/images/healthcare-isolation-forest-overview.png"
                      alt="Isolation Forest monitoring overview across hospital, department, and customer levels"
                      fill
                      sizes="(max-width: 1000px) 100vw, 50vw"
                    />
                  </div>

                  <figcaption>
                    <strong>Isolation Forest monitoring overview.</strong>
                    <span>
                      Multi-level anomaly detection across hospital, department,
                      and customer transaction data.
                    </span>
                  </figcaption>
                </figure>

                <figure className="case-visual">
                  <div className="case-visual-image">
                    <Image
                      src="/images/healthcare-nelson-rules-overview.png"
                      alt="Nelson's Rules monitoring overview for healthcare transaction metrics"
                      fill
                      sizes="(max-width: 1000px) 100vw, 50vw"
                    />
                  </div>

                  <figcaption>
                    <strong>Nelson&apos;s Rules monitoring overview.</strong>
                    <span>
                      Statistical rules identify unusual shifts, runs, trends, and
                      control-limit violations.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </section>
          )}

          {/* 03 — Impact */}
          <aside className="detail-sidebar">
            <span>03</span>
            <p>Outcome</p>
          </aside>

          <div className="detail-block">
            <h2>Impact</h2>

            <ul className="impact-list">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Healthcare impact visualization */}
          {isHealthcareProject && (
            <section
              className="detail-visual-section impact-visual-section"
              aria-labelledby="healthcare-impact-visual"
            >
              <div className="detail-visual-header">
                <p className="eyebrow">MODEL OUTPUT</p>
                <h2 id="healthcare-impact-visual">
                  Anomaly-score distribution
                </h2>

                <p>
                  The combined monitoring workflow separates routine transactions
                  from review cases and high-risk anomalies requiring further
                  investigation.
                </p>
              </div>

              <figure className="case-visual case-visual-wide">
                <div className="case-visual-image">
                  <Image
                    src="/images/healthcare-anomaly-distribution.png"
                    alt="Healthcare transaction anomaly-score distribution using Isolation Forest and Nelson's Rules"
                    fill
                    sizes="(max-width: 1200px) 100vw, 1100px"
                    loading="eager"
                  />
                </div>

                <figcaption>
                  <strong>Healthcare transaction anomaly distribution.</strong>
                  <span>
                    Isolation Forest scores and Nelson&apos;s Rules signals support
                    prioritization of routine, review, and high-risk transactions.
                  </span>
                </figcaption>
              </figure>
            </section>
          )}
        </div>
      </section>



      <section className="next-project">
        <div className="container next-project-card">
          <p>Next case study</p>

          <Link href={`/projects/${nextProject.slug}`}>
            {nextProject.title}{" "}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-row">
          <span>© 2026 {profile.name}</span>
          <Link href="/">Return home</Link>
        </div>
      </footer>
    </main>
  );
}
