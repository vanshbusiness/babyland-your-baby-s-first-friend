import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-cta-gradient flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
            <Heart className="w-5 h-5 text-primary-foreground fill-current" />
          </div>
          <span className="text-xl font-bold text-foreground">Babyland</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            How It Works
          </a>
          {/* Updated Download Link */}
          <a 
            href="/babyland_patient.apk" 
            download="babyland_patient.apk"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Download
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
