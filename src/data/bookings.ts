export interface Booking {
  id: string;
  propertyId: string;
  propertyTitle: string;
  propertyImage: string;
  guestName: string;
  guestEmail: string;
  guestAvatar: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  createdAt: string;
}

export const mockBookings: Booking[] = [
  {
    id: "1",
    propertyId: "1",
    propertyTitle: "Casa na praia com vista para o mar",
    propertyImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    guestName: "Maria Silva",
    guestEmail: "maria.silva@email.com",
    guestAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    checkIn: "2024-02-15",
    checkOut: "2024-02-20",
    guests: 4,
    totalPrice: 2750,
    status: "confirmed",
    createdAt: "2024-02-01",
  },
  {
    id: "2",
    propertyId: "2",
    propertyTitle: "Apartamento moderno no centro",
    propertyImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    guestName: "João Santos",
    guestEmail: "joao.santos@email.com",
    guestAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    checkIn: "2024-02-18",
    checkOut: "2024-02-22",
    guests: 2,
    totalPrice: 1600,
    status: "pending",
    createdAt: "2024-02-05",
  },
  {
    id: "3",
    propertyId: "3",
    propertyTitle: "Chalé aconchegante na montanha",
    propertyImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    guestName: "Ana Oliveira",
    guestEmail: "ana.oliveira@email.com",
    guestAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    checkIn: "2024-02-10",
    checkOut: "2024-02-14",
    guests: 6,
    totalPrice: 3200,
    status: "completed",
    createdAt: "2024-01-28",
  },
  {
    id: "4",
    propertyId: "4",
    propertyTitle: "Loft industrial com terraço",
    propertyImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
    guestName: "Pedro Costa",
    guestEmail: "pedro.costa@email.com",
    guestAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    checkIn: "2024-02-25",
    checkOut: "2024-02-28",
    guests: 2,
    totalPrice: 1350,
    status: "cancelled",
    createdAt: "2024-02-08",
  },
  {
    id: "5",
    propertyId: "5",
    propertyTitle: "Villa de luxo com piscina",
    propertyImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    guestName: "Carla Mendes",
    guestEmail: "carla.mendes@email.com",
    guestAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    checkIn: "2024-03-01",
    checkOut: "2024-03-07",
    guests: 8,
    totalPrice: 8400,
    status: "confirmed",
    createdAt: "2024-02-10",
  },
  {
    id: "6",
    propertyId: "6",
    propertyTitle: "Estúdio minimalista",
    propertyImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    guestName: "Lucas Ferreira",
    guestEmail: "lucas.ferreira@email.com",
    guestAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    checkIn: "2024-02-20",
    checkOut: "2024-02-23",
    guests: 1,
    totalPrice: 900,
    status: "pending",
    createdAt: "2024-02-12",
  },
];
