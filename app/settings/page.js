'use client';
import { useProject } from '@/lib/context';

export default function SettingsPage() {
    const { factoryReset } = useProject();

    const handleReset = () => {
        factoryReset();
        window.location.reload();
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
