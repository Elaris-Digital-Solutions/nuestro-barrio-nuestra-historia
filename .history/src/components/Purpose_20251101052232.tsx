import { Button } from "@/components/ui/button";

const PURPOSE_ITEMS = [
  {
    title: "Propósito",
    description: "Reconstruir la memoria viva de La Oroya a través de voces, miradas y experiencias de sus habitantes, impulsando diálogo, cuidado del territorio y participación comunitaria."
  },
  {
    title: "Misión", 
    description: "Documentar, reflexionar y compartir memorias colectivas mediante metodologías participativas —fotovoz, teatro comunitario, cartografía social y mapas del cuerpo— articulando psicología comunitaria, comunicación para el desarrollo y ciencia ambiental."
  },
  {
    title: "Visión",
    description: "Una comunidad que reconoce y transmite su historia viva de forma intergeneracional, capaz de incidir en decisiones públicas y fortalecer la escucha institucional a través del arte, la evidencia y la colaboración."
  }
];

const Purpose = () => {
  return (
    <section id="proyecto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Nuestro <span className="text-primary">Propósito</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Un proyecto interdisciplinario que combina psicología comunitaria, comunicación para el desarrollo y ciencia ambiental, dedicado a documentar, reflexionar y compartir las memorias colectivas de La Oroya.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PURPOSE_ITEMS.map((item, index) => (
            <div 
              key={item.title}
              className="bg-card p-8 rounded-2xl shadow-[var(--shadow-soft)] border-t-4 border-t-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Conocer más
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;
