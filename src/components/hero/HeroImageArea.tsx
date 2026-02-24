import HeroForm from "./HeroForm";

function RobotPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-white/40">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="20" y="24" width="40" height="32" rx="6" fill="currentColor" opacity="0.6" />
        <rect x="30" y="16" width="20" height="12" rx="4" fill="currentColor" opacity="0.4" />
        <circle cx="32" cy="38" r="5" fill="currentColor" opacity="0.8" />
        <circle cx="48" cy="38" r="5" fill="currentColor" opacity="0.8" />
        <rect x="34" y="50" width="12" height="3" rx="1.5" fill="currentColor" opacity="0.5" />
        <rect x="10" y="32" width="10" height="4" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="60" y="32" width="10" height="4" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="28" y="56" width="6" height="12" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="46" y="56" width="6" height="12" rx="2" fill="currentColor" opacity="0.4" />
        <circle cx="40" cy="16" r="3" fill="currentColor" opacity="0.6" />
      </svg>
      <span className="font-body text-sm">Imagem em breve</span>
    </div>
  );
}

export default function HeroImageArea() {
  return (
    <div className="relative w-full mt-8 md:mt-12 lg:mt-16">
      {/* Image placeholder */}
      <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/9] bg-brand-dark/10 rounded-image flex items-center justify-center overflow-hidden">
        <RobotPlaceholder />
      </div>

      {/* Form floating over image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[400px] translate-y-[40%] z-10 px-4 md:px-0">
        <HeroForm />
      </div>

      {/* Spacer so the form bleed doesn't get clipped */}
      <div className="h-44" />
    </div>
  );
}
