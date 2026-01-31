import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Share,
  Heart,
  Star,
  Medal,
  Check,
  Calendar,
  Users,
  Minus,
  Plus,
  Wifi,
  Car,
  Tv,
  Utensils,
  Wind,
  Waves,
  Flame,
  Mountain,
  Eye,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthDialog from "@/components/AuthDialog";
import { properties } from "@/data/properties";
import { useState } from "react";

const amenityIcons: Record<string, React.ElementType> = {
  "Wi-Fi": Wifi,
  Estacionamento: Car,
  TV: Tv,
  "TV Smart": Tv,
  Cozinha: Utensils,
  "Cozinha completa": Utensils,
  "Ar condicionado": Wind,
  Piscina: Waves,
  "Piscina infinita": Waves,
  Lareira: Flame,
  "Vista para montanha": Mountain,
  Vista: Eye,
  Jacuzzi: Sparkles,
  Churrasqueira: Flame,
};

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);
  const [guests, setGuests] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Propriedade não encontrada</h1>
          <Link to="/">
            <Button>Voltar para a página inicial</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nights = 5;
  const serviceFee = Math.round(property.price * nights * 0.12);
  const cleaningFee = 150;
  const total = property.price * nights + serviceFee + cleaningFee;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Back Button & Title */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ChevronLeft className="h-5 w-5" />
              Voltar
            </Link>
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                {property.title}
              </h1>
              <div className="flex items-center gap-2">
                <Button variant="ghost" className="gap-2">
                  <Share className="h-4 w-4" />
                  <span className="hidden sm:inline">Compartilhar</span>
                </Button>
                <Button
                  variant="ghost"
                  className="gap-2"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isFavorite ? "fill-primary text-primary" : ""
                    }`}
                  />
                  <span className="hidden sm:inline">Salvar</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden mb-8">
            <div className="md:col-span-2 md:row-span-2">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-64 md:h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
              />
            </div>
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="hidden md:block">
                <img
                  src={image}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              {/* Host & Property Info */}
              <div className="flex items-start justify-between pb-6 border-b border-border">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    {property.type} hospedado por {property.host.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {property.maxGuests} hóspedes · {property.bedrooms} quartos ·{" "}
                    {property.beds} camas · {property.bathrooms} banheiros
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={property.host.image}
                    alt={property.host.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  {property.host.isSuperhost && (
                    <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1">
                      <Medal className="h-3 w-3" />
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="py-6 border-b border-border space-y-4">
                {property.host.isSuperhost && (
                  <div className="flex items-start gap-4">
                    <Medal className="h-6 w-6 text-foreground mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {property.host.name} é um Superhost
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Superhosts são anfitriões experientes e bem avaliados.
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-foreground mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {property.reviews} avaliações
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Média de {property.rating} estrelas
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="py-6 border-b border-border">
                <p className="text-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="py-6 border-b border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  O que este lugar oferece
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || Check;
                    return (
                      <div
                        key={amenity}
                        className="flex items-center gap-4 text-foreground"
                      >
                        <Icon className="h-6 w-6" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Calendar Section */}
              <div className="py-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Selecione a data do check-in
                </h3>
                <p className="text-muted-foreground mb-6">
                  Adicione suas datas de viagem para obter preços exatos
                </p>
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Calendário em breve disponível
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-2xl shadow-card border border-border p-6">
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-foreground">
                      R$ {property.price}
                    </span>
                    <span className="text-muted-foreground"> noite</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-foreground" />
                    <span className="font-semibold">{property.rating}</span>
                    <span className="text-muted-foreground">
                      · {property.reviews} avaliações
                    </span>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="border border-border rounded-xl overflow-hidden mb-4">
                  <div className="grid grid-cols-2 border-b border-border">
                    <div className="p-3 border-r border-border">
                      <p className="text-xs font-semibold text-foreground uppercase">
                        Check-in
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Adicione uma data
                      </p>
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-semibold text-foreground uppercase">
                        Check-out
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Adicione uma data
                      </p>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold text-foreground uppercase">
                      Hóspedes
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-foreground">
                        {guests} hóspede{guests > 1 ? "s" : ""}
                      </span>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          disabled={guests <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-4 text-center font-medium">
                          {guests}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() =>
                            setGuests(Math.min(property.maxGuests, guests + 1))
                          }
                          disabled={guests >= property.maxGuests}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full mb-4"
                  onClick={() => {
                    if (isAuthenticated) {
                      navigate(`/checkout/${id}`);
                    } else {
                      setShowAuthDialog(true);
                    }
                  }}
                >
                  Reservar
                </Button>

                <p className="text-center text-sm text-muted-foreground mb-6">
                  Você ainda não será cobrado
                </p>

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground underline">
                      R$ {property.price} x {nights} noites
                    </span>
                    <span className="text-foreground">
                      R$ {property.price * nights}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground underline">
                      Taxa de limpeza
                    </span>
                    <span className="text-foreground">R$ {cleaningFee}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground underline">
                      Taxa de serviço
                    </span>
                    <span className="text-foreground">R$ {serviceFee}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">R$ {total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <AuthDialog 
        open={showAuthDialog} 
        onOpenChange={setShowAuthDialog}
        onSuccess={() => {
          setIsAuthenticated(true);
          setShowAuthDialog(false);
          navigate(`/checkout/${id}`);
        }}
      />
    </div>
  );
};

export default PropertyDetail;
