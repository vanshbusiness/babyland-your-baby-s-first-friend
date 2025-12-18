import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle } from "lucide-react";

const DisclaimerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Babyland is a health-support platform and does not replace professional medical advice. 
                All insights are based on current planning, available datasets, and resources. 
                Features, data models, and APIs may evolve with further expert validation and testing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
