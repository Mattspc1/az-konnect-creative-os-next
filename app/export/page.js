'use client';
import { useProject } from '@/lib/context';

export default function ExportPage() {
    const { project: C, generated } = useProject();
    const { combos } = generated;

    const downloadCSV = () => {
        let csv = 'Campaign,Ad Set,Ad Name,Angle,Headline,Primary Text,Hook,CTA,Website\n';
        combos.forEach(c => {
            csv += `"${c.camp}","${c.set}","${c.name}","${c.angle}","${c.head}","${c.prim.replace(/\n/g, ' ')}","${c.hook}","${c.cta}","www.${C.company.toLowerCase().replace(/\s+/g, '')}.com"\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `${C.company.replace(/\s+/g, '_')}_Meta_Ads.csv`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
    };

    const downloadTXT = () => {
        const { hooks, heads, prims, ctas } = generated;
        let txt = `${C.company} — Creative OS Export\n${'='.repeat(50)}\n\n`;
        txt += 'HOOKS\n' + '-'.repeat(30) + '\n'; hooks.forEach(h => { txt += `${h.id}. ${h.t}\n`; });
        txt += '\nHEADLINES\n' + '-'.repeat(30) + '\n'; heads.forEach(h => { txt += `${h.id}. ${h.t}\n`; });
        txt += '\nPRIMARY TEXTS\n' + '-'.repeat(30) + '\n'; prims.forEach(p => { txt += `${p.id}. ${p.t}\n\n`; });
        txt += '\nCTAs\n' + '-'.repeat(30) + '\n'; ctas.forEach(c => { txt += `${c.id}. ${c.t}\n`; });
        const blob = new Blob([txt], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `${C.company.replace(/\s+/g, '_')}_Copy_Doc.txt`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
    };

    return (
        <div className="view active">
            <div className="view-header"><h2>Export & Download</h2><p>Download your creatives in Meta Ads Manager bulk format</p></div>
            <div className="bk-grid">
                <div className="bk-card" style={{ textAlign: 'center' }}>
                    <h3>📊 Meta Ads CSV</h3>
                    <p style={{ color: 'var(--text-muted)', margin: '8px 0 16px' }}>{combos.length} ad combinations ready for bulk upload</p>
                    <button className="btn-generate" onClick={downloadCSV}>Download CSV</button>
                </div>
                <div className="bk-card" style={{ textAlign: 'center' }}>
                    <h3>📝 Copy Document</h3>
                    <p style={{ color: 'var(--text-muted)', margin: '8px 0 16px' }}>All hooks, headlines, primary texts & CTAs in one file</p>
                    <button className="btn-generate" onClick={downloadTXT}>Download TXT</button>
                </div>
            </div>
        </div>
    );
}
