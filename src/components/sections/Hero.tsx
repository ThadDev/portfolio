import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  MailIcon,
} from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="hero-mesh relative min-h-screen lg:h-screen lg:max-h-[960px] flex flex-col justify-center items-center pt-[4.25rem] pb-8 lg:pb-0 px-5 sm:px-8 lg:px-12 overflow-hidden">

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center py-6 sm:py-8 lg:py-0">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 sm:gap-6">
          {/* Eyebrow / Identity Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-gold-500/25 bg-gold-500/8 dark:bg-gold-500/10 text-xs font-medium tracking-wide text-gold-700 dark:text-gold-400 backdrop-blur-sm shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Software Developer</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem] font-bold leading-[1.12] tracking-tight text-ink-900 dark:text-white">
            Software Developer
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-ink-700/75 font-bold dark:text-white/60 max-w-xl leading-relaxed">
            I build Full-stack Web &amp; Mobile Products and{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold-500 dark:text-gold-400">
                AI-powered Workflows
              </span>
              <span className="absolute inset-x-0 bottom-1 h-[3px] bg-gold-500/30 rounded-full" />
            </span>{" "}
            that actually ship.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-1">
            <a
              href="#projects"
              className="
                group inline-flex items-center justify-center gap-2 w-full sm:w-auto
                px-6 sm:px-7 py-3 rounded-full
                bg-gold-500 text-ink-900 font-semibold text-sm
                hover:bg-gold-400 hover:-translate-y-0.5
                transition-all duration-200
                 hover:shadow-gold-700
              "
            >
              View Projects
              <ArrowDownRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-150"
              />
            </a>

            <a
              href="https://github.com/ThadDev"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center justify-center gap-2 w-full sm:w-auto
                px-6 sm:px-7 py-3 rounded-full
                border border-ink-200/80 dark:border-white/10
                bg-white/80 dark:bg-white/5
                text-ink-800 dark:text-white/85 font-semibold text-sm
                hover:border-gold-500/50 hover:bg-gold-500/8 dark:hover:bg-gold-500/10 hover:text-gold-600 dark:hover:text-gold-400 hover:-translate-y-0.5
                transition-all duration-200
                shadow-sm
              "
            >
              <GithubIcon className="w-4 h-4 text-ink-700 dark:text-white/70 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors" />
              GitHub
            </a>
          </div>

          {/* Supporting Social Quick-Links */}
          <div className="flex items-center gap-3.5 pt-1 text-xs text-ink-700/60 dark:text-white/40">
            <span className="hidden sm:inline font-medium tracking-wide uppercase text-[11px] text-ink-700/50 dark:text-white/30">
              Connect:
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com/in/thaddeus-ugwu-33880534b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full border border-ink-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 text-ink-700 dark:text-white/70 hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 hover:scale-110 transition-all duration-150"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com/thaddev_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter Profile"
                className="p-2 rounded-full border border-ink-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 text-ink-700 dark:text-white/70 hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 hover:scale-110 transition-all duration-150"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:thaddeusugwu2006@gmail.com"
                aria-label="Send Email"
                className="p-2 rounded-full border border-ink-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 text-ink-700 dark:text-white/70 hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 hover:scale-110 transition-all duration-150"
              >
                <MailIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Presentation */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center order-first lg:order-last">
          <div className="relative group">

            {/* Outer frame / glass bezel */}
            <div className="relative p-2 sm:p-2.5 rounded-[2rem] sm:rounded-[2.25rem] bg-gradient-to-b from-gold-500/30 via-gold-500/10 to-transparent dark:from-gold-500/25 dark:via-gold-500/5 dark:to-white/5 border border-gold-500/25 dark:border-gold-500/20 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_50px_rgba(0,0,0,0.5)]">
              {/* Inner Image Container */}
              <div className="relative w-36 sm:w-44 md:w-52 lg:w-[320px] xl:w-[350px] aspect-[4/5] rounded-[1.6rem] sm:rounded-[1.85rem] overflow-hidden bg-gold-400 dark:bg-gold-800">
                <Image
                  src="/images/thaddev.png"
                  alt="Thaddeus Ugwu"
                  fill
                  priority
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 208px, 350px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle gradient vignette at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Name caption on bottom of card */}
                <div className="absolute bottom-3 inset-x-3 text-center sm:text-left sm:left-3.5 sm:bottom-3.5 pointer-events-none">
                  <p className="text-white font-semibold text-sm tracking-tight drop-shadow-md">
                    Thaddeus Ugwu
                  </p>
                  <p className="text-gold-400 text-xs font-medium tracking-wide drop-shadow-sm">
                    ThadDev
                  </p>
                </div>
              </div>
            </div>

            {/* Floating micro-badge: Available for projects */}
            <div className="hidden sm:flex absolute -bottom-3 -left-3 lg:-left-5 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-ink-900/90 backdrop-blur-md border border-gold-500/30 shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <div className="text-left">
                <p className="text-[11px] font-semibold text-ink-900 dark:text-white leading-tight">
                  Available for projects
                </p>
                <p className="text-[9px] text-gold-600 dark:text-gold-400 font-medium">
                  Full-stack &amp; AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint — positioned absolutely so it doesn't push viewport content */}
      <div className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 opacity-40 hover:opacity-75 transition-opacity pointer-events-none">
        <span className="text-[10px] tracking-widest uppercase text-ink-700 dark:text-white font-medium">
          Scroll
        </span>
        <div className="w-px h-6 bg-current" />
      </div>
    </section>
  );
}
