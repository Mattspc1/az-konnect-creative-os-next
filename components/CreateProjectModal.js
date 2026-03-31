'use client';
import { useState } from 'react';
import { useProject } from '@/lib/context';
import { useRouter } from 'next/navigation';

export default function CreateProjectModal({ open, onClose }) {
    const { generate, saveProject, DEFAULT_PROJECT } = useProject();
    const router = useRouter();
    const [mode, setMode] = useState('ads');
    const [platforms, setPlatforms] = useState(['facebook', 'instagram']);

    const togglePlatform = (p) => setPlatforms(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);

    const handleSubmit = () => {
        const vals = {
            company: document.getElementById('in-company')?.value || '',
            product: document.getElementById('in-product')?.value || '',
            audience: document.getElementById('in-audience')?.value || '',
            old: document.getElementById('in-old')?.value || '',
            solution: document.getElementById('in-solution')?.value || '',
            metric: document.getElementById('in-metric')?.value || '',
            result: document.getElementById('in-result')?.value || '',
            price: document.getElementById('in-price')?.value || '',
            urgency: document.getElementById('in-urgency')?.value || '',
            color: document.getElementById('in-color')?.value || '#057ED6',
            tone: document.getElementById('in-tone')?.value || 'confident',
            mode, platforms,
            niche: (document.getElementById('in-audience')?.value || '').replace(/s$/, '').replace(/^.*\s/, ''),
        };
        generate(vals);
        setTimeout(() => saveProject(), 100);
        onClose();
        router.push(mode === 'ads' ? '/ads' : '/content');
    };

    if (!open) return null;
    return (
        <div className="modal-overlay open" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="modal-box">
                <div className="modal-head">
                    <h3>New Project</h3>
                    <button className="modal-close" onClick={onClose}>
                        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="field"><label>Project Name</label><input type="text" className="field-input" id="in-project" placeholder="e.g. Q1 Campaign" /></div>
                    <div className="section-label">Mode</div>
                    <div className="mode-select">
                        <div className={`mode-opt ${mode === 'ads' ? 'selected' : ''}`} onClick={() => setMode('ads')}>
                            <div className="mode-opt-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
                            <div className="mode-opt-title">Ads Creative</div>
                            <div className="mode-opt-desc">Meta ads, hooks, headlines, storyboards</div>
                        </div>
                        <div className={`mode-opt ${mode === 'content' ? 'selected' : ''}`} onClick={() => setMode('content')}>
                            <div className="mode-opt-icon"><svg viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg></div>
                            <div className="mode-opt-title">Content Creation</div>
                            <div className="mode-opt-desc">Posts, stories, carousels, blogs</div>
                        </div>
                    </div>
                    <div className="section-label">Platforms</div>
                    <div className="platform-chips">
                        {['facebook', 'instagram', 'linkedin', 'blog', 'gbp'].map(p => (
                            <div key={p} className={`p-chip ${platforms.includes(p) ? 'selected' : ''}`} onClick={() => togglePlatform(p)}>
                                {p.charAt(0).toUpperCase() + p.slice(1)}
                            </div>
                        ))}
                    </div>
                    <div className="section-label">Brand & Audience</div>
                    <div className="field"><label>Company / Client</label><input type="text" className="field-input" id="in-company" defaultValue="" /></div>
                    <div className="field"><label>Product or Service</label><input type="text" className="field-input" id="in-product" defaultValue="" /></div>
                    <div className="field"><label>Target Audience</label><input type="text" className="field-input" id="in-audience" defaultValue="" /></div>
                    <div className="field"><label>Primary Color</label><input type="color" className="field-input" id="in-color" defaultValue="#057ED6" style={{ height: '36px', padding: '2px', cursor: 'pointer' }} /></div>
                    <div className="section-label">Messaging</div>
                    <div className="field"><label>The Old Way (enemy)</label><input type="text" className="field-input" id="in-old" defaultValue="" /></div>
                    <div className="field"><label>Your Solution</label><input type="text" className="field-input" id="in-solution" defaultValue="" /></div>
                    <div className="field"><label>Key Metric</label><input type="text" className="field-input" id="in-metric" defaultValue="" /></div>
                    <div className="field"><label>Key Result</label><input type="text" className="field-input" id="in-result" defaultValue="" /></div>
                    <div className="field"><label>Price / Offer</label><input type="text" className="field-input" id="in-price" defaultValue="" /></div>
                    <div className="field"><label>Urgency / Guarantee</label><input type="text" className="field-input" id="in-urgency" defaultValue="" /></div>
                    <div className="field"><label>Tone of Voice</label>
                        <select className="field-input" id="in-tone">
                            <option value="confident">Confident & Direct</option>
                            <option value="friendly">Friendly & Approachable</option>
                            <option value="urgent">Urgent & Bold</option>
                            <option value="professional">Professional & Authoritative</option>
                        </select>
                    </div>
                </div>
                <div className="modal-foot">
                    <button className="btn-generate" onClick={handleSubmit}>
                        <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                        Generate Assets
                    </button>
                </div>
            </div>
        </div>
    );
}
