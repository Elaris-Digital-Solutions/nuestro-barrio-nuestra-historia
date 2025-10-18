import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Factory } from "lucide-react";

const SegmentCards = () => {
  const segments = [
    {
      id: "retail",
      title: "Retail",
      description: "Productos de sal premium para el consumidor final, con presentaciones innovadoras y calidad excepcional.",
      icon: Package,
      image: "/assets/retail-products.jpg",
      cta: "Ver productos retail",
      gradient: "from-blue-50 to-blue-100",
      hoverGradient: "from-blue-100 to-blue-200"
    },
    {
      id: "industrial",
      title: "Industrial",
      description: "Soluciones industriales de sal para procesos manufactureros, con especificaciones técnicas precisas.",
      icon: Factory,
      image: "/assets/industrial-facility.jpg",
      cta: "Ver soluciones industriales",
      gradient: "from-slate-50 to-slate-100",
      hoverGradient: "from-slate-100 to-slate-200"
    }
  ];

  return (
    <section className="segment-cards py-16 -mt-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {segments.map((segment, index) => {
            const IconComponent = segment.icon;
            return (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50">
                  <div className="h-48 relative overflow-hidden">
                    {/* Imagen de fondo */}
                    <img 
                      src={segment.image} 
                      alt={segment.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent group-hover:from-primary/30 group-hover:via-primary/20 transition-all duration-500" />
                    {/* Icono */}
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    {/* Elemento decorativo */}
                    <div className="absolute bottom-6 right-6">
                      <div className="w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-500" />
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <motion.h3 
                      className="text-2xl font-bold text-primary mb-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      {segment.title}
                    </motion.h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {segment.description}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="group/btn w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {segment.cta}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SegmentCards;
