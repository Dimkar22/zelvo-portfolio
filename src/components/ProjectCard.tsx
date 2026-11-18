import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
      // ✅ Добавлен overflow-hidden и relative для корректного позиционирования
      className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-zelvo-gray border border-white/5 hover:border-zelvo-green/50 transition-colors"
    >
      {/* Контейнер для картинки */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={project.image} 
          alt={project.title} 
          // ✅ object-cover заполняет весь блок, сохраняя пропорции
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* ✅ Градиент стал мягче (opacity-40 вместо 60), чтобы было видно фото */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Текст поверх картинки */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-zelvo-green text-xs uppercase tracking-widest mb-2 block font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
      </div>
    </motion.div>
  );
};