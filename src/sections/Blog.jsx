import { useState, useEffect } from "react";
import analysis from "../assets/analysis.png";
import conversion from "../assets/conversion.jpeg";
import test from "../assets/test.webp";
import optimize from "../assets/optimize.jpg.avif";

const slides = [
  {
    title: "Analysis Engine",
    text: "Analyzes legacy COBOL code, identifies dependencies and prepares the system for transformation.",
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

const Blog = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > 50) {
      nextSlide(); // swipe left
    }

    if (distance < -50) {
      prevSlide(); // swipe right
    }
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  return (
    <section id="blog">
      <div className="blog-header">
        <h2 className="blog-title">
          From COBOL to <span className="gradient">Modern Java</span>
        </h2>
      </div>

      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>
          ‹
        </button>

        <div
          className="slide"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {" "}
          <div className="slide-image">
            <img src={slides[index].image} alt="" />
          </div>
          <div className="slide-text">
            <h3>{slides[index].title}</h3>
            <p>{slides[index].text}</p>
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Blog;
