import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Property } from "@/data/properties";

const propertySchema = z.object({
  title: z.string().min(5, "Título deve ter pelo menos 5 caracteres").max(100),
  description: z.string().min(20, "Descrição deve ter pelo menos 20 caracteres").max(500),
  location: z.string().min(3, "Localização é obrigatória"),
  city: z.string().min(2, "Cidade é obrigatória"),
  type: z.string().min(1, "Tipo é obrigatório"),
  price: z.number().min(1, "Preço deve ser maior que 0"),
  bedrooms: z.number().min(1, "Mínimo 1 quarto"),
  beds: z.number().min(1, "Mínimo 1 cama"),
  bathrooms: z.number().min(1, "Mínimo 1 banheiro"),
  maxGuests: z.number().min(1, "Mínimo 1 hóspede"),
});

type PropertyFormData = z.infer<typeof propertySchema>;

interface PropertyFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (property: Partial<Property>) => void;
}

const propertyTypes = [
  "Apartamento inteiro",
  "Casa inteira",
  "Villa inteira",
  "Chalé inteiro",
  "Cabana inteira",
  "Loft inteiro",
];

const amenitiesOptions = [
  "Wi-Fi",
  "Ar condicionado",
  "Cozinha",
  "Cozinha completa",
  "Piscina",
  "Piscina infinita",
  "Estacionamento",
  "TV",
  "TV Smart",
  "Lareira",
  "Jacuzzi",
  "Churrasqueira",
  "Vista para montanha",
  "Jardim",
  "Terraço",
  "Varanda",
];

const PropertyFormDialog = ({
  open,
  onOpenChange,
  onSubmit,
}: PropertyFormDialogProps) => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      maxGuests: 2,
    },
  });

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const onFormSubmit = (data: PropertyFormData) => {
    const newProperty: Partial<Property> = {
      id: Date.now().toString(),
      ...data,
      country: "Brasil",
      images: imageUrl
        ? [imageUrl]
        : ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
      rating: 0,
      reviews: 0,
      amenities: selectedAmenities,
      host: {
        name: "Administrador",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        joinedDate: new Date().toLocaleDateString("pt-BR", {
          month: "long",
          year: "numeric",
        }),
        isSuperhost: false,
      },
      coordinates: { lat: -23.5505, lng: -46.6333 },
    };

    onSubmit(newProperty);
    reset();
    setSelectedAmenities([]);
    setImageUrl("");
    onOpenChange(false);
    toast.success("Propriedade cadastrada com sucesso!");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Nova Propriedade
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Título da Propriedade</Label>
              <Input
                id="title"
                placeholder="Ex: Apartamento moderno com vista para o mar"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-sm text-destructive mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                placeholder="Descreva a propriedade..."
                rows={3}
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm text-destructive mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="imageUrl">URL da Imagem Principal</Label>
              <Input
                id="imageUrl"
                placeholder="https://..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
          </div>

          {/* Location */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Localização</Label>
              <Input
                id="location"
                placeholder="Ex: Copacabana, Rio de Janeiro"
                {...register("location")}
              />
              {errors.location && (
                <p className="text-sm text-destructive mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="city">Cidade</Label>
              <Input
                id="city"
                placeholder="Ex: Rio de Janeiro"
                {...register("city")}
              />
              {errors.city && (
                <p className="text-sm text-destructive mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          {/* Type & Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Tipo de Propriedade</Label>
              <Select onValueChange={(value) => setValue("type", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.type && (
                <p className="text-sm text-destructive mt-1">
                  {errors.type.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="price">Preço por Noite (R$)</Label>
              <Input
                id="price"
                type="number"
                placeholder="Ex: 450"
                {...register("price", { valueAsNumber: true })}
              />
              {errors.price && (
                <p className="text-sm text-destructive mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>
          </div>

          {/* Capacity */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <Label htmlFor="bedrooms">Quartos</Label>
              <Input
                id="bedrooms"
                type="number"
                min={1}
                {...register("bedrooms", { valueAsNumber: true })}
              />
            </div>
            <div>
              <Label htmlFor="beds">Camas</Label>
              <Input
                id="beds"
                type="number"
                min={1}
                {...register("beds", { valueAsNumber: true })}
              />
            </div>
            <div>
              <Label htmlFor="bathrooms">Banheiros</Label>
              <Input
                id="bathrooms"
                type="number"
                min={1}
                {...register("bathrooms", { valueAsNumber: true })}
              />
            </div>
            <div>
              <Label htmlFor="maxGuests">Hóspedes</Label>
              <Input
                id="maxGuests"
                type="number"
                min={1}
                {...register("maxGuests", { valueAsNumber: true })}
              />
            </div>
          </div>

          {/* Amenities */}
          <div>
            <Label className="mb-3 block">Comodidades</Label>
            <div className="flex flex-wrap gap-2">
              {amenitiesOptions.map((amenity) => (
                <Button
                  key={amenity}
                  type="button"
                  variant={
                    selectedAmenities.includes(amenity) ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => toggleAmenity(amenity)}
                >
                  {amenity}
                </Button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              Cadastrar Propriedade
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyFormDialog;
