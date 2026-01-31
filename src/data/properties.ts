export interface Property {
  id: string;
  images: string[];
  title: string;
  description: string;
  location: string;
  city: string;
  country: string;
  distance?: string;
  dates?: string;
  price: number;
  rating: number;
  reviews: number;
  isSuperhost?: boolean;
  host: {
    name: string;
    image: string;
    joinedDate: string;
    isSuperhost: boolean;
  };
  amenities: string[];
  bedrooms: number;
  beds: number;
  bathrooms: number;
  maxGuests: number;
  type: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const properties: Property[] = [
  {
    id: "1",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    ],
    title: "Apartamento moderno com vista para o mar",
    description: "Apartamento espaçoso e moderno com vista deslumbrante para o oceano. Perfeito para casais ou pequenas famílias que buscam relaxar à beira-mar.",
    location: "Copacabana, Rio de Janeiro",
    city: "Rio de Janeiro",
    country: "Brasil",
    distance: "A 2 km da praia",
    dates: "1-6 de fev",
    price: 450,
    rating: 4.92,
    reviews: 128,
    isSuperhost: true,
    host: {
      name: "Marina",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      joinedDate: "Janeiro de 2018",
      isSuperhost: true,
    },
    amenities: ["Wi-Fi", "Ar condicionado", "Cozinha", "Piscina", "Estacionamento", "TV", "Máquina de lavar"],
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    maxGuests: 4,
    type: "Apartamento inteiro",
    coordinates: { lat: -22.9707, lng: -43.1824 },
  },
  {
    id: "2",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    ],
    title: "Casa de campo com lareira e jardim",
    description: "Charmosa casa de campo cercada pela natureza. Ideal para quem busca paz e tranquilidade longe da cidade.",
    location: "Campos do Jordão, São Paulo",
    city: "Campos do Jordão",
    country: "Brasil",
    distance: "A 150 km de São Paulo",
    dates: "8-13 de fev",
    price: 680,
    rating: 4.88,
    reviews: 95,
    isSuperhost: false,
    host: {
      name: "Roberto",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      joinedDate: "Março de 2019",
      isSuperhost: false,
    },
    amenities: ["Lareira", "Jardim", "Churrasqueira", "Wi-Fi", "Estacionamento", "Cozinha completa"],
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    maxGuests: 6,
    type: "Casa inteira",
    coordinates: { lat: -22.7296, lng: -45.5833 },
  },
  {
    id: "3",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    ],
    title: "Villa de luxo com piscina infinita",
    description: "Experimente o luxo absoluto nesta villa exclusiva com piscina de borda infinita e vista panorâmica.",
    location: "Trancoso, Bahia",
    city: "Trancoso",
    country: "Brasil",
    distance: "A 5 min do Quadrado",
    dates: "15-20 de fev",
    price: 1250,
    rating: 4.97,
    reviews: 67,
    isSuperhost: true,
    host: {
      name: "Fernanda",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      joinedDate: "Agosto de 2017",
      isSuperhost: true,
    },
    amenities: ["Piscina infinita", "Wi-Fi", "Ar condicionado", "Chef particular", "Serviço de limpeza", "Spa"],
    bedrooms: 5,
    beds: 6,
    bathrooms: 4,
    maxGuests: 10,
    type: "Villa inteira",
    coordinates: { lat: -16.5897, lng: -39.0947 },
  },
  {
    id: "4",
    images: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    ],
    title: "Loft industrial no centro histórico",
    description: "Loft estiloso em edifício histórico renovado, perfeito para exploradores urbanos.",
    location: "Pelourinho, Salvador",
    city: "Salvador",
    country: "Brasil",
    distance: "Centro histórico",
    dates: "22-27 de fev",
    price: 320,
    rating: 4.85,
    reviews: 203,
    isSuperhost: true,
    host: {
      name: "Carlos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
      joinedDate: "Junho de 2016",
      isSuperhost: true,
    },
    amenities: ["Wi-Fi", "Ar condicionado", "Cozinha", "TV Smart", "Terraço"],
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    maxGuests: 2,
    type: "Loft inteiro",
    coordinates: { lat: -12.9714, lng: -38.5014 },
  },
  {
    id: "5",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    ],
    title: "Chalé romântico nas montanhas",
    description: "Refúgio perfeito para casais com vista espetacular das montanhas e jacuzzi privativa.",
    location: "Monte Verde, Minas Gerais",
    city: "Monte Verde",
    country: "Brasil",
    distance: "A 170 km de São Paulo",
    dates: "1-6 de mar",
    price: 520,
    rating: 4.94,
    reviews: 156,
    isSuperhost: true,
    host: {
      name: "Ana Paula",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
      joinedDate: "Dezembro de 2018",
      isSuperhost: true,
    },
    amenities: ["Jacuzzi", "Lareira", "Wi-Fi", "Cozinha", "Vista para montanha", "Estacionamento"],
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    maxGuests: 2,
    type: "Chalé inteiro",
    coordinates: { lat: -22.8628, lng: -46.0389 },
  },
  {
    id: "6",
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    ],
    title: "Casa de praia com deck privativo",
    description: "Casa pé na areia com deck privativo e acesso direto ao mar. Perfeita para férias em família.",
    location: "Praia do Rosa, Santa Catarina",
    city: "Praia do Rosa",
    country: "Brasil",
    distance: "Beira-mar",
    dates: "10-15 de mar",
    price: 780,
    rating: 4.91,
    reviews: 89,
    isSuperhost: false,
    host: {
      name: "Pedro",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
      joinedDate: "Abril de 2020",
      isSuperhost: false,
    },
    amenities: ["Acesso à praia", "Deck", "Churrasqueira", "Wi-Fi", "Estacionamento", "Cozinha"],
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    maxGuests: 8,
    type: "Casa inteira",
    coordinates: { lat: -28.1175, lng: -48.6342 },
  },
  {
    id: "7",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    ],
    title: "Penthouse com terraço panorâmico",
    description: "Penthouse sofisticada com vista 360° da cidade e terraço gourmet.",
    location: "Jardins, São Paulo",
    city: "São Paulo",
    country: "Brasil",
    distance: "Centro",
    dates: "18-23 de mar",
    price: 950,
    rating: 4.89,
    reviews: 112,
    isSuperhost: true,
    host: {
      name: "Juliana",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
      joinedDate: "Setembro de 2017",
      isSuperhost: true,
    },
    amenities: ["Terraço", "Piscina", "Academia", "Wi-Fi", "Portaria 24h", "Garagem"],
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    maxGuests: 6,
    type: "Apartamento inteiro",
    coordinates: { lat: -23.5629, lng: -46.6544 },
  },
  {
    id: "8",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    ],
    title: "Cabana rústica na floresta",
    description: "Cabana acolhedora cercada por natureza intocada. Ideal para desconectar e recarregar energias.",
    location: "Visconde de Mauá, Rio de Janeiro",
    city: "Visconde de Mauá",
    country: "Brasil",
    distance: "A 200 km do Rio",
    dates: "25-30 de mar",
    price: 380,
    rating: 4.93,
    reviews: 78,
    isSuperhost: true,
    host: {
      name: "Lucas",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200",
      joinedDate: "Julho de 2019",
      isSuperhost: true,
    },
    amenities: ["Lareira", "Varanda", "Trilhas", "Wi-Fi", "Cozinha", "Estacionamento"],
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    maxGuests: 4,
    type: "Cabana inteira",
    coordinates: { lat: -22.3719, lng: -44.5386 },
  },
];
