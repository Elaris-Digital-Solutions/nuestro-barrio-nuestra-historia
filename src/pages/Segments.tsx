import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Factory, Users, Building, Utensils, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SegmentsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const segments = [
    {
      id: "comercial",
      title: "Comercial",
      subtitle: "Para el consumidor final",
      description: "Productos de sal premium para el consumidor final, con presentaciones innovadoras y calidad excepcional que satisface las necesidades del hogar y la gastronomía profesional.",
      icon: Package,
      image: "/assets/retail-products.jpg",
      color: "from-green-50 to-green-100",
      hoverColor: "from-green-100 to-green-200",
      features: [
        "Sal refinada de mesa",
        "Sal de cocina premium",
        "Sal parrillera gruesa",
        "Presentaciones familiares",
        "Envases ergonómicos",
        "Certificaciones alimentarias"
      ],
      applications: [
        "Uso doméstico diario",
        "Restaurantes y hoteles",
        "Panaderías y pastelerías",
        "Industria alimentaria menor"
      ],
      benefits: [
        "Alta pureza y calidad",
        "Presentaciones atractivas",
        "Precios competitivos",
        "Disponibilidad nacional"
      ]
    },
    {
      id: "industrial",
      title: "Industrial",
      subtitle: "Para procesos manufactureros",
      description: "Soluciones industriales de sal para procesos manufactureros, con especificaciones técnicas precisas que garantizan la eficiencia y calidad en los procesos productivos industriales.",
      icon: Factory,
      image: "/assets/industrial-facility.jpg",
      color: "from-blue-50 to-blue-100",
      hoverColor: "from-blue-100 to-blue-200",
      features: [
        "Sal industrial grado A",
        "Granulometría controlada",
        "Pureza garantizada 99.5%",
        "Presentaciones a granel",
        "Sacos de 25 y 50 kg",
        "Especificaciones técnicas"
      ],
      applications: [
        "Industria pesquera",
        "Industria textil",
        "Curtidurías",
        "Tratamiento de aguas",
        "Procesos químicos",
        "Alimentación animal"
      ],
      benefits: [
        "Especificaciones técnicas precisas",
        "Suministro constante",
        "Precios competitivos",
        "Soporte técnico especializado"
      ]
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
              <Building className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Nuestros{" "}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Segmentos
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Dos líneas de negocio especializadas para atender diferentes mercados con soluciones específicas
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Segmento Comercial</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Segmento Industrial</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Segmentos Section */}
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
              Segmentos Especializados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada segmento cuenta con procesos de producción especializados y control de calidad adaptado
            </p>
          </motion.div>

          <div className="space-y-20">
            {segments.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <motion.div
                  key={segment.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="max-w-7xl mx-auto"
                >
                  <Card className="overflow-hidden border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-500">
                    <CardContent className="p-0">
                      <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                        {/* Imagen Section */}
                        <div className={`relative h-96 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                          <img 
                            src={segment.image} 
                            alt={segment.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent hover:from-primary/30 hover:via-primary/20 transition-all duration-500" />
                          
                          {/* Icono flotante */}
                          <div className="absolute top-8 left-8">
                            <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-8 h-8 text-primary" />
                            </div>
                          </div>
                          
                          {/* Badge del segmento */}
                          <div className="absolute bottom-8 left-8">
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                              <span className="text-sm font-bold text-primary uppercase tracking-wide">
                                {segment.subtitle}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                          <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-4xl font-bold text-primary">{segment.title}</h3>
                          </div>
                          
                          <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                            {segment.description}
                          </p>

                          {/* Características */}
                          <div className="mb-8">
                            <h4 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                              <Package className="w-5 h-5" />
                              Productos Principales
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {segment.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                  <span className="text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Aplicaciones */}
                          <div className="mb-8">
                            <h4 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                              <Utensils className="w-5 h-5" />
                              Aplicaciones
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {segment.applications.map((application, appIndex) => (
                                <span
                                  key={appIndex}
                                  className="bg-primary/10 text-primary text-sm px-3 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors"
                                >
                                  {application}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Beneficios */}
                          <div className="mb-8">
                            <h4 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                              <Truck className="w-5 h-5" />
                              Beneficios
                            </h4>
                            <div className="space-y-2">
                              {segment.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center gap-3">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                  <span className="text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium group flex-1"
                            >
                              <span className="flex items-center justify-center gap-2">
                                Ver productos {segment.title.toLowerCase()}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </span>
                            </Button>
                            <Button 
                              variant="outline"
                              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 font-medium"
                            >
                              Solicitar cotización
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparación Section */}
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
              Comparación de Segmentos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diferencias clave entre nuestros segmentos comercial e industrial
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="p-6 text-left text-lg font-semibold">Aspecto</th>
                        <th className="p-6 text-center text-lg font-semibold">
                          <div className="flex items-center justify-center gap-2">
                            <Package className="w-5 h-5" />
                            Comercial
                          </div>
                        </th>
                        <th className="p-6 text-center text-lg font-semibold">
                          <div className="flex items-center justify-center gap-2">
                            <Factory className="w-5 h-5" />
                            Industrial
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          aspect: "Cliente objetivo",
                          comercial: "Consumidor final, restaurantes",
                          industrial: "Empresas manufactureras"
                        },
                        {
                          aspect: "Presentación",
                          comercial: "Bolsas 500g, 1kg",
                          industrial: "Sacos 25kg, 50kg"
                        },
                        {
                          aspect: "Pureza",
                          comercial: "Alta pureza alimentaria",
                          industrial: "99.5% pureza técnica"
                        },
                        {
                          aspect: "Granulometría",
                          comercial: "Fina, media, gruesa",
                          industrial: "Controlada según proceso"
                        },
                        {
                          aspect: "Volumen de venta",
                          comercial: "Menor volumen",
                          industrial: "Alto volumen"
                        },
                        {
                          aspect: "Precio",
                          comercial: "Premium por presentación",
                          industrial: "Competitivo por volumen"
                        }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-6 font-semibold text-primary">{row.aspect}</td>
                          <td className="p-6 text-center text-muted-foreground">{row.comercial}</td>
                          <td className="p-6 text-center text-muted-foreground">{row.industrial}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Estadísticas */}
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
              Nuestro Alcance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Números que demuestran nuestro compromiso con ambos segmentos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                number: "500+",
                label: "Clientes Comerciales",
                description: "Restaurantes y distribuidores"
              },
              {
                icon: Factory,
                number: "100+",
                label: "Clientes Industriales",
                description: "Empresas manufactureras"
              },
              {
                icon: Package,
                number: "15",
                label: "Productos Comerciales",
                description: "Diferentes presentaciones"
              },
              {
                icon: Truck,
                number: "12",
                label: "Productos Industriales",
                description: "Especificaciones técnicas"
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
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
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SegmentsPage;