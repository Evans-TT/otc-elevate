import { MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/27000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant animate-float hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-pulse-ring" />
        <MessageCircle size={26} />
      </a>
      <a
        href="#contact"
        className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-elegant md:hidden"
      >
        Quick Quote
      </a>
    </>
  );
}
