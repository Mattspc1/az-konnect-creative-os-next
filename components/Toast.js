'use client';
import { useState, useEffect } from 'react';

export default function Toast({ message }) {
    const [visible, setVisible] = useState(true);
    useEffect(() => { const t = setTimeout(() => setVisible(false), 2300); return () => clearTimeout(t); }, []);
    if (!visible) return null;
    return <div className="toast"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg> {message}</div>;
}
