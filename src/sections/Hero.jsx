import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

export default function Hero() {
  const displayRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    const cobolLines = [
      `<span class="keyword">IF</span> <span class="variable">ACCOUNT-BALANCE</span> &lt; 0`,
      `    <span class="keyword">MOVE</span> <span class="string">'OVERDRAWN'</span> <span class="keyword">TO</span> <span class="variable">ACCOUNT-STATUS</span>`,
      `    <span class="keyword">COMPUTE</span> <span class="variable">FEE</span> = <span class="variable">ACCOUNT-BALANCE</span> * 0.05`,
      `    <span class="keyword">ADD</span> <span class="variable">FEE</span> <span class="keyword">TO</span> <span class="variable">TOTAL-CHARGES</span>`,
      `    <span class="keyword">PERFORM</span> <span class="variable">UPDATE-ACCOUNT</span>`,
      `<span class="keyword">ELSE</span>`,
      `    <span class="keyword">MOVE</span> <span class="string">'ACTIVE'</span> <span class="keyword">TO</span> <span class="variable">ACCOUNT-STATUS</span>`,
      `<span class="keyword">END-IF</span>`,
    ];

    const javaLines = [
      `<span class="keyword">if</span>(account.<span class="method">getBalance</span>() &lt; 0){`,
      `    <span class="variable">account</span>.<span class="method">setStatus</span>(<span class="string">"OVERDRAWN"</span>);`,
      `    <span class="keyword">double</span> fee = account.<span class="method">getBalance</span>() * 0.05;`,
      `    <span class="variable">account</span>.<span class="method">addCharge</span>(fee);`,
      `    <span class="variable">repository</span>.<span class="method">save</span>(account);`,
      `} <span class="keyword">else</span> {`,
      `    <span class="variable">account</span>.<span class="method">setStatus</span>(<span class="string">"ACTIVE"</span>);`,
      `}`,
    ];

    const display = displayRef.current;
    const statusText = statusRef.current;

    function renderLines(lines, upto, partialLine) {
      return (
        lines
          .slice(0, upto)
          .map((l, i) => `<span class="line-number">${i + 1}</span>${l}`)
          .join("<br>") +
        (partialLine !== undefined
          ? `<br><span class="line-number">${upto + 1}</span>${partialLine}`
          : "")
      );
    }

    function typeLines(lines, callback) {
      display.innerHTML = "";
      let lineIndex = 0;
      let charIndex = 0;

      function type() {
        if (lineIndex < lines.length) {
          const current = lines[lineIndex];

          const partial =
            current.slice(0, charIndex) + '<span class="cursor"></span>';

          display.innerHTML = renderLines(lines, lineIndex, partial);

          charIndex++;

          if (charIndex <= current.length) {
            setTimeout(type, 20);
          } else {
            lineIndex++;
            charIndex = 0;
            setTimeout(type, 140);
          }
        } else {
          callback();
        }
      }

      type();
    }

    function startSequence() {
      statusText.textContent = "Parsing COBOL...";
      statusText.style.color = "#00d4ff";

      typeLines(cobolLines, () => {
        setTimeout(() => {
          statusText.textContent = "Generating Spring Boot...";
          statusText.style.color = "#6c5ce7";

          typeLines(javaLines, () => {
            statusText.textContent = "Transformation Verified ✓";
            statusText.style.color = "#00ffd0";

            display.innerHTML = display.innerHTML
              .split("<br>")
              .map((l) => `<span class="diff-highlight">${l}</span>`)
              .join("<br>");

            setTimeout(startSequence, 4000);
          });
        }, 900);
      });
    }

    startSequence();
  }, []);

  return (
    <section id="home">
      <div className="hero">
        <div className="hero-text">
          <h1 className="headline">
            Transform Legacy Core Systems
            <span className="headline-emphasis">
              into Cloud-Native Architecture
            </span>
          </h1>

          <div className="divider"></div>

          <p className="subtitle">
            Deterministic semantic transformation from legacy languages to
            modern technology — preserving transactional behavior and
            mission-critical logic.
          </p>
          <div className="cta">
            <a
              href={`mailto:hello@equivalic.com?subject=${encodeURIComponent(
                "Inquiry: EquiValic Modernization Platform",
              )}&body=${encodeURIComponent(`Hello EquiValic Team,

I would like to learn more about the EquiValic platform and its modernization engines.

Please share additional details.

Thank you.
`)}`}
              className="hero-btn"
            >
              Request Information
            </a>
          </div>
        </div>

        <div className="product-panel">
          <div className="panel-top">
            <div className="panel-title">Live Transformation Engine</div>

            <div className="panel-status" ref={statusRef}>
              Initializing...
            </div>
          </div>

          <div ref={displayRef} className="code-display"></div>
        </div>
      </div>
    </section>
  );
}
