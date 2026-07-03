import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'stretch', maxWidth: '900px', margin: '0 auto' }}>
          {/* AWS Cloud Practitioner */}
          <div className="glass animate-fade-in" style={{ padding: '2.5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,153,0,0.1) 0%, rgba(255,153,0,0.02) 100%)', border: '1px solid rgba(255,153,0,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 15px 30px -10px rgba(255,153,0,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ width: '90px', height: '90px', margin: '0 auto 1.25rem', background: '#232F3E', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(255,153,0,0.2)' }}>
               <span style={{ color: '#FF9900', fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>aws</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: '#fff' }}>AWS Certified Cloud Practitioner</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Validated overall understanding of the AWS Cloud platform, covering cloud concepts, security, and architecture. Issued 2025.
            </p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.9rem', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
              <CheckCircle size={14} /> Active
            </span>
            <a href="https://www.credly.com/badges/dcb8635e-6bf0-4721-a3fe-a3b74a88e298/public_url" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 500, transition: 'opacity 0.3s ease' }}>
              View on Credly <ExternalLink size={13} />
            </a>
          </div>

          {/* Google Cloud Skill Boost */}
          <div className="glass animate-fade-in delay-200" style={{ padding: '2.5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(66,133,244,0.1) 0%, rgba(66,133,244,0.02) 100%)', border: '1px solid rgba(66,133,244,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 15px 30px -10px rgba(66,133,244,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ width: '90px', height: '90px', margin: '0 auto 1.25rem', background: '#fff', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(66,133,244,0.2)' }}>
               <span style={{ fontSize: '2.2rem' }}>☁️</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: '#fff' }}>Google Cloud Skill Boost</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Earned multiple skill badges covering Core Infrastructure, Cloud Run, Cloud SQL, and Serverless architectures. Completed 2024.
            </p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.9rem', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
              <CheckCircle size={14} /> Verified
            </span>
            <a href="https://www.skills.google/public_profiles/a96d4593-bcec-41e1-8a7d-4167272ed370" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 500, transition: 'opacity 0.3s ease' }}>
              View Profile <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
