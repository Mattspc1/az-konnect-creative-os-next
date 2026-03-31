'use client';
import { createContext, useContext, useState, useCallback } from 'react';
import { generateAll } from './generators';

const DEFAULT_PROJECT = {
    company: 'AZ Konnect', product: 'AZ Konnect LIVE', audience: 'Real estate agents',
    old: 'Cold calling', solution: 'AI-powered calling', metric: '6,500 calls/week',
    result: '27 meetings booked', price: '$999 one-time', urgency: '72-hour setup',
    color: '#057ED6', tone: 'confident', niche: 'Real Estate', mode: 'ads',
    platforms: ['facebook', 'instagram']
};

const ProjectContext = createContext(null);

export function ProjectProvider({ children }) {
    const [project, setProject] = useState(DEFAULT_PROJECT);
    const [generated, setGenerated] = useState(() => generateAll(DEFAULT_PROJECT));

    const generate = useCallback((newProject) => {
        const p = { ...newProject, niche: newProject.audience?.replace(/s$/, '').replace(/^.*\s/, '') || '' };
        setProject(p);
        setGenerated(generateAll(p));
    }, []);

    const saveProject = useCallback((projectToSave) => {
        if (typeof window === 'undefined') return;
        const p = projectToSave || project;
        const projects = JSON.parse(localStorage.getItem('cos_projects') || '[]');
        projects.unshift({
            id: Date.now(), company: p.company, name: p.company,
            product: p.product, mode: p.mode,
            date: new Date().toLocaleDateString(), status: 'draft', client: { ...p }
        });
        if (projects.length > 30) projects.length = 30;
        localStorage.setItem('cos_projects', JSON.stringify(projects));
    }, [project]);

    const loadProject = useCallback((id) => {
        if (typeof window === 'undefined') return null;
        const projects = JSON.parse(localStorage.getItem('cos_projects') || '[]');
        const pr = projects.find(x => x.id === id);
        if (!pr) return null;
        generate(pr.client);
        return pr;
    }, [generate]);

    const getProjects = useCallback(() => {
        if (typeof window === 'undefined') return [];
        return JSON.parse(localStorage.getItem('cos_projects') || '[]');
    }, []);

    const factoryReset = useCallback(() => {
        if (typeof window === 'undefined') return;
        localStorage.clear();
        setProject(DEFAULT_PROJECT);
        setGenerated(generateAll(DEFAULT_PROJECT));
    }, []);

    return (
        <ProjectContext.Provider value={{
            project, generated, generate, saveProject, loadProject, getProjects, factoryReset, DEFAULT_PROJECT
        }}>
            {children}
        </ProjectContext.Provider>
    );
}

export function useProject() {
    const ctx = useContext(ProjectContext);
    if (!ctx) throw new Error('useProject must be used within ProjectProvider');
    return ctx;
}
