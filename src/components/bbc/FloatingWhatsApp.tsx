import { WhatsAppIcon } from "@/components/bbc/WhatsAppIcon";
import { whatsappUrl } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Réserver sur WhatsApp"
      className="text-white shadow-lg shadow-foreground/20 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-foreground"
      style={{
        position: "fixed",
        right: "1.25rem",
        bottom: "1.25rem",
        zIndex: 50,
        display: "inline-flex",
        width: "3.5rem",
        height: "3.5rem",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        backgroundColor: "#25d366",
      }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
