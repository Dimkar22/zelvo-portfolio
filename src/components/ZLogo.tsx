import { motion } from 'framer-motion';
import outlineUrl from '../assets/zelvo-z-outline.svg?url';
import gradientUrl from '../assets/zelvo-z-gradient.svg?url';

type LogoVariant = 'outline' | 'gradient';

interface ZLogoProps {
  variant?: LogoVariant;
  className?: string;
}

export const ZLogo = ({ variant = 'gradient', className = "w-24 h-24" }: ZLogoProps) => {
  const src = variant === 'outline' ? outlineUrl : gradientUrl;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {/* Используем img вместо SVG-компонента */}
      <img 
        src={src} 
        alt="ZELVO Logo" 
        className="w-full h-full object-contain"
        // Для градиентного логотипа можно добавить CSS-фильтр свечения, если он не встроен в SVG
        style={variant === 'gradient' ? { filter: 'drop-shadow(0 0 15px rgba(57, 255, 139, 0.4))' } : {}}
      />
    </motion.div>
  );
};