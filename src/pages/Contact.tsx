import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-32 max-w-4xl mx-auto flex flex-col justify-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
      >
        ДАВАЙТЕ <span className="text-zelvo-green">ОБСУДИМ</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-400 mb-16 max-w-2xl"
      >
        Я слабослышащий, поэтому предпочитаю текстовое общение. 
        Напишите мне в Telegram или на почту — отвечу в течение 24 часов.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Telegram */}
        <motion.a 
          href="https://t.me/Dimkar22"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-zelvo-green/50 transition-all flex items-start gap-6"
        >
          <div className="p-4 rounded-xl bg-zelvo-green/10 text-zelvo-green group-hover:bg-zelvo-green group-hover:text-zelvo-dark transition-colors">
            <MessageCircle size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-zelvo-green transition-colors">Telegram</h3>
            <p className="text-gray-400">@Dimkar22</p>
            <p className="text-sm text-gray-500 mt-2">Предпочитаю текст • Быстрый ответ</p>
          </div>
        </motion.a>
        
        {/* Email */}
        <motion.a 
          href="mailto:zelvo.design@gmail.com"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-zelvo-green/50 transition-all flex items-start gap-6"
        >
          <div className="p-4 rounded-xl bg-zelvo-green/10 text-zelvo-green group-hover:bg-zelvo-green group-hover:text-zelvo-dark transition-colors">
            <Mail size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-zelvo-green transition-colors">Email</h3>
            <p className="text-gray-400">zelvo.design@gmail.com</p>
            <p className="text-sm text-gray-500 mt-2">Для ТЗ, документов и брифов</p>
          </div>
        </motion.a>
      </div>
    </section>
  );
};