import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lavender rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-peach rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-mint-light text-secondary-foreground font-semibold text-sm mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              What is <span className="text-gradient">The Babyland</span>?
            </h2>
          </div>

          {/* Main Content Body */}
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              The Babyland is a holistic women-and-child wellness ecosystem built to support women through every stage of life—from preconception to pregnancy, postpartum, and early childhood. Focused on preventing and managing lifestyle-based disorders.
            </p>
            
            <p>
              We combine healthcare, nutrition, emotional wellbeing, and everyday essentials into one integrated platform. The Babyland is designed to simplify a journey that is often fragmented, confusing, and overwhelming for women and families.
            </p>

            <p className="font-medium text-foreground italic">
              "At the heart of The Babyland is a belief: care should be continuous, personalized, and rooted in both science and empathy."
            </p>

            {/* Feature List */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border shadow-soft">
              <h3 className="text-foreground font-bold mb-6 text-2xl">Through our platform, we offer:</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-primary text-xl">✨</span>
                  <span><strong>IRA</strong> - your AI companion for AI-powered health insights and early risk detection with Integrated Health & Lifestyle Trackers</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-xl">✨</span>
                  <span>Personalized programs for fertility, pregnancy, postpartum, and baby care</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-xl">✨</span>
                  <span>Access to trusted experts across medical, nutrition, and wellness domains</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-xl">✨</span>
                  <span>Safe, natural, and thoughtfully designed products for mothers and babies</span>
                </li>
              </ul>
            </div>

            <p>
              We are building more than an app—we are creating a support system that understands a woman’s body, emotions, and evolving needs.
            </p>

            <p>
              The Babyland bridges the gap between clinical care and everyday living, ensuring that no women feels lost, unheard, or unsupported at any stage.
            </p>

            {/* Closing Sentiment */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-12 p-6 bg-mint-light/30 rounded-2xl border-l-4 border-mint text-center"
            >
              <p className="text-secondary-foreground font-semibold">
                We’re here to support and care for you—like a kangaroo does—keeping you and your little one safe, close, and nurtured at every stage. 🦘
              </p>
            </motion.div>
          </div>
          
          {/* Visual Trust Markers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            {[
              { icon: "💗", label: "Continuous Care" },
              { icon: "🤖", label: "AI Insights" },
              { icon: "🛡️", label: "Safe & Natural" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-soft border border-border"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
