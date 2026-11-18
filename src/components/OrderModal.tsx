// src/components/OrderModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, MessageCircle, Mail } from 'lucide-react'; // ✅ Добавили Mail

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  price: string;
}

export const OrderModal = ({ isOpen, onClose, packageName, price }: OrderModalProps) => {
  if (!isOpen) return null;

  // Формируем текст сообщения для Telegram
  const tgMessage = `Привет! Хочу заказать пакет ${packageName} (${price}).`;
  const tgLink = `https://t.me/Dimkar22?text=${encodeURIComponent(tgMessage)}`;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
          className="bg-zelvo-gray border border-white/10 rounded-2xl max-w-lg w-full p-8 relative overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Декоративная линия */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zelvo-green to-transparent opacity-60" />
          
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
          
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="text-zelvo-green w-8 h-8" />
            <h2 className="text-2xl font-black">Оформление заказа</h2>
          </div>
          
          <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5">
            <p className="text-sm text-gray-400 mb-1">Выбранный пакет:</p>
            <p className="text-xl font-bold text-white">{packageName}</p>
            <p className="text-2xl font-black text-zelvo-green mt-2">{price}</p>
          </div>
          
          <div className="space-y-3 mb-8 text-sm text-gray-300">
            <p>✅ Я свяжусь с вами в течение 24 часов</p>
            <p>✅ Обсудим детали и составим ТЗ</p>
          </div>

          {/* ✅ ДВЕ КНОПКИ РЯДОМ */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a 
              href={tgLink}
              target="_blank" rel="noopener noreferrer"
              className="py-3 px-4 bg-zelvo-green text-zelvo-dark font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(57,255,139,0.4)] transition-all text-sm md:text-base"
            >
              <MessageCircle size={18} /> Telegram
            </a>
            
            <a 
              href={`mailto:zelvo.design@gmail.com?subject=Заказ: ${packageName}&body=${encodeURIComponent(tgMessage)}`}
              className="py-3 px-4 bg-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-all text-sm md:text-base border border-white/10"
            >
              <Mail size={18} /> Email
            </a>
          </div>
          
          <p className="text-center text-xs text-gray-500">
            Выберите удобный способ связи
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};