import { useState, useEffect } from "react";
import analysis from "../assets/analysis.png";
import conversion from "../assets/conversion.jpeg";
import test from "../assets/test.webp";
import optimize from "../assets/optimize.jpg.avif";

const slides = [
  {
    title: "Analysis Engine",
    text: "Analyzes legacy COBOL code, identifies dependencies and prepares systems for transformation.",
    image: analysis,
  },
  {
    title: "Conversion Engine",
    text: "Transforms COBOL programs into clean Java architecture while preserving business logic.",
    image: conversion,
  },
  {
    title: "Test Engine",
    text: "Automatically generates regression tests ensuring the converted system behaves exactly like the original.",
    image: test,
  },
  {
    title: "Optimize Engine",
    text: "Refactors and optimizes the generated Java code for modern performance and cloud readiness.",
    image: optimize,
  },
];

export default function Blog() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (i) => {
    if (i === index) return "active";
    if (i === (index - 1 + slides.length) % slides.length) return "left";
    if (i === (index + 1) % slides.length) return "right";
    return "hidden";
  };

  return (
    <section id="blog" className="premium-carousel">
      <div className="carousel-header">
        <h2>
          From Legacy Systems to{" "}
          <span className="gradient">Modern Architecture</span>
        </h2>
      </div>

      <div className="carousel-stage-wrapper">
        <div className="carousel-stage">
          {slides.map((slide, i) => (
            <div key={i} className={`carousel-card ${getPosition(i)}`}>
              <div className="card-inner">
                <div className="card-image">
                  <img src={slide.image} alt={slide.title} loading="lazy" />
                </div>
                <div className="card-text">
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
              </div>
            </div>
          ))}

          <button className="carousel-nav left" onClick={prev}>
            ‹
          </button>
          <button className="carousel-nav right" onClick={next}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}