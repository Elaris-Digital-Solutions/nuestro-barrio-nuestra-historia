import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart, Users, Calendar, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/hero-image.jpg" 
            alt="Salinas de Kar & Ma" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary-dark/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_4px_4px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:50px_50px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Sobre{" "}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Nosotros
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              25 años de tradición salinera del norte peruano, construyendo confianza y calidad
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Fundada en los años 90</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Tradición norteña</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mensaje de la Gerente General */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Bienvenidos a KAR&MA SAC
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mensaje de nuestra Gerente General
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                      Con profundo orgullo, compartimos con ustedes nuestros 25 años, una edad cargada de significado, 
                      y que invita a reflexionar sobre nuestros orígenes, nuestras ejecutorias y nuestro porvenir. 
                      La imagen de gran empresa que proyectamos hoy, que contrasta con la pequeña y visionaria empresa 
                      del inicio que va de la mano del esfuerzo de nuestra gente.
                    </p>
                    <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                      KAR & MA es una empresa peruana comprometida con llevar la mejor calidad de sal, las cuales, 
                      están certificados por el Ministerio de Salud y Digesa; a la vez teniendo como respaldo el 
                      sistema HACCP.
                    </p>
                    <div className="flex flex-col items-end">
                      <p className="text-xl font-bold text-primary mb-1">Carmen Lam</p>
                      <p className="text-muted-foreground">Gerente General</p>
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-6 items-center">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      src="/assets/gerenteKarma.jpeg"
                      alt="Carmen Lam - Gerente General"
                      className="w-full max-w-[300px] h-auto rounded-lg shadow-xl border-4 border-primary/20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nuestra Historia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Una trayectoria de 25 años en la industria salinera peruana
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-6">
                      Desde el Norte del Perú
                    </h3>
                    <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                      Durante 25 años, Kar & Ma S.A.C. ha sido un pilar fundamental en la industria salinera peruana. 
                      Nacimos en el norte del país con la visión de proporcionar sal de la más alta calidad tanto para el consumo 
                      retail como para las grandes industrias nacionales.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Nuestro compromiso con la excelencia nos ha permitido expandirnos y consolidarnos como un consorcio de 
                      confianza, respaldado por la tradición y el trabajo del pueblo del norte peruano.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl p-8 text-center">
                      <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                      <div className="text-4xl font-bold text-primary mb-2">25</div>
                      <div className="text-lg font-medium text-primary">Años de experiencia</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            loading="lazy"
            decoding="async"
            src="/assets/north-peru.jpg" 
            alt="Salinas de Kar & Ma" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Quiénes Somos
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-xl bg-white/95 backdrop-blur">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Nuestra Esencia</h3>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    Somos una empresa peruana con 25 años de experiencia en producción y comercialización 
                    de sal para consumo humano, industrial y animal, con altos estándares de calidad 
                    acordes a las necesidades de nuestros clientes.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Somos la única empresa del norte del Perú que cuenta con terrenos propios salineros 
                    donde la acción del sol y de los vientos favorece la evaporación del agua de mar 
                    hasta la saturación y cristalización de la sal marina siendo posteriormente cultivada 
                    para obtener el 99.9% de pureza.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-xl bg-white/95 backdrop-blur">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Nuestras Marcas</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-3">SAL SALINA</h4>
                      <p className="text-muted-foreground">
                        Sal con 0.5% máx de humedad, secada y esterilizada en hornos a 120-140°C, 
                        en las líneas de consumo humano e industrial.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-3">SAL COSTEÑITA</h4>
                      <p className="text-muted-foreground">
                        Sal con 2.5% máx de humedad, a la que se le aplica el método de secado u oreo natural, 
                        en las 3 líneas de sal de consumo humano, industrial y animal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nuestros Pilares
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Los valores que nos guían en cada proceso y decisión empresarial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Misión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Proveer sal de excelente calidad para el mercado retail e industrial, 
                    manteniendo los más altos estándares de producción y servicio al cliente, 
                    contribuyendo al desarrollo de la industria nacional.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Visión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser el consorcio salinero líder en el Perú, reconocido por nuestra 
                    calidad, innovación y compromiso con el desarrollo sostenible, 
                    expandiendo nuestra presencia a nivel internacional.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
                  <div className="text-muted-foreground leading-relaxed space-y-2">
                    <p><strong className="text-primary">Calidad:</strong> En cada proceso y producto</p>
                    <p><strong className="text-primary">Confianza:</strong> En cada relación comercial</p>
                    <p><strong className="text-primary">Innovación:</strong> En cada solución</p>
                    <p><strong className="text-primary">Tradición:</strong> Respetando nuestras raíces</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Línea del tiempo */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              25 Años de Trayectoria
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hitos importantes en nuestra historia empresarial
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "1990s",
                  title: "Fundación",
                  description: "Fundación del grupo en el norte del Perú con la visión de producir sal de calidad"
                },
                {
                  year: "2000s",
                  title: "Expansión",
                  description: "Expansión de operaciones y desarrollo de las submarcas Salina y Norteñita"
                },
                {
                  year: "2010s",
                  title: "Consolidación",
                  description: "Consolidación en el mercado industrial y retail a nivel nacional"
                },
                {
                  year: "2020s",
                  title: "Liderazgo",
                  description: "Liderazgo nacional y reconocimiento del mercado como empresa confiable"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group"
                >
                  <div className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-lg min-w-[120px] text-center group-hover:scale-105 transition-transform duration-300">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Política de la Empresa */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Política de la Empresa
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                      Es política de KAR & MA SAC. asegurar la satisfacción plena de las necesidades 
                      de sus clientes y consumidores, entregándoles productos sanos, procesados con 
                      tecnología apropiada y con personal competente y comprometido con la mejora 
                      continua, conduciendo sus operaciones de una manera segura y preservando la 
                      salud ocupacional de sus colaboradores.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4 bg-primary/5 rounded-xl"
                      >
                        <div className="w-20 h-20 mb-4">
                          <img
                            loading="lazy"
                            decoding="async"
                            src="/assets/haccp.png"
                            alt="Certificación HACCP"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-primary font-semibold">Certificación HACCP</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4 bg-primary/5 rounded-xl"
                      >
                        <div className="w-20 h-20 mb-4">
                          <img
                            loading="lazy"
                            decoding="async"
                            src="/assets/bpm.png"
                            alt="Certificación BPM"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-primary font-semibold">Certificación BPM</span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/assets/instalaciones.jpg"
                      alt="Instalaciones de Kar & Ma"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Orgullosamente Norteños
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestras raíces están profundamente conectadas con el norte del Perú
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl p-8 text-center">
                      <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                      <div className="text-2xl font-bold text-primary mb-2">Norte del Perú</div>
                      <div className="text-lg font-medium text-primary">Zona Industrial Salinera</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-6">
                      Tradición del Norte
                    </h3>
                    <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                      El norte del Perú es reconocido por su tradición salinera y la calidad de sus productos. 
                      Nuestra ubicación estratégica nos permite acceder a las mejores fuentes de sal marina 
                      y mantener los estándares de calidad que nos caracterizan.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      La confianza del pueblo del norte nos respalda y nos impulsa a seguir creciendo, 
                      manteniendo siempre nuestro compromiso con la excelencia y la tradición.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
