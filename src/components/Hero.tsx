import { motion } from "framer-motion";

const heroVideo = "/assets/video-hero.mov";

const Hero = () => {
  return (
    <motion.section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } }
      }}
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          initial={{ scale: 1.1 }}
          animate={{ scale: 1, transition: { duration: 1.5, ease: "easeOut" } }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center" />
    </motion.section>
  );
};

export default Hero;
