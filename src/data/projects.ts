export interface Project {
  id: number;
  title: string;
  category: 'uiux' | 'branding' | 'research';
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Velto Messenger UI',
    category: 'uiux',
    image: '/projects/velto-cover.png', // ✅ Изменено на .png
    description: 'Концепция мессенджера нового поколения. Айдентика, UI-кит и презентация продукта.',
  },
  {
    id: 2,
    title: 'Velto Mobile Interface',
    category: 'uiux',
    image: '/projects/velto-mockup.png', // ✅ Изменено на .png
    description: 'Дизайн основного экрана чата. Темная тема, неоновые акценты, фокус на приватности.',
  },
  {
    id: 3,
    title: 'User Research: Messenger Needs',
    category: 'research',
    image: '/projects/velto-research.png', // ✅ Изменено на .png
    description: 'Анализ потребностей аудитории (N=100). Выявлены ключевые приоритеты: чаты (90%) и безопасность (82%).',
  },
  {
    id: 4,
    title: 'Research Insights & Data',
    category: 'research',
    image: '/projects/velto-results.png', // ✅ Изменено на .png
    description: 'Визуализация данных опроса. Инфографика для презентации продукта стейкхолдерам.',
  },
  {
    id: 5,
    title: 'Velto Data Table',
    category: 'research',
    image: '/projects/velto-data.png', // ✅ Изменено на .png
    description: 'Исходные данные опроса. Таблица результатов для прозрачности исследования.',
  },
];