import AnimatedBackground from "@/components/landing/AnimatedBackground";
import Hero from "@/components/landing/Hero";
import PainPoint from "@/components/landing/PainPoint";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import TargetAudience from "@/components/landing/TargetAudience";
import WhyNow from "@/components/landing/WhyNow";
import FAQ from "@/components/landing/FAQ";
import Structure from "@/components/landing/Structure";
import DirectMessage from "@/components/landing/DirectMessage";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Hero />
      <PainPoint />
      <HowItWorks />
      <Benefits />
      <TargetAudience />
      <WhyNow />
      <FAQ />
      <Structure />
      <DirectMessage />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
