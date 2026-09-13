import { useTranslations } from "next-intl";

export function GuruParampara() {
  const t = useTranslations("GuruParampara");

  return (
    <section id="guru-parampara" className="py-24 bg-[#203A27] text-[#F8F5F0]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#C5A866] mb-4 leading-tight">
              {t("title")}
            </h2>
            <h3 className="font-sans text-xl md:text-2xl mb-8 opacity-90 font-medium">
              {t("subtitle")}
            </h3>
            <div className="w-16 h-[2px] bg-[#C5A866] mb-8" />
            <p className="text-lg md:text-xl opacity-80 leading-relaxed">
              {t("description")}
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-[500px] md:h-[700px] w-full bg-[#111D15]">
            <div 
              className="absolute inset-0 bg-cover bg-top opacity-80"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop')" }}
            />
            {/* Elegant border overlay */}
            <div className="absolute inset-4 border border-[#C5A866]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
