import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { name: 'Главная', path: '/' },
  { name: 'О себе', path: '/about' },
  { name: 'Работы', path: '/works' },
  { name: 'Прайс', path: '/pricing' },
  { name: 'Контакты', path: '/contact' },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl bg-zelvo-dark/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Логотип */}
        <Link to="/" className="text-2xl font-black tracking-tighter group">
          ZELVO<span className="text-zelvo-green group-hover:animate-pulse">™</span>
        </Link>

        {/* Меню */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-zelvo-green' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-zelvo-green rounded-full shadow-[0_0_10px_#39FF8B]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};