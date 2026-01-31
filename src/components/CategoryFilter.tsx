import { useState } from "react";
import {
  Home,
  Building2,
  TreePine,
  Waves,
  Mountain,
  Castle,
  Tent,
  Sailboat,
  Warehouse,
  Palmtree,
  Snowflake,
  Flame,
} from "lucide-react";

const categories = [
  { id: "all", label: "Todos", icon: Home },
  { id: "apartments", label: "Apartamentos", icon: Building2 },
  { id: "cabins", label: "Cabanas", icon: TreePine },
  { id: "beach", label: "Praia", icon: Waves },
  { id: "mountains", label: "Montanhas", icon: Mountain },
  { id: "castles", label: "Castelos", icon: Castle },
  { id: "camping", label: "Camping", icon: Tent },
  { id: "boats", label: "Barcos", icon: Sailboat },
  { id: "farms", label: "Fazendas", icon: Warehouse },
  { id: "tropical", label: "Tropical", icon: Palmtree },
  { id: "skiing", label: "Esqui", icon: Snowflake },
  { id: "trending", label: "Em alta", icon: Flame },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="relative">
      <div className="flex items-center gap-8 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center gap-2 min-w-fit transition-all duration-200 group ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon
                className={`h-6 w-6 transition-colors ${
                  isActive ? "text-foreground" : "group-hover:text-foreground"
                }`}
              />
              <span className="text-xs font-medium whitespace-nowrap">
                {category.label}
              </span>
              <div
                className={`h-0.5 w-full rounded-full transition-all ${
                  isActive ? "bg-foreground" : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
