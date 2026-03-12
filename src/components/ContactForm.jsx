import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Building2, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 md:p-12 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground flex items-center gap-2">
                <User className="w-4 h-4" /> Full Name
              </label>
              <Input
                placeholder="John Doe"
                className="bg-muted/50 border-border focus:border-primary h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </label>
              <Input
                type="email"
                placeholder="john@company.com"
                className="bg-muted/50 border-border focus:border-primary h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-muted-foreground flex items-center gap-2">
              <Building2 className="w-4 h-4" /> Company
            </label>
            <Input
              placeholder="Acme Inc."
              className="bg-muted/50 border-border focus:border-primary h-12 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-muted-foreground flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Message
            </label>
            <Textarea
              placeholder="Tell us about your legacy systems and migration needs..."
              rows={5}
              className="bg-muted/50 border-border focus:border-primary rounded-xl resize-none"
            />
          </div>

          <div className="pt-2">
            <Button variant="glow" size="lg" className="w-full md:w-auto px-12 py-6">
              Send Message
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
