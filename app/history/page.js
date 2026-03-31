'use client';
import { useEffect, useState } from 'react';
import { useProject } from '@/lib/context';

export default function HistoryPage() {
    const { loadProject } = useProject();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(JSON.parse(localStorage.getItem('cos_projects') || '[]'));
    }, []);

    return (
        <div className="view active">
            <div className="view-header"><h2>Project History</h2><p>All generated projects</p></div>
            {projects.length > 0 ? (
                <div className="recent-list">
                    {projects.map(p => (
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
