import {
  ReactIcon, TypeScriptIcon, JavaScriptIcon, NextJsIcon, TailwindIcon,
  SupabaseIcon, FirebaseIcon, PrismaIcon,
  ClaudeIcon, OpenAIIcon, AntigravityIcon,
} from '@/components/ui/TechIcons';
import { ComponentType, SVGProps } from 'react';

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export interface TechItem {
  name: string;
  Icon: IconComponent;
  color: string; // brand color for icon tint
}

export interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React',        Icon: ReactIcon,      color: '#61DAFB' },
      { name: 'TypeScript',   Icon: TypeScriptIcon,  color: '#3178C6' },
      { name: 'JavaScript',   Icon: JavaScriptIcon,  color: '#F7DF1E' },
      { name: 'Next.js',      Icon: NextJsIcon,      color: '#ffffff' },
      { name: 'Tailwind CSS', Icon: TailwindIcon,    color: '#06B6D4' },
      { name: 'React Native', Icon: ReactIcon,       color: '#61DAFB' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Supabase',  Icon: SupabaseIcon,  color: '#3ECF8E' },
      { name: 'Firebase',  Icon: FirebaseIcon,  color: '#FFCA28' },
      { name: 'Prisma ORM',Icon: PrismaIcon,    color: '#5A67D8' },
    ],
  },
  {
    id: 'agentic',
    label: 'Agentic Dev',
    items: [
      { name: 'Claude',       Icon: ClaudeIcon,       color: '#D4A574' },
      { name: 'Antigravity',  Icon: AntigravityIcon,  color: '#f59e0b' },
      { name: 'Codex',        Icon: OpenAIIcon,       color: '#ffffff' },
    ],
  },
];
