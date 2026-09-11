import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Socials from '@/components/sections/Socials';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />

        <Projects />
        <TechStack />
        <Socials />
      </main>
      <Footer />
    </>
  );
}
