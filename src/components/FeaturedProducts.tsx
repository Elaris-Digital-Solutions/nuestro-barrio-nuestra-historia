import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Salina Sal Yodada 1kg",
      category: "Retail Premium",
      description: "Sal refinada con yodo, ideal para el consumo familiar diario.",
      image: "/src/assets/salina-sal-yodada-1kg.png",
      features: ["Yodada", "Refinada", "1kg"],
      featured: true
    },
    {
      id: 2,
      name: "Sal Industrial Grado A",
      category: "Industrial",
      description: "Sal de alta pureza para procesos industriales y manufactureros.",
      image: "/assets/industrial-facility.jpg",
      features: ["99.5% Pureza", "Granulometría controlada", "Bolsas 50kg"],
      featured: false
    },
    {
      id: 3,
      name: "Sal Marina Natural",
      category: "Retail Gourmet",
      description: "Sal marina natural sin refinar, perfecta para gastronomía.",
      image: "/src/assets/north-peru.jpg",
      features: ["Natural", "Sin refinar", "Gourmet"],
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
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
            Productos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra selección premium de productos de sal para cada necesidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <motion.div
                initial={{ y: 0, opacity: 0.25 }}
                whileInView={{ opacity: 0.3 }}
                whileHover={{ y: -4, opacity: 0.45 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 via-emerald-400/20 to-primary/20 rounded-3xl blur-sm md:blur"
              />
              <Card className="relative h-full overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={product.image || '/assets/product-placeholder.svg'}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/product-placeholder.svg';
                    }}
                  />
                  <img
                    src={product.image || '/assets/product-placeholder.svg'}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/product-placeholder.svg';
                    }}
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        Destacado
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-sm font-medium text-primary">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1 min-h-[200px]">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 w-full">
                    <Button 
                      variant="outline"
                      style={{ borderColor: '#22c55e', color: '#16a34a' }}
                      className="w-full border-2 hover:bg-green-500 hover:text-white transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-2 py-2 font-medium">
                        Ver detalles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
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
          <Button 
            size="lg"
            className="bg-[#005C2C] hover:bg-[#005C2C]/90 text-white px-8 py-3 text-lg font-medium"
          >
            Ver todos los productos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
