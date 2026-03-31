'use client';
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
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
    const [geminiKey, setGeminiKey] = useState('201f1329c434ff540384237b7f79fd37');
    const [openAiKey, setOpenAiKey] = useState('');
    const [isAiGenerating, setIsAiGenerating] = useState(false);

    useEffect(() => {
        setGeminiKey(localStorage.getItem('cos_gemini_key') || '201f1329c434ff540384237b7f79fd37');
        setOpenAiKey(localStorage.getItem('cos_openai_key') || '');
    }, []);

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
        setGeminiKey('');
    }, []);

    const saveGeminiKey = useCallback((key) => {
        setGeminiKey(key);
        localStorage.setItem('cos_gemini_key', key);
    }, []);

    const saveOpenAiKey = useCallback((key) => {
        setOpenAiKey(key);
        localStorage.setItem('cos_openai_key', key);
    }, []);

    const generateWithAIEngine = async (newProject) => {
        if (!openAiKey) throw new Error("OpenAI API Key is missing. Please add it in Settings.");
        setIsAiGenerating(true);
        setProject(newProject);
        try {
            const systemPrompt = `You are AZ KONNECT CREATIVE OS — a world-class AI creative strategist, direct response advertiser, and content engine.
You do NOT generate generic AI content. You generate HIGH-CONVERTING, PLATFORM-NATIVE, REALISTIC creatives that businesses can actually run.
You think like a $100M media buyer and elite direct response copywriter.

INPUTS:
Business/Product: ${newProject.product}
Company: ${newProject.company}
Audience: ${newProject.audience}
Pain Point (Old Way): ${newProject.old}
Solution/Offer: ${newProject.solution}
Metric: ${newProject.metric}

STEP 1: STRATEGIC FOUNDATION (Internal)
STEP 2: GENERATE AD ANGLES (pain-driven, transformation, social proof, authority, curiosity gap, urgency, etc)
STEP 3: FOR EACH ANGLE GENERATE FULL CREATIVE (Hook, Headline, Primary Text, CTA)
STEP 4 & 5: VISUAL CONCEPT & PROMPT (Determine highly detailed visual scene, NO text overlays, must be photorealistic or premium graphic. No generic dashboards.)

CRITICAL INSTRUCTION: Analyze the inputs and create exactly 15 unique, elite ad angles.
You must return your output strictly in JSON format matching this exact schema so it instantly renders in the application UI:
{
  "hooks": [ { "id": 1, "t": "Text", "a": "problem|curiosity|authority|social|urgency" } ],
  "heads": [ { "id": 1, "t": "Text", "a": "problem|curiosity|authority|social|urgency" } ],
  "prims": [ { "id": 1, "t": "Longer text usually with line breaks", "a": "problem", "l": "short|medium|long" } ],
  "ctas": [ { "id": 1, "t": "Short text", "tp": "lead|traffic" } ],
  "imagePrompts": [ { "id": 1, "v": "Extremely detailed visual style, lighting, composition description for an Image AI model" } ]
}
Make sure arrays are length 15 exactly. DO NOT use generic AI filler. Make it aggressive, modern, SaaS/direct-response text.`;

            const res = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${openAiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-4o",
                    messages: [{ role: "system", content: systemPrompt }],
                    response_format: { type: "json_object" }
                })
            });

            if (!res.ok) throw new Error("Failed to fetch from OpenAI");
            const data = await res.json();
            const payload = JSON.parse(data.choices[0].message.content);

            const combos = [];
            for (let i = 0; i < 15; i++) {
                combos.push({
                    id: i + 1,
                    camp: `${newProject.company.replace(/\s+/g, '_').toUpperCase()}_${payload.hooks[i].a.toUpperCase()}`,
                    set: "BROAD",
                    name: `AD_${String(i + 1).padStart(3, '0')}`,
                    hook: payload.hooks[i].t,
                    head: payload.heads[i].t,
                    prim: payload.prims[i].t,
                    cta: payload.ctas[i].t,
                    ctaType: payload.ctas[i].tp === 'lead' ? 'SIGN_UP' : 'LEARN_MORE',
                    angle: payload.hooks[i].a
                });
            }
            payload.combos = combos;
            setGenerated(payload);
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            setIsAiGenerating(false);
        }
    };

    return (
        <ProjectContext.Provider value={{
            project, generated, generate, saveProject, loadProject, getProjects, factoryReset, DEFAULT_PROJECT, geminiKey, saveGeminiKey, openAiKey, saveOpenAiKey, isAiGenerating, generateWithAIEngine
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
