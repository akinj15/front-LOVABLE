import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-background rounded-full shadow-card border border-border p-2 flex flex-col sm:flex-row items-stretch sm:items-center">
        {/* Location */}
        <button
          className={`flex-1 px-6 py-3 text-left rounded-full transition-all ${
            activeField === "location"
              ? "bg-secondary shadow-sm"
              : "hover:bg-secondary/50"
          }`}
          onClick={() => setActiveField("location")}
        >
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs font-semibold text-foreground">
                Localização
              </p>
              <p className="text-sm text-muted-foreground">
                Para onde você vai?
              </p>
            </div>
          </div>
        </button>

        <div className="hidden sm:block w-px h-8 bg-border" />

        {/* Check-in */}
        <button
          className={`flex-1 px-6 py-3 text-left rounded-full transition-all ${
            activeField === "checkin"
              ? "bg-secondary shadow-sm"
              : "hover:bg-secondary/50"
          }`}
          onClick={() => setActiveField("checkin")}
        >
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs font-semibold text-foreground">Check-in</p>
              <p className="text-sm text-muted-foreground">Adicione datas</p>
            </div>
          </div>
        </button>

        <div className="hidden sm:block w-px h-8 bg-border" />

        {/* Check-out */}
        <button
          className={`flex-1 px-6 py-3 text-left rounded-full transition-all ${
            activeField === "checkout"
              ? "bg-secondary shadow-sm"
              : "hover:bg-secondary/50"
          }`}
          onClick={() => setActiveField("checkout")}
        >
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs font-semibold text-foreground">Check-out</p>
              <p className="text-sm text-muted-foreground">Adicione datas</p>
            </div>
          </div>
        </button>

        <div className="hidden sm:block w-px h-8 bg-border" />

        {/* Guests */}
        <button
          className={`flex-1 px-6 py-3 text-left rounded-full transition-all ${
            activeField === "guests"
              ? "bg-secondary shadow-sm"
              : "hover:bg-secondary/50"
          }`}
          onClick={() => setActiveField("guests")}
        >
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs font-semibold text-foreground">Hóspedes</p>
              <p className="text-sm text-muted-foreground">
                Adicione hóspedes
              </p>
            </div>
          </div>
        </button>

        {/* Search Button */}
        <Button variant="search" size="icon" className="h-12 w-12 ml-2">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
