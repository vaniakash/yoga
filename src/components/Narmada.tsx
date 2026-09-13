import { useTranslations } from "next-intl";

export function Narmada() {
  const t = useTranslations("Narmada");

  return (
    <section id="narmada" className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            {t("title")}
          </h2>
          <div className="w-24 h-[2px] bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>
        
        <div className="relative h-[60vh] w-full rounded-sm overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1627885233075-81335b2e3e5b?q=80&w=2070&auto=format&fit=crop')" }}
          />
        </div>
      </div>
    </section>
  );
}
