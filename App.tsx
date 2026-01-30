import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Capabilities from './pages/Capabilities';
import About from './pages/About';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  // Ensure scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Handle body class for theming
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderPage = () => {
    const pageContent = (() => {
      switch (currentPage) {
        case 'home':
          return <Home onNavigate={setCurrentPage} />;
        case 'projects':
          return <Projects />;
        case 'capabilities':
          return <Capabilities />;
        case 'about':
          return <About />;
        default:
          return <Home onNavigate={setCurrentPage} />;
      }
    })();

    return (
      <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
        {pageContent}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white bg-primary transition-colors duration-500">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;