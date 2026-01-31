import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/help"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link
                  to="/aircover"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  AirCover
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Apoio a pessoas com deficiência
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Opções de cancelamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Comunidade</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/disaster-relief"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Ajuda em desastres
                </Link>
              </li>
              <li>
                <Link
                  to="/discrimination"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Combate à discriminação
                </Link>
              </li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Hospedagem
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/host"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Anuncie seu espaço
                </Link>
              </li>
              <li>
                <Link
                  to="/host/aircover"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  AirCover para anfitriões
                </Link>
              </li>
              <li>
                <Link
                  to="/host/resources"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Recursos para anfitriões
                </Link>
              </li>
              <li>
                <Link
                  to="/host/forum"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Fórum da comunidade
                </Link>
              </li>
            </ul>
          </div>

          {/* StayNest */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">StayNest</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Carreiras
                </Link>
              </li>
              <li>
                <Link
                  to="/investors"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Investidores
                </Link>
              </li>
              <li>
                <Link
                  to="/gift-cards"
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  Vale-presente
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 StayNest, Inc.</span>
              <span>·</span>
              <Link
                to="/terms"
                className="hover:text-foreground hover:underline"
              >
                Termos
              </Link>
              <span>·</span>
              <Link
                to="/sitemap"
                className="hover:text-foreground hover:underline"
              >
                Mapa do site
              </Link>
              <span>·</span>
              <Link
                to="/privacy"
                className="hover:text-foreground hover:underline"
              >
                Privacidade
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
                <Globe className="h-4 w-4" />
                Português (BR)
              </button>
              <span className="text-sm font-medium text-foreground">
                R$ BRL
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
