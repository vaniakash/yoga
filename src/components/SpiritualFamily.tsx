import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function SpiritualFamily() {
  const t = useTranslations("SpiritualFamily");

  return (
    <section className="py-32 bg-[#203A27] text-[#F8F5F0]">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-[#C5A866] mb-8 leading-tight">
          {t("title")}
        </h2>
        <p className="text-lg md:text-2xl opacity-90 leading-relaxed mb-12">
          {t("description")}
        </p>
        <Button variant="outline" size="lg" className="bg-transparent border-[#C5A866] text-[#C5A866] hover:bg-[#C5A866] hover:text-[#111D15] px-10 py-6 text-lg rounded-none transition-all">
          {t("cta")}
        </Button>
      </div>
    </section>
  );
}
