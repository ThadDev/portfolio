"use client";
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { techStack } from '@/lib/data/tech-stack';

export default function TechStack() {
  const [filter, setFilter] = useState(''); // '' = all, 'frontend', 'backend', 'ai'
  const categories = [
    { label: 'All', value: '' },
    { label: 'Front‑End', value: 'frontend' },
    { label: 'Back‑End', value: 'backend' },
    { label: 'AI', value: 'ai' },
  ];

  const filtered = techStack.filter((tech) => filter === '' || tech.category === filter);

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

        {/* Tech items grid (2 columns) */}
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((tech) => (
            <div key={tech.name} className="inline-flex items-center space-x-2 bg-gold-500/30 rounded px-2 py-1">
              <Icon icon={tech.icon} className="w-4 h-4" style={{ color: tech.color }} />
              <span className="text-sm font-medium text-ink-800 dark:text-white/80 whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
