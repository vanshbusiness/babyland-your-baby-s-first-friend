import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-mother-baby.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-hero-gradient">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blush-light rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-mint-light rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-peach rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
            >
              Your Pregnancy & Baby Care Companion
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6"
            >
              Babyland – Your Trusted Companion for{" "}
              <span className="text-gradient">Pregnancy & Baby Care</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Track pregnancy, baby growth, daily health activities, and expert-backed insights — all in one app.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="cta" size="xl" asChild>
                <a href="#download">
                  <Download className="w-5 h-5" />
                  Download Babyland APK
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 justify-center lg:justify-start mt-4 text-muted-foreground"
            >
              <Smartphone className="w-4 h-4" />
              <span className="text-sm">Android supported • Safe & Secure</span>
            </motion.div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={heroImage}
                  alt="Mother lovingly holding her baby - Babyland pregnancy and baby care app"
                  className="w-full h-full object-cover rounded-3xl shadow-card"
                />
              </motion.div>
              
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-1/4 bg-card rounded-2xl p-4 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center">
                    <span className="text-xl">👶</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Baby Growth</p>
                    <p className="text-sm text-muted-foreground">Track milestones</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-4 bottom-1/4 bg-card rounded-2xl p-4 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blush-light flex items-center justify-center">
                    <span className="text-xl">🤰</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Pregnancy</p>
                    <p className="text-sm text-muted-foreground">Daily tracking</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
