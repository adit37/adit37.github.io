import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0 2rem', marginTop: '4rem', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="grid grid-cols-2 gap-8" style={{ marginBottom: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="text-gradient">Adit's</span>Labs.
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', marginBottom: '1.5rem' }}>
              Informatics Engineering graduate building scalable cloud architectures and robust networks.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/adit37" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'inline-flex', transition: 'background 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/muhammad-adithya" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'inline-flex', transition: 'background 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:adutya37@gmail.com" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'inline-flex', transition: 'background 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '4rem' }}>
             <div>
               <h4 style={{ color: '#fff', marginBottom: '1rem', fontWeight: 600 }}>Navigation</h4>
               <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                 <li><a href="#about">About</a></li>
                 <li><a href="#expertise">Expertise</a></li>
                 <li><a href="#projects">Projects</a></li>
                 <li><a href="#experience">Experience</a></li>
                 <li><a href="#certifications">Certifications</a></li>
               </ul>
             </div>
             <div>
               <h4 style={{ color: '#fff', marginBottom: '1rem', fontWeight: 600 }}>Contact</h4>
               <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                 <li>adutya37@gmail.com</li>
                 <li>+62 896-9343-5782</li>
                 <li>Jakarta, Indonesia</li>
               </ul>
             </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          <p>© {new Date().getFullYear()} Adit's Portfolio. Built with React.js & Vite.</p>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          footer .grid-cols-2 { grid-template-columns: 1fr; }
          footer .grid > div:last-child { justify-content: flex-start; flex-wrap: wrap; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
