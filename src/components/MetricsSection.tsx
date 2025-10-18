import { motion, useInView, type Variants, Easing } from "framer-motion";
import { useRef } from "react";
import { Factory, MapPin, Scale, Users } from "lucide-react";

const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const metrics = [
    {
      number: "25",
      label: "Años de experiencia",
      description: "Tradición y confianza en el mercado peruano",
      icon: Factory
    },
    {
      number: "100%",
      label: "Cobertura nacional",
      description: "Presencia en todo el territorio peruano",
      icon: MapPin
    },
    {
      number: "50K+",
      label: "Toneladas anuales",
      description: "Capacidad de producción industrial",
      icon: Scale
    },
    {
      number: "Confianza",
      label: "Asegurada",
      description: "Calidad garantizada en cada producto que entregamos",
      icon: Users
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
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
            Números que respaldan nuestra experiencia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            25 años de crecimiento sostenido y compromiso con la excelencia
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-primary/20">
                  <div className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className={`font-bold text-primary mb-2 ${
                      metric.number === "Confianza" 
                        ? "text-2xl md:text-3xl" 
                        : "text-4xl md:text-5xl"
                    }`}
                  >
                    {metric.number}
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {metric.label}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
