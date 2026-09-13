import { useTranslations } from "next-intl";

export function Philosophy() {
  const t = useTranslations("Philosophy");

  return (
    <section className="relative py-32 bg-[#111D15] text-[#F8F5F0] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111D15] via-[#111D15]/80 to-[#111D15]" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight text-[#A3B18A] max-w-4xl mx-auto">
          {t("quote")}
        </h2>
        <p className="font-sans text-xl md:text-2xl max-w-3xl mx-auto opacity-80 leading-relaxed">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
