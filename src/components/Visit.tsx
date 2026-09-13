import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export function Visit() {
  const t = useTranslations("Visit");

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-8 leading-tight">
              {t("title")}
            </h2>
            <div className="w-16 h-[2px] bg-accent mb-8" />
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-lg text-foreground/80">{t("location")}</p>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-lg text-foreground/80">+91 (Placeholder)</p>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-lg text-foreground/80">contact@kalapgram.placeholder</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-6 rounded-none flex items-center gap-2 text-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                {t("contact")}
              </Button>
              <Button variant="outline" className="border-primary text-primary px-8 py-6 rounded-none text-lg">
                {t("view_map")}
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-sm overflow-hidden shadow-lg border border-border/50">
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <MapPin className="w-16 h-16 text-muted-foreground/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
