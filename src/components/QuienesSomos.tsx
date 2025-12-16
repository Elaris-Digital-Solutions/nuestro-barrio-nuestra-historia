import { motion } from 'framer-motion';
import { Users, BookOpen, Heart, Sparkles } from 'lucide-react';

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="section section-white">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ¿Quiénes somos?
      </motion.h2>
      
      <div className="section-content">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-lg leading-relaxed">
              <strong><em>“Nuestro Barrio, Nuestra Historia”</em></strong> es un proyecto interdisciplinario que desarrolla <strong>metodologías creativas y comunitarias</strong> para aportar a una <strong>planificación urbana sostenible</strong>. Partimos de la convicción de que las <strong>niñas, niños y adolescentes (NNA)</strong> poseen una <em>mirada única del territorio</em>, por lo que <strong>su voz constituye el eje y motor</strong> de nuestros procesos.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              El proyecto se trabaja desde un enfoque de <strong>memoria</strong>, <strong>ciudadanía ambiental</strong> y <strong>participación intergeneracional</strong>. Si bien los <strong>NNA</strong> son protagonistas, la participación de las <strong>familias</strong> y de <strong>personas adultas de la comunidad</strong> complementa y fortalece la <strong>construcción colectiva de significados</strong>, ampliando la comprensión del <em>entorno urbano</em>.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 text-lg leading-relaxed">
              Nuestro propósito es generar <strong>espacios</strong> donde la comunidad pueda <strong>narrar su historia</strong>, <strong>reconocer sus vínculos con el territorio</strong> y <strong>proponer caminos</strong> para un <strong>futuro más habitable</strong>. Buscamos que estas <strong>memorias</strong> dialoguen con <strong>instituciones y actores locales</strong>, contribuyendo a la <strong>toma de decisiones</strong> que promuevan <strong>ciudades más saludables, funcionales y humanas</strong>.
            </p>
          
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Users, label: 'Comunidad', color: 'var(--azul-principal)' },
            { icon: BookOpen, label: 'Investigación', color: 'var(--azul-principal)' },
            { icon: Heart, label: 'Participación', color: 'var(--azul-principal)' },
            { icon: Sparkles, label: 'Creatividad', color: 'var(--azul-principal)' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center p-6 bg-[hsl(var(--muted))] rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <item.icon size={40} style={{ color: `hsl(${item.color})` }} className="mb-3" />
              <span className="text-sm font-semibold text-center">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
