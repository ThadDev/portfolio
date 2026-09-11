import { socials } from '@/lib/data/socials';
import SocialLink from '@/components/ui/SocialLink';

export default function Socials() {
  return (
    <section id="connect" aria-labelledby="connect-heading" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 dark:text-gold-500 mb-3">
            Get in touch
          </p>
          <h2 id="connect-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
            Let&apos;s connect
          </h2>
          <p className="mt-4 text-base text-ink-700/60 dark:text-white/40 max-w-md mx-auto leading-relaxed">
            Open to interesting projects, collaborations, and conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {socials.map((social) => (
            <SocialLink key={social.id} social={social} />
          ))}
        </div>

      </div>
    </section>
  );
}
