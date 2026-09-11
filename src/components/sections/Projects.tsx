"use client";
import { useState } from 'react';
import { projects } from '@/lib/data/projects';
import ProjectRow from '@/components/sections/ProjectRow';

export default function Projects() {
  const [filter, setFilter] = useState(''); // '' = all, 'frontend', 'backend', 'ai'
  const categories = [
    { label: 'All', value: '' },
    { label: 'Front‑End', value: 'frontend' },
    { label: 'Back‑End', value: 'backend' },
    { label: 'AI', value: 'ai' },
  ];

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-alt py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 dark:text-gold-500 mb-3">
            Selected work
          </p>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
            Projects
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
        <div className="space-y-16">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} selectedCategory={filter} />
          ))}
        </div>
      </div>
    </section>
  );
}
