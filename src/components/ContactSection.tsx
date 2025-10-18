import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_PHONE } from "@/config";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: ""
  });
  const { toast } = useToast();

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos contactaremos contigo pronto.",
    });
    setFormData({ nombre: "", empresa: "", email: "", mensaje: "" });
  }, [toast]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  return (
    <section id="contacto" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Contacto
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Conecta con nosotros para soluciones empresariales en sal
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Formulario Empresarial
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="empresa">Empresa *</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-[120px]"
                      placeholder="Describe tus necesidades de sal retail o industrial..." />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Enviar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ubicación</h4>
                    <p className="text-muted-foreground">
                      Planta Industrial<br />
                      Región Norte del Perú<br />
                      Zona Industrial Salinera
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-primary underline hover:text-primary/80"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mt-6">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Teléfono</h4>
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="text-primary underline hover:text-primary/80"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-primary max-w-3xl mx-auto leading-relaxed">
            Nos comprometemos a responder todas las solicitudes de cotización en un máximo de 24 horas hábiles. 
            Nuestro equipo comercial analizará sus requerimientos específicos para ofrecerle la mejor propuesta.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;