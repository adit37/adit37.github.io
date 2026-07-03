import React from 'react';
import { GraduationCap, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section glass" style={{ margin: '0 1rem', borderRadius: '24px' }}>
      <div className="container">
        <h2 className="section-title">Professional Summary</h2>
        
        <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
          <div className="animate-fade-in delay-100">
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Fresh Graduate in Informatics Engineering (GPA 3.65/4.00) with hands-on experience deploying containerized applications on GCP via Bangkit Academy (Google, GoTo, Traveloka) and undergraduate research.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
              Skilled in Cloud Run, Cloud SQL, VPC, IAM, and CI/CD automation using Cloud Build and GitHub Actions. Published cross-cloud performance research (Cloud Run vs AWS App Runner using k6) in JAIEA Sinta Rank 5. AWS Certified Cloud Practitioner.
            </p>
            
            <div className="grid grid-cols-2 gap-6" style={{ marginTop: '2rem' }}>
              <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)' }}>
                <GraduationCap size={32} color="var(--accent)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>STMIK IKMI Cirebon</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Bachelor/S1 Informatics Engineering<br/>(2022 - 2026) · GPA 3.65</p>
              </div>
              <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)' }}>
                <Award size={32} color="var(--accent-secondary)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>SMKN 1 Gebang</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Computer & Network Engineering<br/>(2018 - 2021)</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-200" style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
            <div className="glass" style={{ position: 'absolute', top: '10%', right: '10%', bottom: '10%', left: '10%', background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
               <Zap size={48} color="var(--text-primary)" style={{ marginBottom: '1.5rem' }} />
               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Fast & Reliable</h3>
               <p style={{ color: 'var(--text-secondary)' }}>From Cloud Run containers to MikroTik routing tables, I build cloud-native systems that scale and stay up.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
