import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projects, type Project } from '../data/projects';
import { X } from 'lucide-react';

// ✅ Обновленные фильтры под твои реальные проекты
const categories = [
  { id: 'all', label: 'Все работы' },
  { id: 'uiux', label: 'UI/UX Дизайн' },
  { id: 'branding', label: 'Брендинг' },
  { id: 'research', label: 'Исследования' }, // ✅ Добавлена категория исследований
] as const;

export const Works = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="min-h-screen px-6 py-32 max-w-7xl mx-auto">
      {/* Заголовок */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black mb-12 tracking-tight"
      >
        ИЗБРАННЫЕ <span className="text-zelvo-green">РАБОТЫ</span>
      </motion.h1>

      {/* Фильтры */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === cat.id
                ? 'bg-zelvo-green text-zelvo-dark shadow-[0_0_20px_rgba(57,255,139,0.3)]'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Сетка проектов */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ✅ Модальное окно с РЕАЛЬНЫМ изображением */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-zelvo-gray border border-white/10 rounded-2xl max-w-4xl w-full overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-zelvo-green hover:text-zelvo-dark transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Изображение проекта на всю ширину модалки */}
              <div className="w-full aspect-video bg-black/50 relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-8">
                <span className="text-zelvo-green text-xs uppercase tracking-widest mb-2 block font-bold">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-black mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};