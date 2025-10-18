import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Filter } from "lucide-react";
import { Product, products } from "@/data/products";
import ProductModal from "./ProductModal";

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const navigate = useNavigate();

  const categories = [
    { value: "all", label: "Todos" },
    { value: "industrial", label: "Industrial" },
    { value: "comercial", label: "Comercial" }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === "all" || product.category === selectedCategory
  );

  const displayedProducts = filteredProducts.slice(0, 3);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'industrial':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'comercial':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getBrandColor = (brand: string) => {
    switch (brand) {
      case 'SALINA':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'COSTEÑITA':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="productos" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Amplia gama de productos de sal para diferentes necesidades industriales y de consumo
          </p>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filtrar por categoría:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className={`transition-all duration-300 ${
                selectedCategory === category.value
                  ? "bg-primary text-white"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Grid de productos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <motion.div
                initial={{ y: 0, opacity: 0.25 }}
                whileInView={{ opacity: 0.35 }}
                whileHover={{ y: -4, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="pointer-events-none absolute -inset-0.5 z-0 bg-gradient-to-br from-primary/20 via-emerald-400/20 to-primary/20 rounded-3xl blur-sm md:blur"
              />
              <Card className="relative z-10 h-full overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  {product.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        Destacado
                      </div>
                    </div>
                  )}
                  
                  <img
                    loading="lazy"
                    decoding="async"
                    src={product.image || '/assets/product-placeholder.svg'}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/product-placeholder.svg';
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Badge className={getCategoryColor(product.category)}>
                      {product.category}
                    </Badge>
                    <Badge className={getBrandColor(product.brand)}>
                      {product.brand}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1 min-h-[200px]">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span className="font-medium">Presentación:</span>
                        <span className="text-right">{product.presentation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Humedad:</span>
                        <span>{product.humidity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 w-full">
                    <Button 
                      className="w-full bg-[#005C2C] hover:bg-[#005C2C]/90 text-white transition-all duration-300"
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

        {/* Botón para ver más productos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            onClick={() => navigate('/productos')}
            className="bg-[#005C2C] hover:bg-[#005C2C]/90 text-white px-8 py-3 text-lg font-medium"
          >
            Ver todos los productos
          </Button>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {products.length}
            </div>
            <div className="text-muted-foreground">Productos Totales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {products.filter(p => p.category === 'industrial').length}
            </div>
            <div className="text-muted-foreground">Productos Industriales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {products.filter(p => p.category === 'comercial').length}
            </div>
            <div className="text-muted-foreground">Productos Comerciales</div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductsSection;
