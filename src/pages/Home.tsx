import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { ZLogo } from '../components/ZLogo';
import { Link } from 'react-router-dom'; // ✅ Импорт для переходов

export const Home = () => {
  // ✅ ВОССТАНОВЛЕННЫЕ ПЕРЕМЕННЫЕ (Именно их не хватало!)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) - 0.5);
      mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative flex flex-col justify-center min-h-screen px-6 overflow-hidden">
      {/* Фоновые градиенты */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-zelvo-dark/80 backdrop-blur-3xl">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-zelvo-green/10 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, 60, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Контент с 3D-эффектом */}
      <motion.div 
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        {/* Логотип */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <ZLogo variant="gradient" className="w-28 h-28 md:w-36 md:h-36" />
        </motion.div>

        {/* Текст */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-zelvo-green w-5 h-5" />
            <span className="text-zelvo-green font-medium tracking-widest text-xs uppercase">Creative Studio</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
            CREATE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zelvo-green via-emerald-400 to-teal-300 animate-pulse-slow">
              VISION.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12">
            Графический дизайн, который выделяется. Мы создаем визуальные смыслы для брендов, 
            которые не боятся быть замеченными.
          </p>

          {/* ✅ РАБОЧИЕ КНОПКИ С ПЕРЕХОДАМИ */}
          <div className="flex flex-wrap gap-4">
            <Link to="/works">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-zelvo-green text-zelvo-dark font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(57,255,139,0.3)] hover:shadow-[0_0_40px_rgba(57,255,139,0.6)] transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Смотреть работы <ArrowRight size={20} />
                </span>
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 rounded-xl font-medium backdrop-blur-md hover:border-zelvo-green/50 transition-all"
              >
                Обсудить проект
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Декоративный круг УБРАН по твоему запросу */}
    </section>
  );
};