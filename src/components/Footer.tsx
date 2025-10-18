import { CONTACT_EMAIL, CONTACT_PHONE } from "@/config";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Linkedin, ShieldCheck, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = "Hola, soy una empresa interesada en sus productos de sal. Me gustaría recibir información sobre precios y disponibilidad.";
    const phoneNumber = "51999999999";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleQuoteClick = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <section className="py-12 border-b border-primary-foreground/20">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para trabajar con nosotros?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">Únete a las empresas que confían en la calidad y tradición de Kar & Ma</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleQuoteClick} size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-medium">
                <span className="flex items-center gap-2">Solicitar cotización<ArrowRight className="w-5 h-5" /></span>
              </Button>
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-medium">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <section className="py-12">
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 gap-10">
            {/* Brand */}
            <div className="xl:col-span-2">
              <div className="flex items-center mb-6">
                <img src="/assets/kar-ma-logo.png" alt="Kar & Ma" className="h-16 w-auto object-contain filter brightness-0 invert" />
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-lg leading-relaxed text-base md:text-lg">
                Consorcio peruano con 25 años de experiencia en la producción de sal retail e industrial, respaldado por la confianza del pueblo del norte.
              </p>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /><span>Planta Industrial - Región Norte del Perú</span></div>
                <div className="flex items-center gap-3"><Phone className="w-5 h-5" /><span>{CONTACT_PHONE || '+51 999 999 999'}</span></div>
                <div className="flex items-center gap-3"><Mail className="w-5 h-5" /><span>{CONTACT_EMAIL || 'contacto@karma.com.pe'}</span></div>
              </div>
              {/* Social (oculto por ahora) */}
            </div>

            {/* Productos */}
            <nav aria-label="Productos">
              <h3 className="text-lg md:text-xl font-bold mb-6">Productos</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><button onClick={() => (window.location.href = '/productos')} className="hover:text-white transition-colors text-left">Catálogo completo</button></li>
                <li><span className="opacity-70">Industrial (Sal fina, extra fina, pesca)</span></li>
                <li><span className="opacity-70">Comercial (Mesa, cocina, parrillera)</span></li>
              </ul>
            </nav>

            {/* Empresa */}
            <nav aria-label="Empresa">
              <h3 className="text-lg md:text-xl font-bold mb-6">Empresa</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><button onClick={() => (window.location.href = '/nosotros')} className="hover:text-white transition-colors text-left">Nosotros</button></li>
                <li><button onClick={() => (window.location.href = '/submarcas')} className="hover:text-white transition-colors text-left">Marcas</button></li>
                <li><button onClick={() => (window.location.href = '/segmentos')} className="hover:text-white transition-colors text-left">Segmentos</button></li>
                <li><button onClick={() => (window.location.href = '/cotizacion')} className="hover:text-white transition-colors text-left">Cotización</button></li>
              </ul>
            </nav>

            {/* Legal y certificaciones */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-6">Legal y Certificaciones</h3>
              <ul className="space-y-3 text-primary-foreground/80 mb-4">
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><FileText className="w-4 h-4" />Política de Privacidad</li>
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><ShieldCheck className="w-4 h-4" />Términos de Servicio</li>
              </ul>
              <div className="flex items-center gap-4">
                <img loading="lazy" decoding="async" src="/assets/haccp.png" alt="HACCP" className="h-10 w-auto object-contain bg-white/10 rounded-md p-1" />
                <img loading="lazy" decoding="async" src="/assets/bpm.png" alt="BPM" className="h-10 w-auto object-contain bg-white/10 rounded-md p-1" />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Bar */}
        <section className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-primary-foreground/70 text-center md:text-left">© {currentYear} Kar & Ma. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-primary-foreground/60">
              <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidad</span>
              <span className="hover:text-white transition-colors cursor-pointer">Términos de Servicio</span>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
