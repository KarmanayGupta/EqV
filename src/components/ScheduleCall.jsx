import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Cpu, GitBranch, Shield, Zap } from "lucide-react";

const features = [
  { icon: Cpu, title: "Automated Analysis", desc: "Deep-scan legacy codebases to map dependencies and risks." },
  { icon: GitBranch, title: "Smart Conversion", desc: "AI-powered code transformation with context preservation." },
  { icon: Shield, title: "Regression Testing", desc: "Ensure functional parity with automated test generation." },
  { icon: Zap, title: "Performance Tuning", desc: "Optimize converted systems for modern infrastructure." },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-glow-primary/6 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-glow-accent/6 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-glow-primary/3 blur-[200px]" />
      </div>

      <div className="relative max-w-6xl w-full mx-auto">
        {/* Hero Content */}
        <div className="grid md:grid-cols-5 gap-8 items-center mb-20">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5"
            >
              <span className="text-xs font-medium text-primary tracking-wide uppercase">Enterprise Migration Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Ready to Modernize Your{" "}
              <span className="bg-gradient-to-r from-glow-accent to-glow-primary bg-clip-text text-transparent">
                Legacy Systems?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg"
            >
              Request details about the EquiValic analysis, conversion, testing and optimization engines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button asChild variant="glow" size="lg" className="px-8 py-6 gap-2 cursor-pointer">
                <a href="mailto:hello@equivalic.com?subject=EquiValic%20Platform%20Details%20Request">
                  Request Platform Details <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="hero" size="lg" className="px-8 py-6">
                Watch Demo
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-2 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 space-y-5"
          >
            <h3 className="font-display text-lg font-semibold">Speak with our team</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Get a personalized walkthrough of how EquiValic handles enterprise system migration at scale.
            </p>
            <div className="space-y-3">
              {["COBOL → Java", "VB6 → .NET Core", "Mainframe → Cloud"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-secondary-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
            <Button variant="hero" size="lg" className="w-full py-5 mt-2">
              Schedule a Call
            </Button>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="group rounded-xl border border-border bg-card/30 hover:bg-card/60 p-6 transition-all duration-300 hover:border-primary/30"
            >
              <f.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
