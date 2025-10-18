import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Target, Heart, Rocket, ShieldCheck, Compass, Waves, Package, Building2, Trophy } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nosotros
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Historia del Grupo Kar & Ma
              </p>
            </Reveal>
          </div>
        </div>

        {/* 25 Años de Trayectoria */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-center text-primary mb-12">
            25 Años de Trayectoria
          </h3>
          {/* Timeline Next-Gen */}
          <div className="relative px-2 md:px-8">
            {/* Animated vertical line */}
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px]" aria-hidden>
              <div className="h-full w-full bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 rounded-full" />
              {/* progress fill */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
                className="absolute inset-0 bg-gradient-to-b from-emerald-400/0 via-emerald-400/50 to-emerald-400/0 rounded-full"
              />
              <div className="absolute inset-x-[-6px] top-0 h-24 bg-gradient-to-b from-primary/25 to-transparent blur-2xl" />
            </div>

            <div className="space-y-12">
              {[ 
                { year: '1990s', title: 'Fundación', desc: 'Nacimiento en el norte del Perú con visión de excelencia', Icon: Waves },
                { year: '2000s', title: 'Expansión', desc: 'Crecimiento operativo y desarrollo de marcas', Icon: Package },
                { year: '2010s', title: 'Consolidación', desc: 'Presencia nacional en retail e industria', Icon: Building2 },
                { year: '2020s', title: 'Liderazgo', desc: 'Referente confiable del mercado peruano', Icon: Trophy },
              ].map((m, i) => (
                <div key={m.year} className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? '' : ''}`}>
                  {/* Side content left/right alternating */}
                  <div className={`order-2 md:order-${i % 2 === 0 ? '1' : '2'} ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Reveal direction={i % 2 === 0 ? 'left' : 'right'} delay={0.15 + i * 0.1} width="100%">
                      <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-emerald-400/30 to-primary/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition" />
                        <div className="relative rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl p-6 shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10 text-primary">
                              <m.Icon className="w-5 h-5" />
                            </span>
                            <span className="text-sm font-semibold text-primary/80 tracking-wide">{m.year}</span>
                          </div>
                          <h4 className="text-xl font-bold text-primary mb-1">{m.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* Timeline node in center */}
                  <div className="order-1 md:order-2 relative h-full flex items-center justify-center">
                    <Reveal direction="up" delay={0.1 + i * 0.1} width="100%">
                      <div className="relative">
                        {/* core node minimal */}
                        <div className="relative w-4 h-4 rounded-full bg-primary ring-4 ring-white/60 shadow-lg shadow-primary/30" />
                        {/* horizontal connector to card */}
                        <div className={`absolute top-1/2 -translate-y-1/2 ${i % 2 === 0 ? 'left-3' : 'right-3'} w-28 h-[2px] ${i % 2 === 0 ? 'bg-gradient-to-r from-primary/40 to-transparent' : 'bg-gradient-to-l from-primary/40 to-transparent'}`} />
                      </div>
                    </Reveal>
                  </div>

                  {/* Empty spacer for layout symmetry */}
                  <div className={`hidden md:block ${i % 2 === 0 ? 'order-3' : 'order-1'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separador sutil entre subsecciones */}
        <div className="relative mb-16">
          <div className="h-10 w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur" />
        </div>

        {/* Historia */}
        <div className="mb-16">
          <Reveal direction="left" width="100%">
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 via-emerald-400/40 to-primary/40 rounded-3xl blur opacity-30" />
              <div className="relative rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl">
                <div className="p-8 md:p-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Nuestra Historia
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent mb-5">
                    De tradición norteña a consorcio salinero
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-muted-foreground">
                    Durante 25 años, Kar & Ma S.A.C. ha sido un pilar fundamental en la industria salinera peruana.
                    Nacimos en el norte del país con la visión de proporcionar sal de la más alta calidad tanto para el consumo
                    retail como para las grandes industrias nacionales.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    Nuestro compromiso con la excelencia nos ha permitido expandirnos y consolidarnos como un consorcio de
                    confianza, respaldado por la tradición y el trabajo del pueblo del norte peruano.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Misión, Visión, Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Reveal direction="up" delay={0.2} width="100%">
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/40 via-emerald-400/40 to-primary/40 rounded-2xl blur opacity-30 group-hover:opacity-50 transition" />
              <div className="relative h-full rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl grid place-items-center bg-gradient-to-br from-primary/15 to-emerald-500/15 ring-1 ring-white/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-white/10 to-emerald-400/20 opacity-60" />
                    <Rocket className="w-7 h-7 text-primary relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Misión</h3>
                  <p className="text-muted-foreground">
                    Proveer sal de excelente calidad para el mercado retail e industrial,
                    manteniendo los más altos estándares de producción y servicio al cliente.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.4} width="100%">
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/40 via-emerald-400/40 to-primary/40 rounded-2xl blur opacity-30 group-hover:opacity-50 transition" />
              <div className="relative h-full rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl grid place-items-center bg-gradient-to-br from-primary/15 to-emerald-500/15 ring-1 ring-white/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-white/10 to-emerald-400/20 opacity-60" />
                    <Compass className="w-7 h-7 text-primary relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Visión</h3>
                  <p className="text-muted-foreground">
                    Ser el consorcio salinero líder en el Perú, reconocido por nuestra
                    calidad, innovación y compromiso con el desarrollo sostenible.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.6} width="100%">
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/40 via-emerald-400/40 to-primary/40 rounded-2xl blur opacity-30 group-hover:opacity-50 transition" />
              <div className="relative h-full rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl grid place-items-center bg-gradient-to-br from-primary/15 to-emerald-500/15 ring-1 ring-white/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-white/10 to-emerald-400/20 opacity-60" />
                    <ShieldCheck className="w-7 h-7 text-primary relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Valores</h3>
                  <div className="text-muted-foreground space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Calidad</div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Confianza</div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Innovación</div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Tradición</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Separador sutil final */}
        <div className="relative">
          <div className="h-10 w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur" />
        </div>

        {/* (Sección de línea del tiempo ahora está al inicio de esta sección) */}
      </div>
    </section>
  );
};

export default AboutSection;