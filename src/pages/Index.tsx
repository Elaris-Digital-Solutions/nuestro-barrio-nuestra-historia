import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuienesSomosSection from "@/components/QuienesSomosSection";
import ConoceElProyecto from "@/components/ConoceElProyecto";
import Stories from "@/components/Stories";
import ExposicionFotografica from "@/components/ExposicionFotografica";
import AliadosQueSuman from "@/components/AliadosQueSuman";
import NuestroEquipo from "@/components/NuestroEquipo";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const Index = () => {
  return (
    <motion.div className="min-h-screen" initial="hidden" animate="visible" variants={fadeIn()}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <motion.main variants={fadeIn()}>
        <Hero />
        <QuienesSomosSection />
        <ConoceElProyecto />
        <Stories />
        <ExposicionFotografica />
        <AliadosQueSuman />
        <NuestroEquipo />
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default Index;
