import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex flex-col overflow-hidden  bg-ink-800/40 dark:bg-ink-800 border border-white/5 hover:border-gold-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      {/* Image area */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

        {/* Large project number — decorative */}
        <span className="absolute top-3 right-4 text-[3.5rem] font-black leading-none text-white/6 select-none pointer-events-none">
          {num}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Number + title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-bold tracking-widest text-gold-500/70">
              {num}
            </span>
            <span className="w-4 h-px bg-gold-500/30" />
            <h3 className="font-semibold text-base text-white leading-snug">
              {project.title}
            </h3>
          </div>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Preview ${project.title}`}
            className="
              flex-shrink-0 flex items-center justify-center
              w-8 h-8 rounded-full
              border border-white/10
              text-white/40
              hover:border-gold-500 hover:text-gold-400 hover:bg-gold-500/10
              transition-all duration-200
            "
          >
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/50 flex-1">
          {project.description}
        </p>

        {/* Preview link text */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-1.5 self-start mt-1
            text-xs font-semibold tracking-wide uppercase
            text-gold-500/70 hover:text-gold-400
            transition-colors duration-150
            group/link
          "
        >
          Live Preview
          <ArrowUpRight
            size={11}
            className="group-hover/link:translate-x-px group-hover/link:-translate-y-px transition-transform duration-150"
          />
        </a>
      </div>
    </article>
  );
}
