'use client';
import { useState, useEffect } from 'react';
import { useProject } from '@/lib/context';

export default function SettingsPage() {
    const { factoryReset, geminiKey, saveGeminiKey } = useProject();
    const [keyInput, setKeyInput] = useState('');

    useEffect(() => { setKeyInput(geminiKey); }, [geminiKey]);

    const handleReset = () => {
        factoryReset();
        window.location.reload();
    };

    const handleSaveKey = () => {
        saveGeminiKey(keyInput);
        alert('API Key saved successfully!');
    };

    return (
        <div className="view active">
            <div className="view-header"><h2>Settings</h2><p>Application preferences</p></div>
            <div className="bk-grid">
                <div className="bk-card"><h3>General</h3>
                    <div className="bk-row"><div className="bk-value">Version: Creative OS 2.0 (Next.js)</div></div>
                    <div className="bk-row"><div className="bk-value">Theme: Dark</div></div>
                    <div className="bk-row"><div className="bk-value">Framework: Next.js + React</div></div>
                </div>
                <div className="bk-card"><h3>Integrations</h3>
                    <div className="bk-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0 }}>Gemini API Key (Nano Banana Image Engine)</p>
                        <input
                            type="password"
                            style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-1)', color: 'white', padding: '10px 14px', borderRadius: '6px' }}
                            placeholder="AIzaSy..."
                            value={keyInput}
                            onChange={(e) => setKeyInput(e.target.value)}
                        />
                        <button className="btn-generate" style={{ background: 'var(--brand-default)' }} onClick={handleSaveKey}>Save API Key</button>
                    </div>
                </div>
                <div className="bk-card"><h3>Data Reset</h3>
                    <div className="bk-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0 }}>Danger Zone: This will permanently wipe all generated content, hooks, strings, and project history from this browser.</p>
                        <button className="btn-generate" style={{ background: '#e74c3c', borderColor: '#c0392b' }} onClick={handleReset}>Factory Reset Data</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
