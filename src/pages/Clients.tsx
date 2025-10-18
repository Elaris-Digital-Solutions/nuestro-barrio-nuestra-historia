import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Users, Building, MapPin, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClientsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const testimonials = [
    {
      id: 1,
      company: "Empresa Pesquera del Norte",
      sector: "Sector Pesquero",
      testimonial: "Kar & Ma ha sido nuestro proveedor de sal industrial por más de 15 años. Su consistencia en calidad y tiempos de entrega nos permite mantener nuestros procesos sin interrupciones.",
      rating: 5,
      location: "Chimbote, Perú"
    },
    {
      id: 2,
      company: "Distribuidora Regional",
      sector: "Comercio Retail",
      testimonial: "La calidad de sus productos retail bajo la marca Norteñita es excepcional. Nuestros clientes valoran la autenticidad y pureza que caracterizan a esta empresa norteña.",
      rating: 5,
      location: "Trujillo, Perú"
    },
    {
      id: 3,
      company: "Textiles del Norte S.A.",
      sector: "Industria Textil",
      testimonial: "La sal industrial de Kar & Ma nos ha permitido obtener colores más intensos y homogéneos en nuestros procesos. Su granulometría controlada es perfecta para nuestras necesidades.",
      rating: 5,
      location: "Piura, Perú"
    },
    {
      id: 4,
      company: "Restaurante Gourmet Lima",
      sector: "Gastronomía",
      testimonial: "Utilizamos la sal Salina en nuestros platos gourmet. La pureza y el sabor que aporta a nuestras preparaciones es incomparable. Es la elección de los chefs profesionales.",
      rating: 5,
      location: "Lima, Perú"
    },
    {
      id: 5,
      company: "Curtiembre Industrial",
      sector: "Industria del Cuero",
      testimonial: "Para nuestros procesos de curtido, la sal de Kar & Ma es fundamental. Su calidad constante y las especificaciones técnicas precisas nos dan la confianza que necesitamos.",
      rating: 5,
      location: "Arequipa, Perú"
    },
    {
      id: 6,
      company: "Supermercados del Norte",
      sector: "Retail",
      testimonial: "Nuestros clientes prefieren los productos Kar & Ma por su calidad y precio justo. La marca Norteñita tiene una excelente aceptación en el mercado familiar.",
      rating: 5,
      location: "Chiclayo, Perú"
    }
  ];

  const clientCategories = [
    {
      title: "Industria Pesquera",
      icon: Building,
      count: "25+",
      description: "Empresas pesqueras que confían en nuestra sal para conservación",
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Restaurantes",
      icon: Users,
      count: "150+",
      description: "Restaurantes y hoteles que eligen nuestra calidad premium",
      color: "from-green-50 to-green-100"
    },
    {
      title: "Industria Textil",
      icon: Building,
      count: "30+",
      description: "Empresas textiles que utilizan nuestra sal industrial",
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Distribuidores",
      icon: MapPin,
      count: "80+",
      description: "Distribuidores a nivel nacional que comercializan nuestros productos",
      color: "from-orange-50 to-orange-100"
    }
  ];

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
              Nuestros{" "}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Clientes
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              "La confianza del pueblo del norte nos respalda"
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Más de 300 clientes activos</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Presencia nacional</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Imagen representativa del norte */}
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
              Orgullosamente Norteños
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tradición y calidad desde el corazón del norte peruano
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-primary/20 max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary-dark/60 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Tradición del Norte Peruano
                  </h3>
                  <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                    Nuestras raíces están profundamente conectadas con el norte del Perú, 
                    donde la tradición salinera se ha transmitido de generación en generación
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categorías de Clientes */}
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
              Sectores que Confían en Nosotros
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diversos sectores industriales y comerciales eligen nuestra calidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {clientCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white h-full">
                    <CardContent className="p-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{category.count}</div>
                      <div className="text-xl font-semibold text-foreground mb-3">{category.title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{category.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonios */}
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
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Testimonios reales de empresas que confían en nuestra calidad y servicio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-8 h-8 text-primary" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                    
                    <div className="border-t pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-bold text-foreground text-lg">{testimonial.company}</p>
                          <p className="text-primary font-medium">{testimonial.sector}</p>
                          <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {testimonial.location}
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas de Clientes */}
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
              Nuestra Base de Clientes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Números que reflejan la confianza depositada en nosotros
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "300+",
                label: "Clientes Activos",
                description: "En todo el país"
              },
              {
                number: "25",
                label: "Años de Experiencia",
                description: "Sirviendo al mercado"
              },
              {
                number: "15",
                label: "Regiones",
                description: "Con presencia comercial"
              },
              {
                number: "95%",
                label: "Satisfacción",
                description: "De nuestros clientes"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Únete a Nuestros Clientes Satisfechos
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Empresas del norte del Perú confían en nuestros productos y servicios, 
              desde pequeños negocios familiares hasta grandes corporaciones industriales.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                Solicitar Cotización
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105">
                Conocer Productos
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientsPage;