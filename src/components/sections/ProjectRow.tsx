"use client";
import Image from 'next/image';
import { useState } from 'react';
import type { Project } from '@/lib/data/projects';

interface ProjectRowProps {
    project: Project;
    index: number;
}

export default function ProjectRow({ project, index }: ProjectRowProps) {
    const isEven = index % 2 === 1; // alternate layout
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible((v) => !v);

    return (
        <section className="relative py-16 lg:py-24">
            {/* Divider with number */}
            <div className="flex items-center mb-8">
                <hr className="flex-1 border-t border-ink-500/70" />
                <span className="mx-4 text-sm font-bold tracking-widest uppercase text-ink-500 dark:text-ink-300">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <hr className="flex-1 border-t border-ink-500/70" />
            </div>

            <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
            >
                {/* Image */}
                <div className="lg:col-span-7 relative group aspect-[16/9] w-full overflow-hidden" onMouseEnter={() => setOverlayVisible(true)} onMouseLeave={() => setOverlayVisible(false)} onClick={toggleOverlay}>
                    <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-contain rounded-lg transition-transform duration-300 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    {/* Overlay */}
                    <div
                        className={`absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${overlayVisible ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
                    >
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gold-500 text-ink-900 font-medium rounded hover:bg-gold-600 transition-colors"
                        >
                            View Project
                        </a>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 px-4 py-2 bg-ink-800 text-white font-medium rounded hover:bg-ink-700 transition-colors"
                            >
                                View Code
                            </a>
                        )}
                    </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-5 space-y-4">
                    <h3 className="text-2xl font-bold text-ink-900 dark:text-white">{project.title}</h3>
                    <p className="text-base text-ink-900 dark:text-ink-100 max-w-prose leading-relaxed">{project.description}</p>
                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 text-sm text-ink-900 dark:text-ink-100">
                        {project.stack?.map((tech: string) => (
                            <span key={tech} className="px-2 py-1 bg-gold-500/30 rounded">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
