// import React from "react";

const features = [
  {
    number: "01",
    title: "Learn with direction",
    description:
      "Follow a structured path for aptitude, core subjects, and technical interviews instead of guessing what to study next.",
  },
  {
    number: "02",
    title: "Practice by doing",
    description:
      "Strengthen problem-solving through coding challenges and practice in multiple programming languages.",
  },
  {
    number: "03",
    title: "Understand your gaps",
    description:
      "Use performance insights to identify weaker topics, review mistakes, and decide what deserves your attention.",
  },
  {
    number: "04",
    title: "Improve consistently",
    description:
      "Build a steady preparation routine with progress tracking and learning recommendations that adapt as you improve.",
  },
];

const steps = [
  ["01", "Assess", "Start with a skill check to understand your current level."],
  ["02", "Learn", "Work through focused topics and explanations at your own pace."],
  ["03", "Practice", "Solve questions and coding challenges to apply what you learn."],
  ["04", "Improve", "Review your performance and focus on the skills that need work."],
];

export default function About() {
  return (
    <main className="ll-about">
      <style>{`
        .ll-about {
          --ll-bg: #080909;
          --ll-panel: #101313;
          --ll-panel-soft: #0c1010;
          --ll-text: #f5f7f6;
          --ll-muted: #a6b0ad;
          --ll-accent: #4ff0c4;
          --ll-border: rgba(255,255,255,.13);
          min-height: 100vh;
          background: var(--ll-bg);
          color: var(--ll-text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
        }
        .ll-about * { box-sizing: border-box; }
        .ll-about a { color: inherit; text-decoration: none; }
        .ll-about .ll-container { width: min(1240px, calc(100% - 48px)); margin: 0 auto; }
        .ll-about .ll-hero {
          padding: 112px 0 104px;
          border-bottom: 1px solid var(--ll-border);
          background:
            radial-gradient(ellipse at 78% 45%, rgba(79,240,196,.10), transparent 28%),
            radial-gradient(ellipse at 15% 5%, rgba(255,255,255,.035), transparent 32%);
        }
        .ll-about .ll-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          color: var(--ll-accent); font-size: 12px; font-weight: 800;
          letter-spacing: .19em; text-transform: uppercase;
        }
        .ll-about .ll-eyebrow:before {
          content: ""; width: 7px; height: 7px; border-radius: 50%;
          background: var(--ll-accent); box-shadow: 0 0 14px var(--ll-accent);
        }
        .ll-about .ll-hero-grid {
          display: grid; grid-template-columns: 1.15fr .85fr; align-items: center; gap: 72px;
        }
        .ll-about h1 {
          max-width: 760px; margin: 24px 0 22px; font-size: clamp(46px, 6.4vw, 82px);
          line-height: .99; letter-spacing: -.075em; font-weight: 650;
        }
        .ll-about h1 span, .ll-about .ll-accent { color: var(--ll-accent); }
        .ll-about .ll-lead {
          max-width: 610px; color: var(--ll-muted); font-size: 18px; line-height: 1.8; margin: 0;
        }
        .ll-about .ll-orbit-wrap { display: grid; place-items: center; min-height: 350px; }
        .ll-about .ll-orbit {
          width: min(330px, 70vw); aspect-ratio: 1; border-radius: 50%; position: relative;
          border: 1px solid rgba(235,255,250,.9);
          box-shadow: 0 0 10px 2px rgba(230,255,250,.65), 0 0 38px rgba(79,240,196,.20), inset 0 0 35px rgba(79,240,196,.10);
          background:
            radial-gradient(circle at 50% 50%, transparent 48%, rgba(79,240,196,.05) 65%, transparent 70%),
            radial-gradient(circle at 30% 68%, rgba(235,255,250,.85) 0 1px, transparent 1.7px),
            radial-gradient(circle at 68% 32%, rgba(235,255,250,.8) 0 1px, transparent 1.7px),
            radial-gradient(circle at 55% 78%, rgba(235,255,250,.7) 0 1px, transparent 1.6px),
            radial-gradient(circle at 22% 42%, rgba(235,255,250,.75) 0 1px, transparent 1.6px),
            radial-gradient(circle at 78% 62%, rgba(235,255,250,.7) 0 1px, transparent 1.6px),
            radial-gradient(circle at 50% 50%, #0a1110, #050707 72%);
        }
        .ll-about .ll-orbit:before, .ll-about .ll-orbit:after {
          content: ""; position: absolute; inset: 9%; border-radius: 50%;
          border: 1px dotted rgba(230,255,250,.24); transform: rotate(32deg) scaleX(.82);
        }
        .ll-about .ll-orbit:after { inset: 17%; transform: rotate(-38deg) scaleX(.9); opacity: .7; }
        .ll-about .ll-orbit-core {
          position: absolute; inset: 31%; border-radius: 50%;
          background: radial-gradient(circle, rgba(79,240,196,.13), transparent 70%);
          filter: blur(10px);
        }
        .ll-about .ll-section { padding: 100px 0; }
        .ll-about .ll-section-head { max-width: 700px; margin-bottom: 46px; }
        .ll-about h2 {
          margin: 16px 0; font-size: clamp(34px, 4.4vw, 54px);
          letter-spacing: -.06em; line-height: 1.05; font-weight: 620;
        }
        .ll-about .ll-section-copy { color: var(--ll-muted); font-size: 16px; line-height: 1.8; }
        .ll-about .ll-story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: start; }
        .ll-about .ll-story-note {
          padding: 30px; border: 1px solid var(--ll-border); border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,.045), rgba(255,255,255,.012));
        }
        .ll-about .ll-story-note strong { display: block; font-size: 20px; margin-bottom: 12px; }
        .ll-about .ll-story-note p { color: var(--ll-muted); line-height: 1.8; margin: 0; }
        .ll-about .ll-feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .ll-about .ll-feature {
          min-height: 220px; padding: 28px; border: 1px solid var(--ll-border);
          border-radius: 18px; background: var(--ll-panel); transition: transform .2s ease, border-color .2s ease;
        }
        .ll-about .ll-feature:hover { transform: translateY(-4px); border-color: rgba(79,240,196,.5); }
        .ll-about .ll-number { color: var(--ll-accent); font-size: 12px; letter-spacing: .12em; font-weight: 800; }
        .ll-about .ll-feature h3 { font-size: 21px; margin: 25px 0 10px; letter-spacing: -.035em; }
        .ll-about .ll-feature p { margin: 0; color: var(--ll-muted); line-height: 1.75; font-size: 14px; }
        .ll-about .ll-process { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .ll-about .ll-step { padding: 24px 20px; border-top: 1px solid rgba(79,240,196,.55); background: var(--ll-panel-soft); }
        .ll-about .ll-step h3 { margin: 22px 0 8px; font-size: 19px; }
        .ll-about .ll-step p { color: var(--ll-muted); font-size: 14px; line-height: 1.7; margin: 0; }
        .ll-about .ll-cta {
          padding: 64px; border: 1px solid rgba(79,240,196,.25); border-radius: 24px;
          background: radial-gradient(ellipse at 100% 0%, rgba(79,240,196,.12), transparent 45%), #0d1211;
          display: flex; justify-content: space-between; align-items: center; gap: 30px;
        }
        .ll-about .ll-cta h2 { font-size: clamp(30px, 4vw, 44px); margin: 0 0 12px; }
        .ll-about .ll-cta p { margin: 0; color: var(--ll-muted); line-height: 1.7; }
        .ll-about .ll-button {
          display: inline-flex; align-items: center; justify-content: center; white-space: nowrap;
          border-radius: 999px; padding: 15px 25px; background: #f4f6f5; color: #080909;
          font-size: 14px; font-weight: 700; border: 1px solid #f4f6f5; transition: .2s ease;
        }
        .ll-about .ll-button:hover { background: var(--ll-accent); border-color: var(--ll-accent); transform: translateY(-2px); }
        .ll-about .ll-footer { border-top: 1px solid var(--ll-border); padding: 28px 0; color: #84908c; font-size: 13px; }
        .ll-about .ll-footer-inner { display: flex; justify-content: space-between; gap: 20px; }
        @media (max-width: 800px) {
          .ll-about .ll-hero { padding: 76px 0 70px; }
          .ll-about .ll-hero-grid, .ll-about .ll-story-grid { grid-template-columns: 1fr; gap: 42px; }
          .ll-about .ll-orbit-wrap { min-height: 270px; }
          .ll-about .ll-orbit { width: 250px; }
          .ll-about .ll-section { padding: 72px 0; }
          .ll-about .ll-process { grid-template-columns: repeat(2, 1fr); }
          .ll-about .ll-cta { padding: 38px 28px; align-items: flex-start; flex-direction: column; }
        }
        @media (max-width: 520px) {
          .ll-about .ll-container { width: min(100% - 36px, 1240px); }
          .ll-about .ll-feature-grid, .ll-about .ll-process { grid-template-columns: 1fr; }
          .ll-about .ll-feature { min-height: 0; }
          .ll-about .ll-footer-inner { flex-direction: column; }
          .ll-about .ll-lead { font-size: 16px; }
        }
      `}</style>

      <section className="ll-hero">
        <div className="ll-container ll-hero-grid">
          <div>
            <div className="ll-eyebrow">The thinking behind LearnLoop</div>
            <h1>
              Preparation should be <span>personal.</span>
            </h1>
            <p className="ll-lead">
              LearnLoop is built to make placement preparation more focused,
              practical, and easier to navigate. Learn what matters, practise
              with purpose, and keep moving forward.
            </p>
          </div>
          <div className="ll-orbit-wrap" aria-hidden="true">
            <div className="ll-orbit"><div className="ll-orbit-core" /></div>
          </div>
        </div>
      </section>

      <section className="ll-section">
        <div className="ll-container ll-story-grid">
          <div className="ll-section-head">
            <div className="ll-eyebrow">Why LearnLoop exists</div>
            <h2>Less guesswork.<br /><span className="ll-accent">More progress.</span></h2>
          </div>
          <div>
            <p className="ll-section-copy">
              Preparing for placements can feel overwhelming. There are
              subjects to revise, coding problems to solve, concepts to
              understand, and interviews to prepare for. It is not always clear
              where to begin or what to improve next.
            </p>
            <p className="ll-section-copy">
              LearnLoop brings learning, practice, and progress insights into
              one place. The goal is simple: help every student make their
              preparation more structured and their effort more meaningful.
            </p>
            <div className="ll-story-note">
              <strong>Our guiding idea</strong>
              <p>
                Your next learning step should be based on what you know, what
                you have practised, and where you can improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ll-section" style={{ background: "#0a0d0d" }}>
        <div className="ll-container">
          <div className="ll-section-head">
            <div className="ll-eyebrow">What you can do</div>
            <h2>A smarter way to <span className="ll-accent">prepare.</span></h2>
            <p className="ll-section-copy">
              A connected preparation experience, designed around the way
              students learn and build skills.
            </p>
          </div>
          <div className="ll-feature-grid">
            {features.map((feature) => (
              <article className="ll-feature" key={feature.number}>
                <div className="ll-number">{feature.number} / LEARNLOOP</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ll-section">
        <div className="ll-container">
          <div className="ll-section-head">
            <div className="ll-eyebrow">The learning loop</div>
            <h2>Small steps. <span className="ll-accent">Real growth.</span></h2>
            <p className="ll-section-copy">
              A simple cycle helps turn preparation into a consistent habit.
            </p>
          </div>
          <div className="ll-process">
            {steps.map(([number, title, description]) => (
              <article className="ll-step" key={number}>
                <div className="ll-number">{number}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ll-section" style={{ paddingTop: 10 }}>
        <div className="ll-container">
          <div className="ll-cta">
            <div>
              <div className="ll-eyebrow">Your next step starts here</div>
              <h2>Make your preparation <span className="ll-accent">count.</span></h2>
              <p>Build skills with clarity, consistency, and confidence.</p>
            </div>
            <a className="ll-button" href="/signup">Get started <span aria-hidden="true">&nbsp;→</span></a>
          </div>
        </div>
      </section>

      <footer className="ll-footer">
        <div className="ll-container ll-footer-inner">
          <span>© {new Date().getFullYear()} LearnLoop. Keep learning, keep growing.</span>
          <span>Learn with purpose. Grow with confidence.</span>
        </div>
      </footer>
    </main>
  );
}
