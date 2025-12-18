import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Baby, Calendar, Bell, ShieldCheck, Heart } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Pregnancy Tracking",
    description: "Daily activities, symptoms, milestones, and health insights throughout your pregnancy journey.",
    color: "bg-blush-light",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Menstrual & Health Tracking",
    description: "Cycle tracking, predictions, and wellbeing analysis to understand your body better.",
    color: "bg-lavender",
    iconColor: "text-primary",
  },
  {
    icon: Baby,
    title: "Baby Growth Monitoring",
    description: "Track baby development stages and receive timely care reminders.",
    color: "bg-mint-light",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Hydration, medication, supplements, and routine alerts to keep you on track.",
    color: "bg-peach",
    iconColor: "text-accent-foreground",
  },
  {
    icon: ShieldCheck,
    title: "Secure Health Data",
    description: "Your data is encrypted and protected at all times with industry-standard security.",
    color: "bg-cream",
    iconColor: "text-foreground",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blush-light rounded-full blur-2xl opacity-50" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-mint-light rounded-full blur-2xl opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blush-light text-primary font-semibold text-sm mb-6">
            Features
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Key <span className="text-gradient">Features</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a healthy pregnancy and baby care journey, all in one beautiful app.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
