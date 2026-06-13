import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardList, Heart, Sparkles } from "lucide-react";
import { WAITLIST_FORM_URL } from "@/constants";

const WaitlistSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="waitlist" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-cta-gradient opacity-90" />

      <div className="absolute top-10 left-10 w-24 h-24 bg-primary-foreground/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-foreground/5 rounded-full blur-xl" />

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4 opacity-20"
      >
        <Heart className="w-12 h-12 text-primary-foreground fill-current" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-1/4 opacity-20"
      >
        <Heart className="w-8 h-8 text-primary-foreground fill-current" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-primary-foreground/20 rounded-3xl flex items-center justify-center mx-auto mb-8"
          >
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6">
            Join the Babyland Waitlist
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg mx-auto">
            Be the first to experience our AI-powered woman &amp; child wellness ecosystem. Get early access, exclusive launch offers, and personalized support.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-soft hover:shadow-glow transition-all"
              asChild
            >
              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ClipboardList className="w-5 h-5 mr-2" />
                Join the Waitlist
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-sm text-primary-foreground/70"
          >
            Takes less than 2 minutes to complete
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
