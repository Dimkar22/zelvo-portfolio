// src/pages/About.tsx
import { motion } from 'framer-motion';
import { ZLogo } from '../components/ZLogo';
import { MessageSquare, GraduationCap, Ear } from 'lucide-react'; // Добавь эти иконки в lucide-react

export const About = () => {
  return (
    <section className="min-h-screen px-6 py-32 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-6 mb-16"
      >
        <ZLogo variant="outline" className="w-16 h-16 md:w-20 md:h-20" />
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          О СЕБЕ <span className="text-zelvo-green">.</span>
        </h1>
      </motion.div>

      {/* Блок про тебя */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            Привет! Мне 17 лет, я студент 1 курса и графический дизайнер. 
            Я слабослышащий, поэтому для меня визуальный язык — это основной способ общения. 
            Именно это помогает мне создавать дизайн, который говорит сам за себя.
          </p>
          
          <div className="p-6 rounded-xl bg-zelvo-gray/50 border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="text-zelvo-green w-5 h-5" />
              <h3 className="font-bold text-lg">Мой проект: Velto</h3>
            </div>
            <p className="text-sm text-gray-400">
              Разрабатываю собственный мессенджер Velto. От идеи до UI/UX и брендинга — всё делаю сам. 
              Это моя главная практика и источник вдохновения.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <GraduationCap className="text-zelvo-green w-6 h-6 mt-1 shrink-0" />
            <div>
              <h4 className="font-bold text-white">Образование</h4>
              <p className="text-gray-400 text-sm">1 курс, Графический дизайн</p>
              <p className="text-gray-500 text-xs mt-1">Постоянно учусь новому и экспериментирую со стилями.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Ear className="text-zelvo-green w-6 h-6 mt-1 shrink-0" />
            <div>
              <h4 className="font-bold text-white">Особенности работы</h4>
              <p className="text-gray-400 text-sm">
                Слабослышащий. Предпочитаю текстовую коммуникацию (Telegram, Email). 
                Всегда на связи и внимательно отношусь к деталям ТЗ.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Навыки (оставляем как есть, они универсальны) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-bold uppercase tracking-widest text-zelvo-green mb-8">Инструменты</h2>
        <div className="flex flex-wrap gap-3">
          {['Figma', 'Pixco', 'Android Studio'].map((skill) => (
            <span key={skill} className="px-4 py-2 rounded-full border border-white/10 text-sm hover:border-zelvo-green/50 hover:text-zelvo-green transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};