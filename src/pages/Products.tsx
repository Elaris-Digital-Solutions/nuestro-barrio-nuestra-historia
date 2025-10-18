import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Product, products } from "@/data/products";
import ProductModal from "@/components/ProductModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Scroll al tope cuando se carga la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    { value: "all", label: "Todos" },
    { value: "industrial", label: "Industrial" },
    { value: "comercial", label: "Comercial" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section con estilo similar a la página principal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/hero-image.jpg" 
            alt="Salinas de Kar & Ma" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
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
              <Search className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Nuestros{" "}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Productos
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Descubre nuestra amplia gama de productos de sal para diferentes necesidades industriales y comerciales
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{products.length} productos disponibles</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">2 categorías principales</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Sección de filtros y búsqueda */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Explora Nuestros Productos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Utiliza los filtros y la búsqueda para encontrar exactamente lo que necesitas
            </p>
          </motion.div>

          {/* Filtros y búsqueda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Búsqueda */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Buscar productos por nombre, descripción o marca..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-primary rounded-xl"
                    />
                  </div>
                </div>

                {/* Filtros de categoría */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                    <Filter className="w-5 h-5" />
                    <span className="font-medium">Filtrar por:</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <Button
                        key={category.value}
                        variant={selectedCategory === category.value ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`transition-all duration-300 h-10 px-6 rounded-xl font-medium ${
                          selectedCategory === category.value
                            ? "bg-primary text-white shadow-lg"
                            : "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg"
                        }`}
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resultados */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 pt-6 border-t border-gray-100"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">{filteredProducts.length}</span> de{" "}
                    <span className="font-semibold">{products.length}</span> productos encontrados
                  </div>
                  {filteredProducts.length !== products.length && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                      className="text-primary hover:text-primary/80"
                    >
                      Limpiar filtros
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de productos */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Grid de productos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <Card className="h-full overflow-visible border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white flex flex-col">
                  <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    {product.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
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
                      
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3 text-sm">
                        {product.description}
                      </p>

                      <div className="space-y-2 text-xs text-muted-foreground">
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

          {/* Mensaje si no hay resultados */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 col-span-full"
            >
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-primary mb-4">No se encontraron productos</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Intenta ajustar los filtros o términos de búsqueda
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3"
              >
                Limpiar filtros
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Estadísticas */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestros Números
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conoce la amplitud de nuestra oferta de productos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl font-bold text-primary mb-4">
                {products.length}
              </div>
              <div className="text-muted-foreground text-lg font-medium">Productos Totales</div>
              <div className="text-sm text-muted-foreground mt-2">En nuestro catálogo</div>
            </div>
            <div className="text-center bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl font-bold text-primary mb-4">
                {products.filter(p => p.category === 'industrial').length}
              </div>
              <div className="text-muted-foreground text-lg font-medium">Productos Industriales</div>
              <div className="text-sm text-muted-foreground mt-2">Para uso industrial</div>
            </div>
            <div className="text-center bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl font-bold text-primary mb-4">
                {products.filter(p => p.category === 'comercial').length}
              </div>
              <div className="text-muted-foreground text-lg font-medium">Productos Comerciales</div>
              <div className="text-sm text-muted-foreground mt-2">Para uso comercial</div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default ProductsPage;