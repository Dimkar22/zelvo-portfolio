import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact'; // ✅ 1. Импортируем страницу контактов

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ 2. Добавляем маршрут */}
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.PROD ? '/zelvo-portfolio' : '/'}>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  );
}