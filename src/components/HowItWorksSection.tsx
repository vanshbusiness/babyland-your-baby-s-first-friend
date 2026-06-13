import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, User, Activity, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Join the Waitlist",
    description: "Sign up for early access to Babyland",
    color: "bg-blush-light",
  },
  {
    icon: User,
    title: "Enter Health Details",
    description: "Set up your profile with basic health information",
    color: "bg-mint-light",
  },
  {
    icon: Activity,
    title: "Track Daily Activities",
    description: "Log symptoms, moods, and daily health activities",
    color: "bg-lavender",
  },
  {
    icon: Sparkles,
    title: "Get Personalized Insights",
    description: "Receive tailored recommendations and reminders",
    color: "bg-peach",
  },
  {
    icon: TrendingUp,
    title: "Monitor Progress",
    description: "View your health journey over time",
    color: "bg-cream",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-mint-light rounded-full blur-3xl opacity-30 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-56 h-56 bg-blush-light rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-mint-light text-secondary-foreground font-semibold text-sm mb-6">
            How It Works
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            How Babyland <span className="text-gradient">Helps You</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and begin your personalized health journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-mint to-primary/20 hidden md:block md:-translate-x-1/2" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center gap-6 mb-8 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cta-gradient text-primary-foreground font-bold flex items-center justify-center z-10 shadow-soft">
                  {index + 1}
                </div>
                
                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"} pl-20 md:pl-0`}>
                  <div className={`inline-flex items-center gap-4 p-5 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}>
                    <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
