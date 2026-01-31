import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: string;
  images: string[];
  title: string;
  location: string;
  distance?: string;
  dates?: string;
  price: number;
  rating: number;
  isSuperhost?: boolean;
}

const PropertyCard = ({
  id,
  images,
  title,
  location,
  distance,
  dates,
  price,
  rating,
  isSuperhost,
}: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/property/${id}`} className="group block">
      <div
        className="relative aspect-square overflow-hidden rounded-xl mb-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-transparent hover:bg-transparent"
          onClick={toggleFavorite}
        >
          <Heart
            className={`h-6 w-6 transition-colors ${
              isFavorite
                ? "fill-primary text-primary"
                : "fill-gray-900/30 text-primary-foreground stroke-2"
            }`}
          />
        </Button>

        {/* Superhost Badge */}
        {isSuperhost && (
          <div className="absolute top-3 left-3 bg-background px-2 py-1 rounded-md text-xs font-semibold">
            Superhost
          </div>
        )}

        {/* Navigation Arrows */}
        {isHovered && images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/90 hover:bg-background shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/90 hover:bg-background shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-primary-foreground w-2"
                    : "bg-primary-foreground/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Property Info */}
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground truncate">{location}</h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="h-4 w-4 fill-foreground text-foreground" />
            <span className="text-sm font-medium">{rating.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground truncate">{title}</p>
        {distance && (
          <p className="text-sm text-muted-foreground">{distance}</p>
        )}
        {dates && <p className="text-sm text-muted-foreground">{dates}</p>}
        <p className="text-sm">
          <span className="font-semibold text-foreground">R$ {price}</span>
          <span className="text-muted-foreground"> noite</span>
        </p>
      </div>
    </Link>
  );
};

export default PropertyCard;
