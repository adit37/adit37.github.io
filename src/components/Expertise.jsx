import React from 'react';
import { Cloud, GitBranch, Network, Database, Code, Lock } from 'lucide-react';

const Expertise = () => {
  const skills = [
    {
      icon: <Cloud size={32} color="#3b82f6" />,
      title: 'Google Cloud Platform (GCP)',
      desc: 'Skilled in deploying services using Cloud Run, Cloud Build, Artifact Registry, Cloud SQL, Cloud Storage, VPC, IAM, and Firebase Storage.',
    },
    {
      icon: <Database size={32} color="#f59e0b" />,
      title: 'AWS',
      desc: 'Experience with AWS App Runner for deploying containerized web applications and APIs, and understanding of AWS core services.',
    },
    {
      icon: <GitBranch size={32} color="#10b981" />,
      title: 'CI/CD & DevOps',
      desc: 'Automating software delivery and deployment pipelines using GitHub Actions, Cloud Build, and Docker containerization.',
    },
    {
      icon: <Code size={32} color="#ec4899" />,
      title: 'Languages',
      desc: 'Proficient in backend and scripting languages including Go, Node.js (NestJS), and Python for infrastructure and application development.',
    },
    {
      icon: <Network size={32} color="#8b5cf6" />,
      title: 'Networking',
      desc: 'Experience with MikroTik router configurations, managing VPC private IPs, subnetting, and securing network architectures.',
    },
    {
      icon: <Lock size={32} color="#14b8a6" />,
      title: 'Testing & QA',
      desc: 'Executing structured load testing and performance benchmarking for serverless APIs using k6 to measure latency and throughput.',
    }
  ];

  return (
    <section id="expertise" className="section">
      <div className="container">
        <h2 className="section-title">Core Expertise</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass animate-fade-in" 
              style={{ 
                padding: '2rem', 
                animationDelay: `${index * 100}ms`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', display: 'inline-block', padding: '1rem', borderRadius: '12px' }}>
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{skill.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
