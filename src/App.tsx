import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Subbrands from "./pages/Subbrands";
import Segments from "./pages/Segments";
import Clients from "./pages/Clients";
import Quote from "./pages/Quote";
import { Toaster } from "@/components/ui/toaster";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/submarcas" element={<Subbrands />} />
      <Route path="/segmentos" element={<Segments />} />
      <Route path="/clientes" element={<Clients />} />
      <Route path="/cotizacion" element={<Quote />} />
    </Routes>
    <Toaster />
  </Router>
);

export default App;
