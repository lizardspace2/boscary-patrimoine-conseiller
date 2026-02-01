import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/le-cabinet", label: "Le cabinet" },
    { path: "/nous-contacter", label: "Nous contacter" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Boscary Patrimoine" className="h-12 w-auto" />
            <span className="font-heading text-lg font-medium text-foreground hidden sm:block">
              Boscary Patrimoine
            </span>
          </Link>

          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "nav-link-active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
