import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from '@/components/ui/Icons';
import type { Social } from '@/lib/data/socials';

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  mail: MailIcon,
} as const;

interface SocialLinkProps {
  social: Social;
}

export default function SocialLink({ social }: SocialLinkProps) {
  const Icon = iconMap[social.icon];

  return (
    <a
      href={social.href}
      target={social.icon !== 'mail' ? '_blank' : undefined}
      rel={social.icon !== 'mail' ? 'noopener noreferrer' : undefined}
      aria-label={`${social.label} — ${social.handle}`}
      className="
        group flex items-center gap-4 w-full sm:w-auto
        px-6 py-4 rounded-2xl
        border border-gold-500/10 dark:border-gold-500/10
        bg-white dark:bg-ink-800
        hover:border-gold-500/50
        hover:shadow-[0_4px_20px_rgba(245,158,11,0.08)]
        transition-all duration-200
      "
    >
      <span className="
        flex items-center justify-center w-10 h-10 rounded-xl
        bg-gold-500/10 dark:bg-gold-500/10
        text-gold-600 dark:text-gold-400
        group-hover:bg-gold-500 group-hover:text-ink-900
        transition-all duration-200
      ">
        <Icon className="w-[18px] h-[18px]" />
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold text-ink-900 dark:text-white leading-none mb-0.5">
          {social.label}
        </span>
        <span className="text-xs text-ink-700/60 dark:text-white/40">
          {social.handle}
        </span>
      </span>
    </a>
  );
}
