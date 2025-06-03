import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showBreadcrumb?: boolean;
  className?: string;
}

const PageLayout = ({ 
  children, 
  title, 
  description, 
  showBreadcrumb = true,
  className = '' 
}: PageLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className={`min-h-screen ${className}`}>
        {/* Page Header */}
        {(title || description) && (
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                {title && (
                  <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl font-heading mb-4">
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}
        
        {/* Page Content */}
        <div className="page-enter">
          {children}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PageLayout;
