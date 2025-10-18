import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-4">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="space-y-4">
            <div className="relative">
              <img
                loading="lazy"
                decoding="async"
                src={product.image || '/assets/product-placeholder.svg'}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/product-placeholder.svg';
                }}
              />
              {product.featured && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">
                    Destacado
                  </Badge>
                </div>
              )}
            </div>
            
            {/* Badges de categoría y marca */}
            <div className="flex flex-wrap gap-2">
              <Badge className={getCategoryColor(product.category)}>
                {product.category}
              </Badge>
              <Badge className={getBrandColor(product.brand)}>
                {product.brand}
              </Badge>
            </div>
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Descripción
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">
                  Tipo de Presentación
                </h4>
                <p className="text-muted-foreground">{product.presentation}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">
                  Humedad
                </h4>
                <p className="text-muted-foreground">{product.humidity}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">
                  Categoría
                </h4>
                <p className="text-muted-foreground capitalize">{product.category}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">
                  Marca
                </h4>
                <p className="text-muted-foreground">{product.brand}</p>
              </div>
            </div>

            {/* Información adicional */}
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">
                Información Técnica
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Producto de alta calidad</li>
                <li>• Cumple estándares industriales</li>
                <li>• Procesado con tecnología avanzada</li>
                <li>• Control de calidad riguroso</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
