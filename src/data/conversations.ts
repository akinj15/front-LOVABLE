export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  senderType: "guest" | "admin";
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  bookingId: string;
  propertyId: string;
  propertyTitle: string;
  propertyImage: string;
  guestId: string;
  guestName: string;
  guestAvatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  status: "active" | "archived";
}

export const mockConversations: Conversation[] = [
  {
    id: "conv-1",
    bookingId: "1",
    propertyId: "1",
    propertyTitle: "Casa na praia com vista para o mar",
    propertyImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
    guestId: "guest-1",
    guestName: "Maria Silva",
    guestAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    lastMessage: "Olá! Gostaria de saber se posso fazer check-in mais cedo?",
    lastMessageTime: "2024-02-14T10:30:00",
    unreadCount: 2,
    status: "active",
  },
  {
    id: "conv-2",
    bookingId: "2",
    propertyId: "2",
    propertyTitle: "Apartamento moderno no centro",
    propertyImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    guestId: "guest-2",
    guestName: "João Santos",
    guestAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    lastMessage: "Perfeito, muito obrigado!",
    lastMessageTime: "2024-02-13T18:45:00",
    unreadCount: 0,
    status: "active",
  },
  {
    id: "conv-3",
    bookingId: "5",
    propertyId: "5",
    propertyTitle: "Villa de luxo com piscina",
    propertyImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    guestId: "guest-3",
    guestName: "Carla Mendes",
    guestAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    lastMessage: "A piscina está disponível 24h?",
    lastMessageTime: "2024-02-12T14:20:00",
    unreadCount: 1,
    status: "active",
  },
];

export const mockMessages: Message[] = [
  // Conversation 1
  {
    id: "msg-1",
    conversationId: "conv-1",
    senderId: "guest-1",
    senderName: "Maria Silva",
    senderAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    senderType: "guest",
    content: "Olá! Acabei de fazer a reserva da Casa na praia.",
    timestamp: "2024-02-14T09:00:00",
    read: true,
  },
  {
    id: "msg-2",
    conversationId: "conv-1",
    senderId: "admin-1",
    senderName: "Administrador",
    senderAvatar: "",
    senderType: "admin",
    content: "Olá Maria! Seja bem-vinda. Estamos animados com sua visita!",
    timestamp: "2024-02-14T09:15:00",
    read: true,
  },
  {
    id: "msg-3",
    conversationId: "conv-1",
    senderId: "guest-1",
    senderName: "Maria Silva",
    senderAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    senderType: "guest",
    content: "Olá! Gostaria de saber se posso fazer check-in mais cedo?",
    timestamp: "2024-02-14T10:30:00",
    read: false,
  },
  // Conversation 2
  {
    id: "msg-4",
    conversationId: "conv-2",
    senderId: "guest-2",
    senderName: "João Santos",
    senderAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    senderType: "guest",
    content: "Boa tarde! Qual é a senha do WiFi?",
    timestamp: "2024-02-13T16:00:00",
    read: true,
  },
  {
    id: "msg-5",
    conversationId: "conv-2",
    senderId: "admin-1",
    senderName: "Administrador",
    senderAvatar: "",
    senderType: "admin",
    content: "Olá João! A senha do WiFi é: ApartamentoCentro2024. Está na etiqueta do roteador também.",
    timestamp: "2024-02-13T16:30:00",
    read: true,
  },
  {
    id: "msg-6",
    conversationId: "conv-2",
    senderId: "guest-2",
    senderName: "João Santos",
    senderAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    senderType: "guest",
    content: "Perfeito, muito obrigado!",
    timestamp: "2024-02-13T18:45:00",
    read: true,
  },
  // Conversation 3
  {
    id: "msg-7",
    conversationId: "conv-3",
    senderId: "guest-3",
    senderName: "Carla Mendes",
    senderAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    senderType: "guest",
    content: "Olá! Reservei a villa e estou muito animada!",
    timestamp: "2024-02-12T12:00:00",
    read: true,
  },
  {
    id: "msg-8",
    conversationId: "conv-3",
    senderId: "admin-1",
    senderName: "Administrador",
    senderAvatar: "",
    senderType: "admin",
    content: "Olá Carla! Que ótimo! A villa é maravilhosa, você vai adorar.",
    timestamp: "2024-02-12T13:00:00",
    read: true,
  },
  {
    id: "msg-9",
    conversationId: "conv-3",
    senderId: "guest-3",
    senderName: "Carla Mendes",
    senderAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    senderType: "guest",
    content: "A piscina está disponível 24h?",
    timestamp: "2024-02-12T14:20:00",
    read: false,
  },
];
