import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg
              className="h-8 w-8 text-primary"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 1c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 25.837 0 17 7.163 1 16 1zm0 2C8.268 3 2 9.268 2 17s6.268 14 14 14 14-6.268 14-14S23.732 3 16 3zm0 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S5 23.075 5 17 9.925 6 16 6zm-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5h-2z" />
            </svg>
            <span className="text-xl font-bold text-primary">staynest</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Acomodações
            </Link>
            <Link
              to="/experiences"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Experiências
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/host"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Anuncie seu espaço
            </Link>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="icon"
              className="flex items-center gap-2 px-3 py-2 h-auto"
            >
              <Menu className="h-4 w-4" />
              <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center">
                <User className="h-5 w-5 text-primary-foreground" />
              </div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Acomodações
            </Link>
            <Link
              to="/experiences"
              className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Experiências
            </Link>
            <Link
              to="/host"
              className="block text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Anuncie seu espaço
            </Link>
            <div className="pt-4 border-t border-border">
              <Button variant="default" className="w-full">
                Entrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
