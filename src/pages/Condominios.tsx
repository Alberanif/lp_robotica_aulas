import HeroCondoSection from "@/components/hero/HeroCondoSection";
import ContactCondo from "@/components/contact/ContactCondo";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/landing/AnimatedBackground";

export default function Condominios() {
  return (
    <div className="min-h-screen bg-[#faefd9] flex flex-col overflow-x-hidden">
      <AnimatedBackground />
      <main className="flex-1 flex flex-col items-center justify-center p-4 py-8 md:py-12 w-full relative z-10">
        <HeroCondoSection />
        <ContactCondo />
      </main>
      <Footer />
    </div>
  );
}
