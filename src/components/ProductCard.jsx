import { motion } from "motion/react";

export default function ProductCard({ card, cardVariants }) {
  return (
    <motion.div
      className="card"
      variants={cardVariants}
      whileHover={{
        y: -8,
        borderColor: `${card.accent}40`,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{ "--accent": card.accent }}
    >
      {/* Hover glow */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 20,
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${card.accent}12, transparent)`,
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      <div className="card-number">{card.id}</div>

      {/* Header with Icon and Title */}
      <div className="card-header-content">
        {/* Row 2: Label centered */}
        <div className="card-label" style={{ color: card.accent }}>
          {card.label}
        </div>

        {/* Row 3: Icon left, Title right */}
        <div className="card-icon-title-row">
          <motion.div
            className="card-icon-wrap"
            style={{
              background: `${card.accent}15`,
              color: card.accent,
              boxShadow: `0 0 0 1px ${card.accent}25`,
            }}
            whileHover={{ scale: 1.08, rotate: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {card.icon}
          </motion.div>
          <h3>{card.title}</h3>
        </div>
      </div>

      <div
        className="card-divider"
        style={{ background: card.accent }}
      />

      <p>{card.description}</p>

      <div className="card-cta" style={{ color: card.accent }}>
        Explore
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </div>

      <div className="card-corner">{card.id}</div>
    </motion.div>
  );
}
