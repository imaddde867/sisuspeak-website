import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <Features />
        <HowItWorks />
        <About />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
