import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Heart, Zap } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Data Privacy & Security",
    description: "Your health data is encrypted and protected with enterprise-grade security.",
    color: "bg-mint-light",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: Heart,
    title: "Healthcare Standards",
    description: "Built with healthcare best practices and expert guidance in mind.",
    color: "bg-blush-light",
    iconColor: "text-primary",
  },
  {
    icon: Zap,
    title: "Long-term Scalability",
    description: "Designed to grow with you through every stage of your journey.",
    color: "bg-lavender",
    iconColor: "text-foreground",
  },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-card text-primary font-semibold text-sm mb-6 shadow-soft">
            Trust & Safety
          </span>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Your Trust, <span className="text-gradient">Our Priority</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className={`w-16 h-16 ${point.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                <point.icon className={`w-8 h-8 ${point.iconColor}`} />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {point.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
