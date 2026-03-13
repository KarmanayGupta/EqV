import { useState } from "react";

export default function Contact() {
  const email = "hello@equivalic.com";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Inquiry: EquiValic Modernization Platform",
    );

    const body = encodeURIComponent(`Hello EquiValic Team,

My name is ${form.firstName} ${form.lastName}.

I am interested in learning more about the EquiValic modernization platform and how it can support enterprise legacy system transformation.

Message / Query:
${form.message}

I would appreciate additional information about the following platform engines:

• Analysis Engine  
• Conversion Engine  
• Test Engine  
• Optimization Engine  

Thank you for your time and assistance.

Best regards,  
${form.firstName} ${form.lastName}

You can reach me at: ${form.email}
`);

    const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  };

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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={form.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="contact-btn">
            Request Platform Details
          </button>

          <p className="contact-meta">
            Speak with our engineering team about enterprise system migration.
          </p>
        </form>
      </div>
    </section>
  );
}
