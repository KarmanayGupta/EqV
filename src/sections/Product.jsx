import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ProductCard from "../components/ProductCard";

const cards = [
  {
    id: "01",
    label: "Analysis Engine",
    title: "Code Wiki",
    description:
      "Automatically maps legacy systems into searchable documentation and architecture insights.",
    accent: "#38bdf8",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: "02",
    label: "Conversion Engine",
    title: "Code Migration",
    description:
      "Converts legacy codebases into modern architectures with deterministic, auditable transformation pipelines.",
    accent: "#818cf8",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    id: "03",
    label: "OPTIMIZATION ENGINE",
    title: "Test and Fix",
    description:
      "Transforms legacy COBOL code into modern, production-ready services with automated validation.",
    accent: "#34d399",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    id: "04",
    label: "Testing & Fix Engine",
    title: "Code Optimizer",
    description:
      "Refines generated services for performance, clarity, and deployment readiness.",
    accent: "#34d399",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Product() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <section id="product" ref={sectionRef}>
        <motion.div className="product-bg" style={{ y: backgroundY }}>
          <div className="grid-overlay" />
        </motion.div>

        <div className="product-inner">
          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={headerVariants}>
              <span className="eyebrow">Platform Suite</span>
            </motion.div>

            <div className="header-row">
              <motion.div variants={headerVariants}>
                <h1 className="product-title">
                  The EquiValic
                  <span className="gradient">Modernization Suite</span>
                </h1>
                <p className="subtitle">
                  An end-to-end deterministic transformation platform that migrates,
                  validates and deploys legacy systems into enterprise architectures.
                </p>
              </motion.div>

            </div>
              <motion.div variants={headerVariants} className="suite-count">
                04 / Core Engines
              </motion.div>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="suite-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {cards.map((card) => (
              <ProductCard key={card.id} card={card} cardVariants={cardVariants} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
