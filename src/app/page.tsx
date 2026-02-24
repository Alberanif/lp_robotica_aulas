import HeroSection from "@/components/hero/HeroSection";
import Header from "@/components/Header";
import ScheduleSection from "@/components/schedule/ScheduleSection";
import MetodologiaSection from "@/components/metodologia/MetodologiaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4 py-8 md:py-12 w-full">
        <HeroSection />
        <ScheduleSection />
        <MetodologiaSection />
      </main>
    </div>
  );
}
