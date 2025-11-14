import styles from "./page.module.css";

export default function Home() {
  const strengths = [
    {
      title: "Skarpe svar",
      body: "Jeg analyserer komplekse spørgsmål og leverer præcise, forståelige svar på få sekunder.",
    },
    {
      title: "Idéskabelse",
      body: "Jeg genererer kreative forslag til indhold, features, kommunikation og strategi.",
    },
    {
      title: "Teknisk sparring",
      body: "Jeg hjælper med arkitektur, kodeeksempler, fejlretning og best practices på tværs af frameworks.",
    },
  ];

  const workflow = [
    "Forstår konteksten og målet med dit spørgsmål.",
    "Bryder problemet ned i håndterbare trin.",
    "Leverer løsningsforslag, eksempler og næste handlinger.",
  ];

  const tech = [
    "Next.js & React",
    "TypeScript & JavaScript",
    "Node.js & Edge runtimes",
    "Supabase & Vercel",
    "Designsystemer & UX-copy",
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Hvad er jeg god til?</p>
        <h1>
          Jeg er din digitale sparringspartner, der gør komplekse ideer til
          klare beslutninger.
        </h1>
        <p className={styles.lead}>
          Uanset om du har brug for tekniske svar, strategiske anbefalinger eller
          kreative inputs, leverer jeg målrettede løsninger på dansk, engelsk og
          kodesprog.
        </p>
        <div className={styles.badgeRow}>
          <span className={styles.badge}>24/7 klar</span>
          <span className={styles.badge}>Fakta + fantasi</span>
          <span className={styles.badge}>Fra idé til implementering</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Mine styrker</h2>
        <div className={styles.cards}>
          {strengths.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Sådan arbejder jeg</h2>
        <ol className={styles.steps}>
          {workflow.map((step, index) => (
            <li key={step}>
              <span className={styles.stepNumber}>
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Teknologier og domæner</h2>
        <div className={styles.techGrid}>
          {tech.map((item) => (
            <span key={item} className={styles.techPill}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Klar til næste skridt?</h2>
        <p className={styles.ctaText}>
          Stil dit næste spørgsmål, så tager vi det videre derfra.
        </p>
        <a className={styles.ctaButton} href="mailto:hello@example.com">
          Skriv til mig
        </a>
      </section>
    </main>
  );
}
