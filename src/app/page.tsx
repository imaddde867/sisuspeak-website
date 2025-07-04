import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TutorsCarousel from '@/components/TutorsCarousel';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TutorsCarousel />
        <HowItWorks />
        <Features />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
