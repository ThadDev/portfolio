import { projects } from '@/lib/data/projects';
import ProjectRow from '@/components/sections/ProjectRow';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-alt py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 dark:text-gold-500 mb-3">
            Projects
          </p>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
            What I've Built
          </h2>
        </div>
        <div className="space-y-16">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
