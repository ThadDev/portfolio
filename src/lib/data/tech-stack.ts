export interface TechItem {
  name: string;
  icon: string; // Iconify icon name
  color: string; // brand color
  category: string; // 'frontend' | 'backend' | 'ai'
}

export const techStack: TechItem[] = [
  // Frontend
  { name: 'React', icon: 'logos:react', color: '#61DAFB', category: 'frontend' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', color: '#3178C6', category: 'frontend' },
  { name: 'JavaScript', icon: 'logos:javascript', color: '#F7DF1E', category: 'frontend' },
  { name: 'Next.js', icon: 'logos:nextjs', color: '#ffffff', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss', color: '#06B6D4', category: 'frontend' },
  { name: 'React Native', icon: 'logos:react', color: '#61DAFB', category: 'frontend' },
  // Backend
  { name: 'Supabase', icon: 'logos:supabase', color: '#3ECF8E', category: 'backend' },
  { name: 'Firebase', icon: 'logos:firebase', color: '#FFCA28', category: 'backend' },
  { name: 'Prisma ORM', icon: 'logos:prisma', color: '#5A67D8', category: 'backend' },
  { name: 'Python', icon: 'logos:python', color: '#3776AB', category: 'backend' },
  { name: 'Django', icon: 'logos:django', color: '#092E20', category: 'backend' },
  { name: 'PostgreSQL', icon: 'logos:postgresql', color: '#336791', category: 'backend' },
  // AI
  { name: 'Claude', icon: 'mdi:robot', color: '#D4A574', category: 'ai' },
  { name: 'Antigravity', icon: 'mdi:gravity', color: '#f59e0b', category: 'ai' },
  { name: 'Codex', icon: 'logos:openai', color: '#ffffff', category: 'ai' },
];
