export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  live: string;
  github: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Food Delivery App',
    image: '/images/projects/food-app.webp',
    description:
      'A luxury restaurant ordering platform built end-to-end — live order tracking, real-time admin notifications, payment integration, and a polished mobile-first customer experience.',
    live: 'https://m-onyinye-app.vercel.app',
    github: 'https://github.com/ThadDev/m-onyinye-app',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
  },
  {
    id: 2,
    title: 'Angies Cakes',
    image: '/images/projects/angies.webp',
    description:
      'A full-featured web app for a bakery — customers can browse the menu, place orders, and get in touch directly. Designed for warmth and simplicity with a sharp focus on mobile-first usability.',
    live: 'https://angies-cakes-app.vercel.app',
    github: 'https://github.com/ThadDev/angies-cakes',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 3,
    title: 'Hilltop',
    image: '/images/projects/real-estate.webp',
    description:
      'An apartment listing platform built for UNN students to browse, list, and rent housing near campus. Integrates a live listings API for real-time availability and smooth filtering.',
    live: 'https://real-estate-website-thaddev.vercel.app',
    github: 'https://github.com/ThadDev/real-estate-website',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Prisma'],
  },
  {
    id: 4,
    title: 'Cheluxe',
    image: '/images/projects/cheluxe.webp',
    description:
      'An e-commerce storefront for a female clothing brand — product browsing, a cart system, and a Supabase-powered backend handling inventory and order management end-to-end.',
    live: 'https://cheluxe-website-clothing.vercel.app',
    github: 'https://github.com/ThadDev/cheluxe-website',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 5,
    title: 'DevMentor',
    image: '/images/projects/devmentor.webp',
    description:
      'An AI-powered tool for developers — generates personalised learning roadmaps, suggests tech stacks for project ideas, and answers technical questions on demand. Built with a clean, distraction-free interface.',
    live: 'https://dev-mentor-app.vercel.app',
    github: 'https://github.com/ThadDev/Dev-Mentor-app',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
  },

];
