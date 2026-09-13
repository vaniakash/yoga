import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#111D15]">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596409890987-9bb19d21226b?q=80&w=2069&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111D15]/40 via-transparent to-[#111D15] z-10" />

      <div className="relative z-20 container mx-auto px-4 md:px-6 text-center text-[#F8F5F0]">
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-widest mb-4 drop-shadow-lg">
          {t("title")}
        </h1>
        <p className="font-sans text-lg md:text-2xl tracking-[0.3em] uppercase mb-10 text-[#D4AF37] opacity-90">
          {t("subtitle")}
        </p>
        <p className="font-heading text-xl md:text-3xl max-w-2xl mx-auto mb-12 drop-shadow-md leading-relaxed">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="default" size="lg" className="bg-[#203A27] hover:bg-[#3A5A40] text-white px-8 py-6 text-lg rounded-none">
            {t("cta_about")}
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-8 py-6 text-lg rounded-none">
            {t("cta_visit")}
          </Button>
        </div>
      </div>
    </section>
  );
}
