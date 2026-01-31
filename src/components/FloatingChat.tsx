import { useState } from "react";
import { MessageCircle, X, Send, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  mockConversations,
  mockMessages,
  Conversation,
  Message,
} from "@/data/conversations";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversations] = useState<Conversation[]>(mockConversations);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState("");

  const totalUnread = conversations.reduce(
    (sum, conv) => sum + conv.unreadCount,
    0
  );

  const conversationMessages = selectedConversation
    ? messages.filter((m) => m.conversationId === selectedConversation.id)
    : [];

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const message: Message = {
      id: `msg-${Date.now()}`,
      conversationId: selectedConversation.id,
      senderId: "current-user",
      senderName: "Você",
      senderAvatar: "",
      senderType: "guest",
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: true,
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Hoje";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Ontem";
    } else {
      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      });
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center",
          "w-14 h-14 rounded-full bg-primary text-primary-foreground",
          "shadow-lg hover:shadow-xl transition-all duration-300",
          "hover:scale-105 active:scale-95"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" />
            {totalUnread > 0 && (
              <Badge
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                variant="destructive"
              >
                {totalUnread}
              </Badge>
            )}
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-24 right-6 z-50",
            "w-[360px] h-[500px] max-h-[70vh]",
            "bg-background border border-border rounded-2xl shadow-xl",
            "flex flex-col overflow-hidden",
            "animate-scale-in"
          )}
        >
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border bg-muted/30">
            {selectedConversation ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setSelectedConversation(null)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <img
                  src={selectedConversation.propertyImage}
                  alt={selectedConversation.propertyTitle}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">
                    {selectedConversation.propertyTitle}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Conversa ativa
                  </p>
                </div>
              </>
            ) : (
              <>
                <MessageCircle className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Mensagens</p>
                  <p className="text-xs text-muted-foreground">
                    {conversations.length} conversas
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <ScrollArea className="flex-1">
            {selectedConversation ? (
              // Messages View
              <div className="p-4 space-y-4">
                {conversationMessages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-2",
                      message.senderType === "guest" &&
                        message.senderId !== "current-user"
                        ? "flex-row"
                        : "flex-row-reverse"
                    )}
                  >
                    {message.senderType === "guest" &&
                      message.senderId !== "current-user" && (
                        <img
                          src={message.senderAvatar}
                          alt={message.senderName}
                          className="w-8 h-8 rounded-full object-cover shrink-0"
                        />
                      )}
                    <div
                      className={cn(
                        "max-w-[75%] rounded-2xl px-4 py-2",
                        message.senderType === "admin"
                          ? "bg-primary text-primary-foreground"
                          : message.senderId === "current-user"
                          ? "bg-muted"
                          : "bg-muted"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={cn(
                          "text-xs mt-1",
                          message.senderType === "admin"
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        )}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Conversations List
              <div className="divide-y divide-border">
                {conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className="w-full p-4 flex gap-3 hover:bg-muted/50 transition-colors text-left"
                  >
                    <div className="relative">
                      <img
                        src={conversation.propertyImage}
                        alt={conversation.propertyTitle}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      {conversation.unreadCount > 0 && (
                        <Badge
                          className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                          variant="destructive"
                        >
                          {conversation.unreadCount}
                        </Badge>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-semibold text-sm text-foreground truncate">
                          {conversation.propertyTitle}
                        </p>
                        <span className="text-xs text-muted-foreground shrink-0">
                          {formatDate(conversation.lastMessageTime)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate mt-0.5">
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </ScrollArea>

          {/* Message Input */}
          {selectedConversation && (
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={!newMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingChat;
