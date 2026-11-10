import { profile, experience, projects, skills, education, achievements } from "@/data/resume";
import { Icon } from "@/components/Icon";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const skillCount = skills.reduce((n, s) => n + s.items.length, 0);

/** Bold the lead-in of a bullet such as "ItsBot (itsbot.ai) — platform: build ..." */
function Bullet({ text }: { text: string }) {
  const i = text.indexOf(": ");
  if (i > 0 && i < 90) {
    return (
      <li>
        <strong>{text.slice(0, i + 1)}</strong>
        {text.slice(i + 1)}
      </li>
    );
  }
  return <li>{text}</li>;
}

function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-label">
        {eyebrow && <p className="eyebrow-label">{eyebrow}</p>}
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            {profile.name}
          </a>
          <nav aria-label="Primary" className="nav">
            <ul className="nav-list">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={profile.resumePdf} className="btn btn-light btn-small" download>
            Résumé PDF
          </a>
        </div>
      </header>

      <main id="main">
        {/* ---------- Intro (dark) ---------- */}
        <section id="top" className="hero container" aria-label="Introduction">
          <p className="badge">
            <span className="badge-dot" aria-hidden="true" />
            {profile.title}
          </p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-lede">
            I build responsive, production-grade web applications with React.js, Next.js and
            TypeScript.
          </p>
          <p className="hero-sub">
            {profile.yearsExperience} years taking SaaS dashboards, marketplaces, admin panels and
            AI products from design handoff to production. Based in {profile.location}.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-light">
              View my work <span aria-hidden="true">→</span>
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-outline">
              Email me
            </a>
          </div>

          <ul className="hero-checks">
            <li>{profile.yearsExperience} years in production</li>
            <li>React · Next.js · TypeScript</li>
          </ul>

          <dl className="facts">
            <div>
              <dt>Years experience</dt>
              <dd>{profile.yearsExperience}</dd>
            </div>
            <div>
              <dt>Companies</dt>
              <dd>{experience.length}</dd>
            </div>
            <div>
              <dt>Products shipped</dt>
              <dd>{profile.productsShipped}</dd>
            </div>
            <div>
              <dt>Skills &amp; tools</dt>
              <dd>{Math.floor(skillCount / 10) * 10}+</dd>
            </div>
          </dl>
        </section>

        {/* ---------- About + Experience (light panel) ---------- */}
        <div className="container">
          <div className="panel panel-light">
            <Section id="about" title="About" eyebrow="Profile">
              <div className="prose">
                {profile.summary.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Section>

            <Section id="experience" title="Experience" eyebrow="Career">
              <ol className="jobs">
                {experience.map((job) => {
                  const current = job.end === "Present";
                  return (
                    <li key={job.company + job.start} className={`job${current ? " is-current" : ""}`}>
                      <div className="job-head">
                        <h3 className="job-title">
                          {job.role}
                          <span className="job-company">
                            <span aria-hidden="true"> · </span>
                            <span className="sr-only">at </span>
                            {job.company}
                          </span>
                        </h3>
                        <p className="job-dates">
                          <time>{job.start}</time> – <time>{job.end}</time>
                        </p>
                      </div>
                      <p className="job-location">{job.location}</p>
                      <ul className="bullets">
                        {job.bullets.map((b, i) => (
                          <Bullet key={i} text={b} />
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ol>
            </Section>
          </div>
        </div>

        {/* ---------- Projects (dark panel) ---------- */}
        <div className="container">
          <div className="panel panel-dark">
            <Section id="projects" title="Key projects" eyebrow="Selected work">
              <div className="projects">
                {projects.map((p) => (
                  <article key={p.name} className="project">
                    <p className="project-tagline">{p.tagline}</p>
                    <h3 className="project-name">{p.name}</h3>
                    <ul className="bullets">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    {p.stack && (
                      <div className="project-stack">
                        <span className="sr-only">Stack: </span>
                        <ul className="chips chips-dark">
                          {p.stack.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {p.links && (
                      <p className="project-links">
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                            {l.label}
                            <span aria-hidden="true"> ↗</span>
                          </a>
                        ))}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </Section>
          </div>
        </div>

        {/* ---------- Skills + Education (light panel) ---------- */}
        <div className="container">
          <div className="panel panel-light">
            <Section id="skills" title="Technical skills" eyebrow="Toolkit">
              <dl className="skills">
                {skills.map((s) => (
                  <div key={s.group} className="skill-row">
                    <dt className="skill-group">
                      <span className={`skill-icon tone-${s.tone}`}>
                        <Icon name={s.icon} />
                      </span>
                      <span>
                        {s.group}
                        <span className="skill-count">{s.items.length} skills</span>
                      </span>
                    </dt>
                    <dd>
                      <ul className="chips">
                        {s.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </Section>

            <Section id="education" title="Education" eyebrow="Background">
              <ul className="edu">
                {education.map((e) => (
                  <li key={e.degree}>
                    <div className="job-head">
                      <h3 className="job-title">
                        {e.degree}
                        {e.detail && <span className="job-company"> — {e.detail}</span>}
                      </h3>
                      <p className="job-dates">{e.year}</p>
                    </div>
                    <p className="job-location">
                      {e.school} · {e.location}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="achievements" title="Achievements" eyebrow="Recognition">
              <ul className="achievements">
                {achievements.map((a) => (
                  <li key={a.title}>
                    <strong>{a.title}</strong> — {a.detail}
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>

        {/* ---------- Contact (blue band) ---------- */}
        <div className="container">
          <section id="contact" className="contact" aria-labelledby="contact-title">
            <div className="contact-main">
              <p className="eyebrow-label">Contact</p>
              <h2 id="contact-title" className="contact-title">
                Have a role or a project in mind?
              </h2>
              <p className="contact-lede">Email is the quickest way to reach me.</p>
              <a href={`mailto:${profile.email}`} className="contact-email">
                {profile.email}
              </a>
            </div>
            <dl className="contact-list">
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    View profile
                  </a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Résumé</dt>
                <dd>
                  <a href={profile.resumePdf} download>
                    Download PDF
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            <a href="#top">Back to top ↑</a>
          </p>
        </div>
      </footer>
    </>
  );
}
