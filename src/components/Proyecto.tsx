/*
  Componente Proyecto Corregido (v3):
  - Corrección de Centrado (Enfoque Directo): Se han eliminado los componentes `Reveal` que envolvían los textos, ya que interferían con el centrado. Las animaciones y clases de centrado (`text-center`, `mx-auto`) se aplican ahora directamente a los elementos `motion.h2` y `motion.p` para garantizar su alineación.
  - Robustez de la Cuadrícula Flexbox: Se ha refinado el contenedor de las tarjetas para ser más explícito. Usando `flex`, `flex-wrap`, y `justify-center`, se asegura que la última fila de tarjetas se centre correctamente. Se han ajustado las clases de ancho (`w-full`, `md:w-1/2`, `lg:w-[31%]`) en las tarjetas para crear un diseño de 3 columnas en pantallas grandes que se adapta y centra correctamente en todos los casos.
*/
import { motion } from 'framer-motion';
import { Camera, Map, Drama, Heart, Clock } from 'lucide-react';

const methodologies = [
  {
    icon: Camera,
    title: 'Fotovoz',
    description: 'Los jóvenes usan la fotografía para narrar su entorno, emociones y lugares significativos.'
  },
  {
    icon: Map,
    title: 'Cartografía social',
    description: 'Elaboramos mapas que muestran cómo se habita y se imagina La Oroya.'
  },
  {
    icon: Drama,
    title: 'Teatro comunitario',
    description: 'Reflexionamos sobre las memorias y relaciones a través del cuerpo, el juego de roles y la expresión artística.'
  },
  {
    icon: Heart,
    title: 'Mapas del cuerpo',
    description: 'Una metodología sensible para explorar cómo la historia se encarna en el cuerpo.'
  },
  {
    icon: Clock,
    title: 'El tiempo en nuestras vidas',
    description: 'Actividades para reflexionar sobre los usos del tiempo y el pasado, presente y futuro de la ciudad.'
  }
];

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as any }
  }
};

const Proyecto = () => {
  return (
    <section id="proyecto" className="section section-light">
      <div className="section-content">
        <motion.h2 
          className="section-title"
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Conoce el Proyecto
        </motion.h2>
        
        <motion.p 
          className="mb-12 text-center text-lg max-w-3xl mx-auto"
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Trabajamos con jóvenes y familias de La Oroya a través de talleres y actividades 
          creativas que exploran la identidad, el territorio y los sueños para el futuro. 
          Algunas de nuestras metodologías incluyen:
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-8 my-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {methodologies.map((method) => (
            <motion.div
              key={method.title}
              className="text-center p-8 bg-white rounded-xl shadow-lg w-full sm:w-2/5 lg:w-[30%] flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0px 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="mb-4">
                <method.icon 
                  size={48} 
                  style={{ color: 'hsl(var(--primary))' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'hsl(var(--primary))' }}>
                {method.title}
              </h3>
              <p className="text-muted-foreground flex-grow">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Proyecto;