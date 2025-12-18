import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lavender rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-peach rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-mint-light text-secondary-foreground font-semibold text-sm mb-6">
            About Babyland
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            What is <span className="text-gradient">Babyland</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Babyland is a smart health and wellness platform designed to support women throughout pregnancy and early motherhood. From daily tracking to personalized insights, Babyland helps parents make informed decisions with confidence.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[
              { icon: "💗", label: "Trusted by Parents" },
              { icon: "📊", label: "Data-Driven Insights" },
              { icon: "🔒", label: "Privacy First" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 bg-card rounded-2xl shadow-soft"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
