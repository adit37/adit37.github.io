import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'} nav-header`} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      background: isScrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>
          <Terminal size={24} color="var(--accent)" />
          <span><span className="text-gradient">Adit's</span>Labs.</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontSize: '0.95rem', fontWeight: 500 }}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'none' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
