import { motion } from 'framer-motion';
import { FileText, Users, Shield } from 'lucide-react';

const Blog = () => {
  return (
    <section id="blog" className="section section-light">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Blog
      </motion.h2>


      <div className="section-content">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-8 p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <FileText size={32} className="text-[hsl(var(--azul-principal))] flex-shrink-0 mt-1" />
              <p className="text-lg">
                Este espacio recogerá el proceso vivido por los jóvenes y las familias a lo largo
                de las seis semanas de actividades. Este blog será desarrollado por un equipo de
                jóvenes voluntarios del 4º año de secundaria de la Institución Educativa Jose Carlos
                Mariátegui, interesados en carreras afines a comunicación para el desarrollo,
                periodismo y/o trabajo social o comunitario.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              <Users size={32} className="text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
              <p className="text-lg">
                Los jóvenes participantes recibieron capacitaciones en comunicación comunitaria,
                registro fotográfico y redacción y optimización SEO, con el fin de fortalecer sus
                habilidades para documentar los aprendizajes y las experiencias de cada jornada.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-12 p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <Shield size={32} className="text-[hsl(var(--azul-principal))] flex-shrink-0 mt-1" />
              <p className="italic text-sm">
                Todas las fotografías, registros y materiales audiovisuales publicados en este
                espacio cuentan con la autorización de uso de imagen de los participantes y sus
                familias, garantizando el respeto, la ética y la protección de sus derechos.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-12 bg-gradient-to-br from-primary to-blue-400 rounded-2xl shadow-lg text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FileText size={48} className="mx-auto mb-4 opacity-80" />
            </motion.div>
            <p className="text-2xl font-bold">Próximamente: Entradas del blog</p>
            <p className="mt-2 opacity-90">Las historias comenzarán a aparecer aquí pronto</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
