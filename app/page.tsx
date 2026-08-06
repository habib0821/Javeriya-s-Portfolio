import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0F]">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
