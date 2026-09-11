const SITE_URL = 'https://thaddev.vercel.app';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Thaddeus Ugwu',
      alternateName: 'ThadDev',
      url: SITE_URL,
      image: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/thaddev.webp`,
      },
      jobTitle: 'Software Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'ThadDev Studios LLC',
      },
      knowsAbout: [
        'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'React Native',
        'Supabase', 'Firebase', 'Prisma ORM', 'Agentic AI Development',
        'Full-stack Web Development', 'Mobile Development',
      ],
      sameAs: [
        'https://github.com/ThadDev',
        'https://linkedin.com/in/thaddeus-ugwu-33880534b',
        'https://x.com/thaddev_',
      ],
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#page`,
      url: SITE_URL,
      name: 'Thaddeus Ugwu — Software Developer · ThadDev',
      description:
        'I build full-stack web and mobile products and AI-powered workflows that actually ship.',
      about: { '@id': `${SITE_URL}/#person` },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
