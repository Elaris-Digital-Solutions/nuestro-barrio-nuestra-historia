import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuienesSomosSection from "@/components/QuienesSomosSection";
import ConoceElProyecto from "@/components/ConoceElProyecto";
import IncidenciaSection from "@/components/IncidenciaSection";
import Stories from "@/components/Stories";
import ExposicionFotografica from "@/components/ExposicionFotografica";
import Collaborators from "@/components/Collaborators";
import AliadosQueSuman from "@/components/AliadosQueSuman";
import NuestroEquipo from "@/components/NuestroEquipo";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeIn, pageTransition } from "@/lib/motion";

const Index = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <Header />
      <motion.main variants={fadeIn()}>
        <Hero />
        <QuienesSomosSection />
        <ConoceElProyecto />
        <IncidenciaSection />
        <Stories />
        <ExposicionFotografica />
        <Collaborators />
        <AliadosQueSuman />
        <NuestroEquipo />
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default Index;
