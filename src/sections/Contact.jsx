export default function Contact() {
  const email = "hello@equivalic.com";

  const subject = encodeURIComponent(
    "Inquiry: EquiValic Modernization Platform"
  );

  const body = encodeURIComponent(
    `Hello,

I would like to learn more about the EquiValic modernization platform.

Please provide more information about the following engines:

• Analysis
• Conversion
• Test
• Optimize

Best regards,
`
  );

  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-text">
          <h2 className="headline">
            Ready to Modernize Your
            <span className="headline-emphasis">Legacy Systems?</span>
          </h2>

          <p className="subtitle">
            Request details about the EquiValic analysis, conversion, testing
            and optimization engines.
          </p>
        </div>

        <div className="contact-action">
          <a href={mailto} className="contact-btn">
            Request Platform Details
          </a>

          <p className="contact-meta">
            Speak with our engineering team about enterprise system migration.
          </p>
        </div>
      </div>
    </section>
  );
}
