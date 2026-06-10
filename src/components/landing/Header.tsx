import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Institucional", path: "/",           color: "#01a1e1" },
  { label: "Escolas",       path: "/escolas",     color: "#f01600" },
  { label: "Condomínios",   path: "/condominios", color: "#ffd900" },
  { label: "Oficinas",      path: "/oficinas",    color: "#45b227" },
];

const Header = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" || pathname === "/institucional" : pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-[3px] border-[#111111]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          <img
            src="/images/logo_robotica.svg"
            alt="Robótica BSB"
            className="h-14 w-auto"
          />
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {NAV_ITEMS.map(({ label, path, color }) => {
            const active = isActive(path);
            const isYellow = color === "#ffd900";

            return (
              <Link
                key={path}
                to={path}
                className={[
                  "flex-shrink-0 font-fredoka font-bold text-base px-4 py-1.5 rounded-xl transition-all duration-150",
                  active
                    ? "text-white border-[3px] border-[#111111] shadow-[4px_4px_0px_#111111] -translate-y-[1px]"
                    : "text-[#111111]/70 hover:text-[#111111]",
                ].join(" ")}
                style={
                  active
                    ? { backgroundColor: color, color: isYellow ? "#111111" : "white" }
                    : {}
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
