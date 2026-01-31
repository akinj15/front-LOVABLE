import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ChevronLeft,
  Star,
  Shield,
  CreditCard,
  Smartphone,
  Building2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { properties } from "@/data/properties";
import { toast } from "sonner";

const checkoutSchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  cpf: z.string().min(11, "CPF deve ter 11 dígitos"),
  cardNumber: z.string().optional(),
  cardName: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvv: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

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

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);
    
    // Simula processamento
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    toast.success("Reserva realizada com sucesso!", {
      description: "Você receberá um email com os detalhes da sua reserva.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to={`/property/${id}`}>
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-foreground ml-2">
              Confirmar e pagar
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold mb-6">
                  Informações Pessoais
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Nome Completo</Label>
                    <Input
                      id="fullName"
                      placeholder="Seu nome completo"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        placeholder="(11) 99999-9999"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input
                      id="cpf"
                      placeholder="000.000.000-00"
                      {...register("cpf")}
                    />
                    {errors.cpf && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.cpf.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold mb-6">
                  Forma de Pagamento
                </h2>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 border border-border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label
                      htmlFor="credit"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <span>Cartão de Crédito</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border border-border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label
                      htmlFor="pix"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                      <span>PIX</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border border-border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value="boleto" id="boleto" />
                    <Label
                      htmlFor="boleto"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                      <span>Boleto Bancário</span>
                    </Label>
                  </div>
                </RadioGroup>

                {/* Credit Card Form */}
                {paymentMethod === "credit" && (
                  <div className="mt-6 space-y-4 p-4 bg-secondary/30 rounded-lg">
                    <div>
                      <Label htmlFor="cardNumber">Número do Cartão</Label>
                      <Input
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        {...register("cardNumber")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardName">Nome no Cartão</Label>
                      <Input
                        id="cardName"
                        placeholder="Nome como está no cartão"
                        {...register("cardName")}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry">Validade</Label>
                        <Input
                          id="cardExpiry"
                          placeholder="MM/AA"
                          {...register("cardExpiry")}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardCvv">CVV</Label>
                        <Input
                          id="cardCvv"
                          placeholder="123"
                          maxLength={4}
                          {...register("cardCvv")}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "pix" && (
                  <div className="mt-6 p-4 bg-secondary/30 rounded-lg text-center">
                    <p className="text-muted-foreground">
                      O QR Code PIX será gerado após confirmar a reserva.
                    </p>
                  </div>
                )}

                {paymentMethod === "boleto" && (
                  <div className="mt-6 p-4 bg-secondary/30 rounded-lg text-center">
                    <p className="text-muted-foreground">
                      O boleto será gerado após confirmar a reserva. Prazo de pagamento: 3 dias úteis.
                    </p>
                  </div>
                )}
              </div>

              <Separator />

              {/* Policies */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Política de Cancelamento
                </h2>
                <p className="text-muted-foreground">
                  Cancelamento gratuito até 48 horas antes do check-in. Após esse período, será cobrada uma taxa de 50% do valor total da reserva.
                </p>
              </div>

              {/* Security Notice */}
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">
                    Pagamento seguro
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Seus dados de pagamento são criptografados e protegidos.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  "Processando..."
                ) : (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Confirmar Reserva - R$ {total.toLocaleString("pt-BR")}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right Column - Summary */}
          <div className="order-1 lg:order-2">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                {/* Property Info */}
                <div className="flex gap-4 pb-6 border-b border-border">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {property.type}
                    </p>
                    <p className="font-medium text-foreground line-clamp-2">
                      {property.title}
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="h-4 w-4 fill-foreground" />
                      <span className="text-sm font-medium">
                        {property.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({property.reviews} avaliações)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="py-6 border-b border-border">
                  <h3 className="font-semibold mb-4">Detalhes da Viagem</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Datas</p>
                        <p className="text-sm text-muted-foreground">
                          1-6 de fevereiro
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Hóspedes</p>
                        <p className="text-sm text-muted-foreground">
                          2 hóspedes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="py-6 border-b border-border">
                  <h3 className="font-semibold mb-4">Detalhes do Preço</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-foreground">
                        R$ {property.price} x {nights} noites
                      </span>
                      <span className="text-foreground">
                        R$ {(property.price * nights).toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Taxa de limpeza</span>
                      <span className="text-foreground">
                        R$ {cleaningFee.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Taxa de serviço</span>
                      <span className="text-foreground">
                        R$ {serviceFee.toLocaleString("pt-BR")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">
                      Total (BRL)
                    </span>
                    <span className="text-lg font-bold text-foreground">
                      R$ {total.toLocaleString("pt-BR")}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
