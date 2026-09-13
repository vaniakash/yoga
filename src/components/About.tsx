import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545315003-c5ad6226c272?q=80&w=2167&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-8 leading-tight">
              {t("title")}
            </h2>
            <div className="w-16 h-[2px] bg-accent mb-8" />
            <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
              {t("description_1")}
            </p>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed">
              {t("description_2")}
            </p>
            
            <div className="flex flex-col border-l-4 border-accent pl-6 py-2">
              <span className="font-heading font-bold text-5xl text-primary mb-2">{t("est_year")}</span>
              <span className="font-sans text-sm tracking-widest uppercase text-muted-foreground">{t("est_label")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
