import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import salinaLogo from "@/assets/salina-logo.png";

const SubbrandsSection = () => {
  const subbrands = [
    {
      id: "salina",
      name: "Salina",
      description: "Nuestra marca premium enfocada en productos de sal de alta calidad para el mercado retail y gastronómico. Reconocida por su pureza y presentación excepcional que satisface los estándares más exigentes.",
      logo: salinaLogo,
      color: "from-gray-50 to-gray-100",
      hoverColor: "from-gray-100 to-gray-200",
      textColor: "text-primary",
      borderColor: "border-gray-200",
      hoverBorderColor: "border-primary/30"
    },
    {
      id: "nortena",
      name: "Norteñita",
      description: "La marca que representa nuestras raíces norteñas, especializada en sal tradicional para el hogar peruano. Conecta con la cultura local y mantiene la esencia de nuestros orígenes en cada producto.",
      logo: null,
      color: "from-primary/5 to-primary/10",
      hoverColor: "from-primary/10 to-primary/20",
      textColor: "text-primary",
      borderColor: "border-primary/20",
      hoverBorderColor: "border-primary/40"
    }
  ];

  return (
    <section id="submarcas" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:30px_30px]" />
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
            Nuestras Submarcas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Marcas consolidadas dentro del consorcio Kar & Ma, cada una con su identidad única
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {subbrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className={`h-full overflow-hidden border-2 ${brand.borderColor} group-hover:${brand.hoverBorderColor} transition-all duration-500 bg-white shadow-lg hover:shadow-2xl`}>
                <div className={`h-48 bg-gradient-to-br ${brand.color} group-hover:${brand.hoverColor} transition-all duration-500 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-500" />
                  
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {brand.logo ? (
                        <img 
                          loading="lazy"
                          decoding="async"
                          src={brand.logo} 
                          alt={`Logo ${brand.name}`} 
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                          N
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6">
                    <div className="w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-500" />
                  </div>
                </div>

                <CardContent className="p-8">
                  <motion.h3 
                    className={`text-3xl font-bold ${brand.textColor} mb-4 group-hover:text-primary transition-colors duration-300`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {brand.name}
                  </motion.h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {brand.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className={`w-full border-2 ${brand.borderColor} ${brand.textColor} hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Conocer más
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ambas submarcas mantienen los altos estándares de calidad que caracterizan 
            al consorcio Kar & Ma, adaptándose a las necesidades específicas de cada segmento del mercado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SubbrandsSection;