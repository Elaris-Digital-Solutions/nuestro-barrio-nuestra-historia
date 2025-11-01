import { Button } from "@/components/ui/button";

const PURPOSES = [
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
            Nuestro <span style={{ color: '#009929' }}>Propósito</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Un proyecto interdisciplinario que combina psicología comunitaria, comunicación para el desarrollo y ciencia ambiental, con el propósito de documentar, reflexionar y compartir las memorias colectivas de La Oroya.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PURPOSES.map((item, index) => (
            <div 
              key={item.title}
              className="bg-card p-8 rounded-2xl shadow-[var(--shadow-soft)] border-t-4 hover:shadow-lg transition-all duration-300"
              style={{ borderTopColor: '#009929' }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full hover:text-white transition-all duration-300"
                    style={{ 
                      borderColor: '#009929',
                      color: '#009929'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#009929';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#009929';
                    }}
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
