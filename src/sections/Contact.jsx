export default function Contact() {
  const email = "sales@company.com";

  const subject = encodeURIComponent(
    "Inquiry: EquiValic COBOL Modernisation Platform"
  );

  const body = encodeURIComponent(
    `Hello,

I would like to learn more about the EquiValic COBOL modernisation platform.

Please provide more information about the following engines:

• Analysis
• Conversion
• Test
• Optimise

Best regards,
`
  );

  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-text">
          <h2 className="headline">
            Ready to Modernise Your
            <span className="headline-emphasis">COBOL Systems?</span>
          </h2>

          <p className="subtitle">
            Request details about the EquiValic analysis, conversion, testing
            and optimisation engines.
          </p>
        </div>

        <div className="contact-action">
          <a href={mailto} className="contact-btn">
            Request Platform Details
          </a>

          <p className="contact-meta">
            Speak with our engineering team about enterprise COBOL migration.
          </p>
        </div>
      </div>
    </section>
  );
}
