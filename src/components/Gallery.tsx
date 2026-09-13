import { useTranslations } from "next-intl";

export function Gallery() {
  const t = useTranslations("Navbar");

  const images = [
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518342205562-b91c0e7fb326?q=80&w=1931&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596409890987-9bb19d21226b?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1627885233075-81335b2e3e5b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545315003-c5ad6226c272?q=80&w=2167&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            {t("gallery")}
          </h2>
          <div className="w-24 h-[2px] bg-accent mx-auto" />
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid relative rounded-sm overflow-hidden group cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
