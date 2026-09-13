import { useTranslations } from "next-intl";

export function Seva() {
  const t = useTranslations("Seva");

  return (
    <section id="seva" className="py-24 bg-[#EAE3D2] text-[#1A2E20]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-8 leading-tight">
            {t("title")}
          </h2>
          <h3 className="font-heading text-2xl md:text-4xl italic mb-10 text-[#3A5A40]">
            {t("quote")}
          </h3>
          <div className="w-16 h-[2px] bg-[#C5A866] mx-auto mb-10" />
          <p className="text-lg md:text-xl leading-relaxed">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
