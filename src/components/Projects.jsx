import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cross-Cloud Serverless Performance Analysis',
      subtitle: 'Undergraduate Thesis (2025 – 2026)',
      role: 'Researcher & Cloud Engineer',
      org: 'STMIK IKMI Cirebon',
      description: 'Designed a cross-cloud topology deploying identical containerized REST API on both Cloud Run (GCP) and AWS App Runner, with shared data layer (Cloud SQL, Cloud Storage) on GCP — simulating real cross-provider network conditions.',
      image: null,
      bullets: [
        'Configured equivalent specs on both platforms (1 vCPU, 2 GB, concurrency 80, min 1/max 10 instances); synchronized deployments from a single GitHub repo using Cloud Build and App Runner native GitHub integration.',
        'Executed structured k6 load testing up to 1,000 VUs across 5 repeated runs — measuring latency (p90/p95), throughput (RPS), and autoscaling responsiveness.',
        'Results: Cloud Run p95 47–71 ms · 436–438 RPS · 0% error rate. App Runner p95 490–651 ms · 388–410 RPS · error rate up to 4.41% — attributed to cross-cloud TLS overhead and backlog-based autoscaling lag.'
      ],
      tags: ['Cloud Run', 'AWS App Runner', 'k6', 'Cloud SQL', 'Cloud Build', 'GitHub Actions', 'Docker'],
      published: {
        label: '📄 Published · JAIEA Sinta Rank 5 · Vol. 5 No. 2 · Feb 2026',
        url: 'https://ioinformatic.org/index.php/JAIEA/article/view/1919'
      }
    },
    {
      title: 'FontFound — AI-Powered Font Detection Application',
      subtitle: 'Bangkit Academy Capstone Project (Dec 2024)',
      role: 'Cloud Engineer',
      org: 'Bangkit Academy',
      description: 'Provisioned full GCP stack: Cloud Run (NestJS backend), Cloud SQL (private IP via custom VPC subnet), Cloud Storage (image upload), Firebase Storage (mobile-backend integration), Artifact Registry (container images).',
      image: '/fontfound.png',
      bullets: [
        'Configured IAM service accounts with scoped permissions for Cloud Build pipeline; built automated CI/CD — Cloud Build detects Dockerfile on each GitHub commit, builds image, pushes to Artifact Registry, and deploys to Cloud Run.',
        'Set up VPC private IP connectivity between Cloud SQL and Cloud Run to restrict database access from public network.'
      ],
      tags: ['GCP', 'Cloud Run', 'NestJS', 'VPC', 'Cloud Build', 'Cloud SQL', 'Firebase', 'Artifact Registry'],
      published: null
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects & Research</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {projects.map((project, index) => (
            <div key={index} className="glass animate-fade-in" style={{ overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(59, 130, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {project.image && (
                <div style={{ width: '100%', height: '220px', background: 'linear-gradient(135deg, #f5c518 0%, #e6a800 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
                  <img src={project.image} alt={project.title} style={{ height: '100%', objectFit: 'contain', padding: '1rem' }} />
                </div>
              )}
              <div style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                  <p style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}>
                    {project.subtitle} · <span style={{ color: 'var(--text-secondary)' }}>{project.role}</span> · <span style={{ color: 'var(--text-secondary)' }}>{project.org}</span>
                  </p>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{project.description}</p>
                
                <ul style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }}>▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {project.published && (
                  <a href={project.published.url} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(34, 197, 94, 0.2)', transition: 'background 0.3s ease' }}>
                    {project.published.label}
                    <ExternalLink size={14} />
                  </a>
                )}
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} style={{ background: 'rgba(59, 130, 246, 0.08)', color: 'var(--accent)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 500, border: '1px solid rgba(59, 130, 246, 0.15)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
