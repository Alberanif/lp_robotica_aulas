import HeroCondoSection from "@/components/hero/HeroCondoSection";
import Header from "@/components/Header";
import ContactCondo from "@/components/contact/ContactCondo";
import Footer from "@/components/Footer";

export default function CondominiosPage() {
  return (
    <div className="min-h-screen bg-[#faefd9] flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4 py-8 md:py-12 w-full">
        <HeroCondoSection />
        
        {/* New Contact Section specifically for Condos */}
        <ContactCondo />
      </main>
      <Footer />
    </div>
  );
}
