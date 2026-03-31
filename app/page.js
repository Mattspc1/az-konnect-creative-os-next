'use client';
import { useProject } from '@/lib/context';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const { project, generated, loadProject } = useProject();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(JSON.parse(localStorage.getItem('cos_projects') || '[]'));
  }, []);

  return (
    <div className="view active">
      <div className="view-header"><h2>Welcome back</h2><p>{project.company} Creative OS</p></div>
      <div className="dash-grid">
        <div className="dash-card"><div className="dash-card-label">Hooks</div><div className="dash-card-value">{generated.hooks.length}</div><div className="dash-card-sub">5 angles</div></div>
        <div className="dash-card"><div className="dash-card-label">Headlines</div><div className="dash-card-value">{generated.heads.length}</div><div className="dash-card-sub">5 angles</div></div>
        <div className="dash-card"><div className="dash-card-label">Primary Texts</div><div className="dash-card-value">{generated.prims.length}</div><div className="dash-card-sub">3 lengths</div></div>
        <div className="dash-card"><div className="dash-card-label">Combinations</div><div className="dash-card-value">{generated.combos.length}</div><div className="dash-card-sub">Meta-ready</div></div>
      </div>
      <div className="dash-section-title">Recent Projects</div>
      {projects.length > 0 ? (
        <div className="recent-list">
          {projects.slice(0, 5).map(p => (
            <div key={p.id} className="recent-item" onClick={() => loadProject(p.id)}>
              <div className="recent-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
              <div className="recent-info">
                <div className="recent-name">{p.name || p.company}</div>
                <div className="recent-meta">{p.mode === 'ads' ? 'Ads Creative' : 'Content'} · {p.date}</div>
              </div>
              <span className={`recent-status status-${p.status || 'draft'}`}>{p.status || 'draft'}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon"><svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg></div>
          <div className="empty-title">No projects yet</div>
          <div className="empty-desc">Create your first project to start generating content.</div>
        </div>
      )}
    </div>
  );
}
