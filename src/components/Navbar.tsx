import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";

const navItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Principes", href: "#principes" },
  { label: "Exigences", href: "#exigences" },
  { label: "Étapes", href: "#etapes" },
  { label: "Avantages", href: "#avantages" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg text-primary">
          <Shield className="w-6 h-6" />
          ISO 22000
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md hover:bg-muted transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="block w-full text-left px-3 py-3 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
