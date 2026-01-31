import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section with Search */}
      <section className="relative bg-gradient-to-br from-coral-light via-background to-secondary py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Encontre sua próxima{" "}
              <span className="text-primary">aventura</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Descubra acomodações únicas em todo o Brasil e no mundo
            </p>
          </div>
          <div className="animate-slide-up">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border sticky top-20 z-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <CategoryFilter />
        </div>
      </section>

      {/* Properties Grid */}
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PropertyCard
                  id={property.id}
                  images={property.images}
                  title={property.title}
                  location={property.location}
                  distance={property.distance}
                  dates={property.dates}
                  price={property.price}
                  rating={property.rating}
                  isSuperhost={property.isSuperhost}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
