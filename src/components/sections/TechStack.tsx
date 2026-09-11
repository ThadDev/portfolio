"use client";
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { techStack } from '@/lib/data/tech-stack';

// Mapping tech names to Iconify icons and categories
const techInfo: Record<string, { icon: string; category: string }> = {
  React: { icon: 'logos:react', category: 'frontend' },
  'Next.js': { icon: 'logos:nextjs', category: 'frontend' },
  Tailwind: { icon: 'logos:tailwindcss', category: 'frontend' },
  TypeScript: { icon: 'logos:typescript-icon', category: 'frontend' },
  JavaScript: { icon: 'logos:javascript', category: 'frontend' },
  Node: { icon: 'logos:nodejs', category: 'backend' },
  Express: { icon: 'logos:express', category: 'backend' },
  Python: { icon: 'logos:python', category: 'backend' },
  Django: { icon: 'logos:django', category: 'backend' },
  TensorFlow: { icon: 'logos:tensorflow', category: 'ai' },
  PyTorch: { icon: 'logos:pytorch', category: 'ai' },
  // fallback
  default: { icon: 'mdi:code-tags', category: 'frontend' },
};

export default function TechStack() {
  const [filter, setFilter] = useState(''); // '' = all, 'frontend', 'backend', 'ai'
  const categories = [
    { label: 'All', value: '' },
    { label: 'Front‑End', value: 'frontend' },
    { label: 'Back‑End', value: 'backend' },
    { label: 'AI', value: 'ai' },
  ];

  return (
    <section id="stack" aria-labelledby="stack-heading" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 dark:text-gold-500 mb-3">
            What I work with
          </p>
          <h2 id="stack-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
            Stack
          </h2>
        </div>

        {/* Filter menu */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 rounded ${filter === cat.value ? 'bg-gold-500 text-ink-900' : 'bg-ink-200/30 text-ink-900'} hover:bg-gold-500 hover:text-ink-900 transition-colors`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {techStack.map((category) => (
            <div key={category.id} className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Category label */}
              <div className="sm:w-36 flex-shrink-0 flex sm:justify-end pt-1">
                <span className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase text-gold-600 dark:text-gold-500 border border-gold-500/25 rounded-full px-3 py-1">
                  {category.label}
                </span>
              </div>

              {/* Divider line */}
              <div className="hidden sm:block w-px bg-gold-500/15 self-stretch mx-2" />

              {/* Pills */}
              <div className="flex flex-wrap gap-3 flex-1">
                {category.items
                  .filter((tech) => {
                    const info = techInfo[tech.name] || techInfo['default'];
                    return filter === '' || info.category === filter;
                  })
                  .map((tech) => {
                    const info = techInfo[tech.name] || techInfo['default'];
                    return (
                      <div
                        key={tech.name}
                        className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-ink-200/60 dark:border-white/8 bg-gold-500/30 dark:bg-ink-800/60 backdrop-blur-sm hover:border-gold-500/40 dark:hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-200 cursor-default"
                      >
                        <Icon icon={info.icon} className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        <span className="text-sm font-medium text-ink-800 dark:text-white/80 whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
