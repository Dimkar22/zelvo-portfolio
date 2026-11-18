import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { OrderModal } from '../components/OrderModal';

const packages = [
  {
    name: 'СТАРТ',
    price: 'от 3 000 ₽',
    features: ['Логотип (2 варианта)', 'Подбор шрифтов и цветов', 'Визитка / Аватарка', 'Исходники (Figma/AI)', 'Срок: 3-5 дней'],
    popular: false,
  },
  {
    name: 'ПРОЕКТ',
    price: 'от 8 000 ₽',
    features: ['Фирменный стиль (5-7 носителей)', 'Оформление соцсетей (VK/TG)', 'Презентация бренда', 'Приоритетная поддержка', 'Срок: 7-10 дней'],
    popular: true,
  },
  {
    name: 'VELTO STYLE',
    price: 'Договорная',
    features: ['Полный ребрендинг приложения', 'UI Kit для разработки', 'Моушн-элементы интерфейса', 'Личное сопровождение', 'Особые условия для стартапов'],
    popular: false,
  },
];

export const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState<{name: string, price: string} | null>(null);

  return (
    <section className="min-h-screen px-6 py-32 max-w-7xl mx-auto relative">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black text-center mb-6 tracking-tight"
      >
        ИНВЕСТИЦИЯ В <span className="text-zelvo-green">БРЕНД</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-20 text-lg"
      >
        Прозрачные цены без скрытых платежей. Выберите пакет, который соответствует вашим задачам.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-2xl border backdrop-blur-sm flex flex-col ${
              pkg.popular 
                ? 'bg-zelvo-green/5 border-zelvo-green/50 shadow-[0_0_40px_rgba(57,255,139,0.1)]' 
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zelvo-green text-zelvo-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Популярный выбор
              </div>
            )}
            
            <h3 className="text-2xl font-black tracking-tight mb-2">{pkg.name}</h3>
            <p className="text-3xl font-bold text-zelvo-green mb-8">{pkg.price}</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {pkg.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-zelvo-green shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => setSelectedPackage({ name: pkg.name, price: pkg.price })}
              className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                pkg.popular
                  ? 'bg-zelvo-green text-zelvo-dark hover:shadow-[0_0_30px_rgba(57,255,139,0.4)]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Выбрать пакет <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-gray-500 mt-12 text-sm"
      >
        Нужен индивидуальный подход?{' '}
        <a 
          href="https://t.me/Dimkar22?text=Привет!%20Хочу%20обсудить%20индивидуальный%20проект" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-zelvo-green hover:underline"
        >
          Обсудим ваш проект
        </a>
      </motion.p>

      <OrderModal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
        packageName={selectedPackage?.name || ''} 
        price={selectedPackage?.price || ''} 
      />
    </section>
  );
};