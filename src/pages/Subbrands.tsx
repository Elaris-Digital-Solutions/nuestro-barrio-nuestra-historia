import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import salinaLogo from "@/assets/salina-logo.png";

const SubbrandsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const subbrands = [
    {
      id: "salina",
      name: "Salina",
      description: "Nuestra marca premium enfocada en productos de sal de alta calidad para el mercado retail y gastronómico. Reconocida por su pureza y presentación excepcional que satisface los estándares más exigentes del mercado nacional e internacional.",
      logo: salinaLogo,
      color: "from-gray-50 to-gray-100",
      hoverColor: "from-gray-100 to-gray-200",
      textColor: "text-primary",
      borderColor: "border-gray-200",
      hoverBorderColor: "border-primary/30",
      features: [
        "Sal refinada de alta pureza",
        "Presentaciones premium",
        "Certificaciones de calidad",
        "Uso gastronómico profesional"
      ],
      products: [
        "Sal de mesa refinada",
        "Sal de cocina premium",
        "Sal parrillera gruesa",
        "Sal industrial especializada"
      ]
    },
    {
      id: "nortena",
      name: "Norteñita",
      description: "La marca que representa nuestras raíces norteñas, especializada en sal tradicional para el hogar peruano. Conecta con la cultura local y mantiene la esencia de nuestros orígenes en cada producto, llevando la tradición del norte a cada mesa.",
      logo: null,
      color: "from-primary/5 to-primary/10",
      hoverColor: "from-primary/10 to-primary/20",
      textColor: "text-primary",
      borderColor: "border-primary/20",
      hoverBorderColor: "border-primary/40",
      features: [
        "Tradición norteña auténtica",
        "Sal natural sin refinar",
        "Precios accesibles",
        "Conexión cultural local"
      ],
      products: [
        "Sal de mesa tradicional",
        "Sal de cocina familiar",
        "Sal para uso doméstico",
        "Presentaciones económicas"
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
              <Star className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Nuestras{" "}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Submarcas
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Dos marcas consolidadas, cada una con su identidad única y propósito específico
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Salina Premium</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Norteñita Tradicional</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Submarcas Section */}
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
              Marcas Consolidadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada submarca representa un segmento específico del mercado con productos especializados
            </p>
          </motion.div>

          <div className="space-y-16">
            {subbrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <Card className={`overflow-hidden border-2 ${brand.borderColor} hover:${brand.hoverBorderColor} transition-all duration-500 bg-white shadow-xl hover:shadow-2xl`}>
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Imagen/Logo Section */}
                      <div className={`bg-gradient-to-br ${brand.color} hover:${brand.hoverColor} transition-all duration-500 relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="absolute inset-0 bg-black/5 hover:bg-black/10 transition-all duration-500" />
                        
                        <div className="relative z-10 p-12 flex items-center justify-center min-h-[400px]">
                          {brand.logo ? (
                            <div className="text-center">
                              <img 
                                loading="lazy"
                                decoding="async"
                                src={brand.logo} 
                                alt={`Logo ${brand.name}`} 
                                className="w-32 h-32 object-contain mx-auto mb-6 hover:scale-110 transition-transform duration-300"
                              />
                              <div className="text-4xl font-bold text-primary">{brand.name}</div>
                            </div>
                          ) : (
                            <div className="text-center">
                              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                <span className="text-6xl font-bold text-primary">N</span>
                              </div>
                              <div className="text-4xl font-bold text-primary">{brand.name}</div>
                            </div>
                          )}
                        </div>
                        
                        <div className="absolute bottom-6 right-6">
                          <div className="w-24 h-24 bg-white/20 rounded-full blur-xl hover:bg-white/30 transition-all duration-500" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className={`p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="flex items-center gap-3 mb-6">
                          <Award className="w-8 h-8 text-primary" />
                          <h3 className="text-3xl font-bold text-primary">{brand.name}</h3>
                        </div>
                        
                        <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                          {brand.description}
                        </p>

                        {/* Características */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-primary mb-4">Características</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {brand.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Productos */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-primary mb-4">Productos Principales</h4>
                          <div className="flex flex-wrap gap-2">
                            {brand.products.map((product, productIndex) => (
                              <span
                                key={productIndex}
                                className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium group"
                        >
                          <span className="flex items-center justify-center gap-2">
                            Conocer productos
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Comparación de Submarcas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada marca está diseñada para satisfacer necesidades específicas del mercado
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
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="p-6 text-left text-lg font-semibold">Aspecto</th>
                        <th className="p-6 text-center text-lg font-semibold">Salina</th>
                        <th className="p-6 text-center text-lg font-semibold">Norteñita</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          aspect: "Segmento",
                          salina: "Premium / Gastronómico",
                          nortena: "Tradicional / Familiar"
                        },
                        {
                          aspect: "Precio",
                          salina: "Premium",
                          nortena: "Accesible"
                        },
                        {
                          aspect: "Presentación",
                          salina: "Sofisticada",
                          nortena: "Práctica"
                        },
                        {
                          aspect: "Mercado objetivo",
                          salina: "Restaurantes / Gourmet",
                          nortena: "Hogar / Familia"
                        },
                        {
                          aspect: "Características",
                          salina: "Alta pureza / Refinada",
                          nortena: "Natural / Tradicional"
                        }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-6 font-semibold text-primary">{row.aspect}</td>
                          <td className="p-6 text-center text-muted-foreground">{row.salina}</td>
                          <td className="p-6 text-center text-muted-foreground">{row.nortena}</td>
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
              Calidad Garantizada
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ambas submarcas mantienen los altos estándares de calidad que caracterizan 
              al consorcio Kar & Ma, adaptándose a las necesidades específicas de cada segmento del mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium"
              >
                Ver todos los productos
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-medium"
              >
                Solicitar cotización
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubbrandsPage;