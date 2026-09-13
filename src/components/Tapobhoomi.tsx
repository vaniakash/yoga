import { useTranslations } from "next-intl";

export function Tapobhoomi() {
  const t = useTranslations("Tapobhoomi");

  return (
    <section id="tapobhoomi" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block p-4 border border-accent/30 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-8 leading-tight">
            {t("title")}
          </h2>
          <p className="text-lg md:text-2xl text-foreground/80 leading-relaxed font-serif italic text-primary/80">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
