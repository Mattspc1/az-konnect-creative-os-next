'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
    { href: '/', label: 'Dashboard', icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>, group: 'core' },
    { href: '/history', label: 'Projects', icon: <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />, group: 'core' },
    { sep: true },
    { href: '/ads', label: 'Ads Creative', icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />, group: 'modes' },
    { href: '/content', label: 'Content', icon: <><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></>, group: 'modes' },
    { sep: true },
    { href: '/library', label: 'Asset Library', icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></>, group: 'assets' },
    { href: '/brandkit', label: 'Brand Kit', icon: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>, group: 'assets' },
];
const BOTTOM = [
    { href: '/export', label: 'Export', icon: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></> },
    { href: '/settings', label: 'Settings', icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></> },
];

export default function Sidebar({ onCreateClick }) {
    const pathname = usePathname();
    return (
        <aside className="sidebar">
            <img src="/creative-os/assets/logo/az_konnect_logo.png" alt="AZ" className="sidebar-brand" />
            <button className="sb-create" onClick={onCreateClick} aria-label="Create">
                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                <span className="sb-tooltip">Create</span>
            </button>
            <div className="sb-sep" />
            <div className="sb-group-scroll">
                {NAV.map((item, i) => item.sep ? <div key={i} className="sb-sep" /> : (
                    <Link key={item.href} href={item.href} className={`sb-item ${pathname === item.href ? 'active' : ''}`} aria-label={item.label}>
                        <svg viewBox="0 0 24 24">{item.icon}</svg>
                        <span className="sb-tooltip">{item.label}</span>
                    </Link>
                ))}
            </div>
            <div className="sb-bottom">
                {BOTTOM.map(item => (
                    <Link key={item.href} href={item.href} className={`sb-item ${pathname === item.href ? 'active' : ''}`} aria-label={item.label}>
                        <svg viewBox="0 0 24 24">{item.icon}</svg>
                        <span className="sb-tooltip">{item.label}</span>
                    </Link>
                ))}
            </div>
        </aside>
    );
}
