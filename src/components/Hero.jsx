import React from 'react';
import { ArrowRight, Download, Server, Cloud, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', position: 'relative' }}>
      
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--accent)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.15, zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '400px', height: '400px', background: 'var(--accent-secondary)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.15, zIndex: -1 }}></div>

      <div className="container grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
        <div className="hero-content animate-fade-in">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '9999px', color: 'var(--accent)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Muhammad Adithya Pratama • Fresh Graduate
          </div>
          
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Cloud Engineer <br />
            <span className="text-gradient">& DevOps</span>
          </h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '480px' }}>
            Fresh Graduate in Informatics Engineering with hands-on experience deploying containerized applications on GCP and AWS. Skilled in Cloud Run, CI/CD automation, and serverless architectures.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#expertise" className="btn btn-primary">
              Explore Expertise <ArrowRight size={18} />
            </a>
            <a href="/CV_Muhammad_Adithya_Pratama.html" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Download CV <Download size={18} />
            </a>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Server size={20} color="var(--accent)" />
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Network Admin</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cloud size={20} color="var(--accent)" />
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>AWS Certified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} color="var(--accent)" />
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>CI/CD Pipelines</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in delay-200" style={{ position: 'relative' }}>
          <div className="glass" style={{ padding: '2rem', position: 'relative', zIndex: 1, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
            </div>
            <pre style={{ fontFamily: 'monospace', color: '#a78bfa', fontSize: '0.875rem', overflowX: 'auto' }}>
<code>{`// Infrastructure as Code
resource "google_cloud_run_v2_service" "api" {
  name     = "fontfound-backend"
  location = "asia-southeast2"
  
  template {
    containers {
      image = "asia.gcr.io/project/api:latest"
      resources {
        limits = { cpu = "1", memory = "2Gi" }
      }
    }
  }
}

// Network Config
/ip route add dst-address=0.0.0.0/0 gateway=192.168.1.1`}</code>
            </pre>
          </div>
          
          {/* Decorative accents behind the code block */}
          <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', width: '100%', height: '100%', border: '2px solid var(--accent)', borderRadius: '16px', zIndex: 0, opacity: 0.5 }}></div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content h1 { font-size: 2.5rem; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
