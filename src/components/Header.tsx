import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Phone, Mail, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/le-cabinet", label: "Le cabinet" },
    { path: "/nous-contacter", label: "Nous contacter" },
  ];

  return (
    <>
      {/* Top Bar for Desktop */}
      <div className="hidden md:block bg-navy text-primary-foreground py-2 text-sm border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-end items-center gap-6">
          <a
            href="tel:0683039438"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>06 83 03 94 38</span>
          </a>
          <a
            href="mailto:boscarypatrimoine@outlook.fr"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>boscarypatrimoine@outlook.fr</span>
          </a>
        </div>
      </div>

      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Boscary Patrimoine" className="h-10 md:h-12 w-auto" />
              <span className="font-heading text-lg font-medium text-foreground">
                Boscary Patrimoine
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? "nav-link-active" : ""
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="-mr-2">
                    <Menu className="w-6 h-6" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-6 mt-10">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.path}>
                        <Link
                          to={link.path}
                          className={`text-lg font-heading ${location.pathname === link.path
                              ? "text-accent font-medium"
                              : "text-foreground"
                            }`}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}

                    <div className="h-px bg-border my-2" />

                    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                      <a href="tel:0683039438" className="flex items-center gap-3">
                        <Phone className="w-4 h-4" />
                        06 83 03 94 38
                      </a>
                      <a href="mailto:boscarypatrimoine@outlook.fr" className="flex items-center gap-3">
                        <Mail className="w-4 h-4" />
                        boscarypatrimoine@outlook.fr
                      </a>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
