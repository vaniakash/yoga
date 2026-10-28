import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Flame, HeartHandshake, Eye, Wind, Activity, PersonStanding } from "lucide-react";

export function Sadhana() {
  const t = useTranslations("Sadhana");

  const programs = [
    { id: "shrividya", icon: <Sparkles className="w-8 h-8 text-accent" /> },
    { id: "shaktipat", icon: <Flame className="w-8 h-8 text-accent" /> },
    { id: "ashirwad", icon: <HeartHandshake className="w-8 h-8 text-accent" /> },
    { id: "vigyan_bhairav", icon: <Eye className="w-8 h-8 text-accent" /> },
    { id: "pranayama", icon: <Wind className="w-8 h-8 text-accent" /> },
    { id: "yogasana", icon: <Activity className="w-8 h-8 text-accent" /> },
    { id: "mudra", icon: <PersonStanding className="w-8 h-8 text-accent" /> },
  ];

  return (
    <section id="sadhana" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            {t("title")}
          </h2>
          <div className="w-24 h-[2px] bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {programs.map((prog) => (
            <Card key={prog.id} className="bg-background border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <CardHeader>
                <div className="mb-4 p-3 bg-card rounded-full w-fit group-hover:bg-primary/5 transition-colors">
                  {prog.icon}
                </div>
                <CardTitle className="font-heading text-xl text-primary">
                  {t.raw(`programs.${prog.id}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t.raw(`programs.${prog.id}.desc`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
