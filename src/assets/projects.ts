// ✅ Импортируем картинки как модули
import veltoCover from '../assets/projects/velto-cover.png';
import veltoData from '../assets/projects/velto-data.png';
import veltoMockup from '../assets/projects/velto-mockup.png';
import veltoResearch from '../assets/projects/velto-research.png';
import veltoResults from '../assets/projects/velto-results.png';

export interface Project {
  id: number;
  title: string;
  category: 'uiux' | 'branding' | 'research';
  image: string; // Тип остается string, так как импорт возвращает URL
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Velto Messenger UI',
    category: 'uiux',
    image: veltoCover, // ✅ Используем переменную
    description: 'Концепция мессенджера нового поколения. Айдентика, UI-кит и презентация продукта.',
  },
  {
    id: 2,
    title: 'Velto Mobile Interface',
    category: 'uiux',
    image: veltoMockup,
    description: 'Дизайн основного экрана чата. Темная тема, неоновые акценты, фокус на приватности.',
  },
  {
    id: 3,
    title: 'User Research: Messenger Needs',
    category: 'research',
    image: veltoResearch,
    description: 'Анализ потребностей аудитории (N=100). Выявлены ключевые приоритеты: чаты (90%) и безопасность (82%).',
  },
  {
    id: 4,
    title: 'Research Insights & Data',
    category: 'research',
    image: veltoResults,
    description: 'Визуализация данных опроса. Инфографика для презентации продукта стейкхолдерам.',
  },
  {
    id: 5,
    title: 'Velto Data Table',
    category: 'research',
    image: veltoData,
    description: 'Исходные данные опроса. Таблица результатов для прозрачности исследования.',
  },
];
