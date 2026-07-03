import React from 'react';
import { Calendar, Building, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Cloud Computing Cohort',
      company: 'Bangkit Academy led by Google, GoTo & Traveloka',
      location: 'Jakarta, Indonesia',
      date: 'Sep 2024 – Jan 2025',
      highlights: [
        'Completed 900+ hours of structured GCP training (Cloud Run, Cloud SQL, Cloud Storage, IAM) with focus on real-world cloud deployment and CI/CD automation.',
        'Contributed as Cloud Engineer in multidisciplinary capstone team — responsible for full infrastructure setup, pipeline automation, and cloud service integration.'
      ]
    },
    {
      role: 'Network Administrator Intern',
      company: 'MEGA Mentari',
      location: 'Kota Cirebon',
      date: 'Jan 2020 – Mar 2020',
      highlights: [
        'Managed MikroTik router/switch configurations and assisted field technicians on ISP installation, site survey, and connection testing for corporate and residential clients.'
      ]
    }
  ];

  return (
    <section id="experience" className="section glass" style={{ margin: '4rem 1rem', borderRadius: '24px', background: 'rgba(18, 18, 26, 0.4)' }}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ 
                position: 'relative', 
                paddingLeft: '2.5rem', 
                marginBottom: index === experiences.length - 1 ? '0' : '3rem'
              }}
            >
              {/* Timeline Line */}
              <div style={{ position: 'absolute', left: '7px', top: '0', bottom: index === experiences.length - 1 ? 'auto' : '-3rem', width: '2px', background: 'var(--border-color)', height: index === experiences.length - 1 ? '100%' : 'auto' }}></div>
              
              {/* Timeline Dot */}
              <div style={{ position: 'absolute', left: '0', top: '6px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent)', border: '4px solid var(--bg-primary)', boxShadow: '0 0 10px var(--accent-glow)' }}></div>
              
              <div className="glass" style={{ padding: '2rem', transition: 'transform 0.3s ease', cursor: 'default' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(10px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Building size={16} />
                    <span>{exp.company}</span>
                  </div>
                  {exp.location && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>📍</span>
                      <span>{exp.location}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} />
                    <span>{exp.date}</span>
                  </div>
                </div>
                
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <ChevronRight size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
