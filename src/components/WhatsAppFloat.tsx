import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/agency";

// Floating WhatsApp button shown on all pages.
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(
        `Hi ${"AR Studio"}, I'd like to discuss a website project.`
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-glow transition-transform duration-300"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
