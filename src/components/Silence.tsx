import { useTranslations } from "next-intl";

export function Silence() {
  const t = useTranslations("Silence");

  return (
    <section className="py-32 bg-[#0D150F] text-[#E0E2D8] flex items-center justify-center min-h-[50vh]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading font-medium text-4xl md:text-5xl lg:text-6xl tracking-wide mb-10 opacity-90">
          {t("title")}
        </h2>
        <p className="font-sans text-xl md:text-2xl max-w-3xl mx-auto opacity-70 leading-relaxed font-light">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
