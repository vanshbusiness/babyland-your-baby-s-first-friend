import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <div className="flex-1 pt-16">{children}</div>
    <Footer />
  </div>
);

export default PageLayout;
