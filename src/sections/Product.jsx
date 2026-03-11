import { useEffect, useRef } from "react";

export default function Product() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const cards = wrapper.querySelectorAll(".card");

    const move = (e) => {
      const { width, height, left, top } = wrapper.getBoundingClientRect();

      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      cards.forEach((card) => {
        card.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6
          }deg) translateZ(5px)`;
      });
    };

    const leave = () => {
      cards.forEach((card) => {
        card.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0)`;
      });
    };

    wrapper.addEventListener("mousemove", move);
    wrapper.addEventListener("mouseleave", leave);

    return () => {
      wrapper.removeEventListener("mousemove", move);
      wrapper.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section id="product">
      <div className="product-header">
        <h1 className="product-title">
          The EquiValic
          <span className="gradient">Modernization Suite</span>
        </h1>

        <p className="subtitle">
          An end-to-end deterministic transformation platform that migrates,
          validates and deploys legacy systems into enterprise
          architectures.
        </p>
      </div>

      <div ref={wrapperRef} className="suite-wrapper">
        <div className="suite-grid">
          <div className="card">
            <div className="card-label">ANALYSIS ENGINE</div>
            <h3>Code Wiki</h3>
            <p>
              Automatically maps legacy systems into searchable documentation
              and architecture insights.
            </p>
          </div>

          <div className="card">
            <div className="card-label">CONVERSION ENGINE</div>
            <h3>Code Migration</h3>
            <p>
              Automatically maps legacy systems into searchable documentation
              and architecture insights
            </p>
          </div>

          <div className="card">
            <div className="card-label">TESTING AND FIX ENGINE</div>
            <h3>Test and Fix</h3>
            <p>
              Transforms legacy COBOL code into modern, production-ready
              services.
            </p>
          </div>

          <div className="card">
            <div className="card-label">OPTIMIZATION ENGINE</div>
            <h3>Code Optimizer</h3>
            <p>
              Refines generated services for performance, clarity, and
              deployment readiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
