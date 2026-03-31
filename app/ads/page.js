'use client';
import { useState } from 'react';
import { useProject } from '@/lib/context';
import { AL, ANGLES, STYLES } from '@/lib/generators';

function AngleFilter({ active, onChange }) {
    return (
        <div className="filter-bar">
            {['all', ...ANGLES].map(a => (
                <button key={a} className={`f-pill ${active === a ? 'active' : ''}`} onClick={() => onChange(a)}>
                    {a === 'all' ? 'All' : AL[a]}
                </button>
            ))}
        </div>
    );
}

function copyText(t) {
    navigator.clipboard.writeText(t).catch(() => { });
}

export default function AdsPage() {
    const { project: C, generated } = useProject();
    const { hooks, heads, prims, ctas, combos } = generated;
    const [tab, setTab] = useState('hooks');
    const [angle, setAngle] = useState('all');
    const [adSize, setAdSize] = useState('all');
    const [adAngle, setAdAngle] = useState('all');

    const tabs = [
        { k: 'hooks', l: 'Hooks' }, { k: 'headlines', l: 'Headlines' },
        { k: 'primary', l: 'Primary Texts' }, { k: 'ctas', l: 'CTAs' },
        { k: 'html', l: 'HTML Ads' }, { k: 'combos', l: 'Combinations' },
        { k: 'stories', l: 'Storyboards' }
    ];

    const filteredHooks = angle === 'all' ? hooks : hooks.filter(h => h.a === angle);
    const filteredHeads = angle === 'all' ? heads : heads.filter(h => h.a === angle);
    const filteredPrims = angle === 'all' ? prims : prims.filter(p => p.a === angle);

    // HTML Ads
    const htmlSubs = [
        `${C.product}. ${C.metric}. ${C.result}. ${C.urgency}.`,
        `${C.solution} for ${C.audience?.toLowerCase()}. Results in days.`,
        `${C.result} — on complete autopilot. ${C.price}.`,
        `Stop ${C.old?.toLowerCase()}. Start winning. ${C.urgency}.`,
        `Built for ${C.audience?.toLowerCase()} who want real results.`,
        `${C.metric} automated. ${C.result}. Zero manual work.`,
        `The #1 ${C.solution} in ${C.niche}. ${C.price}.`,
        `Replace ${C.old?.toLowerCase()} with ${C.solution}. Live in ${C.urgency}.`,
        `${C.solution} by ${C.company}. ${C.price}. Money-back guarantee.`,
        `${C.product}: ${C.metric}. No contracts. No risk.`,
        `Trusted by top ${C.audience?.toLowerCase()} since 2020.`,
        `${C.result}. Week one. On autopilot. ${C.price}.`,
        `${C.solution} that works. ${C.price}. ${C.urgency}.`,
        `${C.metric}. ${C.result}. Money-back guarantee.`,
        `Scale faster with ${C.product}. ${C.urgency}.`,
        `Outperform the competition. ${C.metric}.`,
        `${C.solution} by ${C.company}. Live in ${C.urgency}.`,
        `From zero to ${C.result} in one week.`,
        `${C.product}: the ${C.solution} for ${C.niche}.`,
        `${C.audience} are switching to ${C.solution}.`,
        `${C.metric}. ${C.result}. Start now.`,
        `Why top performers chose ${C.product}.`,
        `The smart way to grow. ${C.urgency}. ${C.price}.`,
        `One week. ${C.result}. Guaranteed.`
    ];

    let htmlAds = [];
    for (let i = 0; i < 24; i++) {
        htmlAds.push({
            hook: hooks[i % hooks.length], style: STYLES[i % 6], vert: i >= 12,
            cta: ctas[i % ctas.length], sub: htmlSubs[i],
            angle: hooks[i % hooks.length]?.a, size: i >= 12 ? 'vertical' : 'square'
        });
    }
    if (adSize !== 'all') htmlAds = htmlAds.filter(a => a.size === adSize);
    if (adAngle !== 'all') htmlAds = htmlAds.filter(a => a.angle === adAngle);

    // Storyboards
    const storyboards = [
        { n: 'Stats Power', s1: { ts: '0:00–0:03', lb: 'Hook', tx: `${C.metric}. ${C.result}.` }, s2: { ts: '0:03–0:07', lb: 'Proof', tx: `Week one results with ${C.product}. All on autopilot.` }, s3: { ts: '0:07–0:12', lb: 'CTA', tx: `${C.price}. ${C.urgency}. Reserve your spot.` } },
        { n: 'Problem Agitation', s1: { ts: '0:00–0:03', lb: 'Hook', tx: `Still ${C.old?.toLowerCase()} in 2026?` }, s2: { ts: '0:03–0:07', lb: 'Agitate', tx: `Your competitors aren't waiting. They're using ${C.solution}.` }, s3: { ts: '0:07–0:12', lb: 'CTA', tx: `${C.product}. ${C.urgency}. See how it works.` } },
        { n: 'Before / After', s1: { ts: '0:00–0:03', lb: 'Before', tx: `Before: ${C.old}. Poor results.` }, s2: { ts: '0:03–0:07', lb: 'After', tx: `After ${C.product}: ${C.metric}. ${C.result}.` }, s3: { ts: '0:07–0:12', lb: 'CTA', tx: `Make the switch. ${C.price}. Money-back guarantee.` } },
        { n: 'Curiosity Loop', s1: { ts: '0:00–0:03', lb: 'Hook', tx: `Top 1% of ${C.audience?.toLowerCase()} don't do ${C.old?.toLowerCase()}.` }, s2: { ts: '0:03–0:07', lb: 'Reveal', tx: `Their weapon: ${C.product}. ${C.metric} automated.` }, s3: { ts: '0:07–0:10', lb: 'CTA', tx: `Discover it now. ${C.urgency}. ${C.price}.` } },
        { n: 'Social Proof', s1: { ts: '0:00–0:03', lb: 'Hook', tx: `${C.result}. Zero manual effort.` }, s2: { ts: '0:03–0:07', lb: 'Story', tx: `One client. One week. ${C.product}. On complete autopilot.` }, s3: { ts: '0:07–0:12', lb: 'CTA', tx: `Get Started. ${C.price}. ${C.urgency}.` } },
        { n: 'Urgency Close', s1: { ts: '0:00–0:03', lb: 'Hook', tx: `Only 7 spots left this month.` }, s2: { ts: '0:03–0:07', lb: 'Value', tx: `${C.metric}. ${C.result}. Go live in ${C.urgency}.` }, s3: { ts: '0:07–0:10', lb: 'CTA', tx: `Claim your spot. ${C.price}. Money-back guarantee.` } }
    ];

    return (
        <div className="view active">
            <div className="view-header"><h2>Ads Creative</h2><p>{C.company} — {C.product}</p></div>
            <div className="filter-bar">
                {tabs.map(t => <button key={t.k} className={`f-pill ${tab === t.k ? 'active' : ''}`} onClick={() => { setTab(t.k); setAngle('all'); }}>{t.l}</button>)}
            </div>

            {tab === 'hooks' && (<>
                <AngleFilter active={angle} onChange={setAngle} />
                <div className="card-grid">{filteredHooks.map(h => (
                    <div key={h.id} className="c-card" onClick={() => copyText(h.t)}>
                        <div className="c-card-head"><span className="c-card-num">Hook #{h.id}</span></div>
                        <div className="c-card-body">{h.t}</div>
                        <div className="c-card-foot"><span className={`tag tag-${h.a}`}>{AL[h.a]}</span></div>
                    </div>
                ))}</div>
            </>)}

            {tab === 'headlines' && (<>
                <AngleFilter active={angle} onChange={setAngle} />
                <div className="card-grid">{filteredHeads.map(h => (
                    <div key={h.id} className="c-card" onClick={() => copyText(h.t)}>
                        <div className="c-card-head"><span className="c-card-num">Headline #{h.id}</span></div>
                        <div className="c-card-body headline-style">{h.t}</div>
                        <div className="c-card-foot"><span className={`tag tag-${h.a}`}>{AL[h.a]}</span></div>
                    </div>
                ))}</div>
            </>)}

            {tab === 'primary' && (<>
                <AngleFilter active={angle} onChange={setAngle} />
                <div className="card-grid">{filteredPrims.map(p => (
                    <div key={p.id} className="c-card" onClick={() => copyText(p.t)}>
                        <div className="c-card-head"><span className="c-card-num">Primary #{p.id} · {p.l}</span></div>
                        <div className="c-card-body" style={{ whiteSpace: 'pre-wrap' }}>{p.t}</div>
                        <div className="c-card-foot"><span className={`tag tag-${p.a}`}>{AL[p.a]}</span><span className="tag tag-type">{p.l}</span></div>
                    </div>
                ))}</div>
            </>)}

            {tab === 'ctas' && (
                <div className="card-grid">{ctas.map(c => (
                    <div key={c.id} className="c-card" onClick={() => copyText(c.t)}>
                        <div className="c-card-head"><span className="c-card-num">CTA #{c.id} · {c.tp === 'lead' ? 'Lead Gen' : 'Traffic'}</span></div>
                        <div className="c-card-body headline-style">{c.t}</div>
                        <div className="c-card-foot"><span className="tag tag-type">{c.tp === 'lead' ? 'Lead Gen' : 'Traffic'}</span></div>
                    </div>
                ))}</div>
            )}

            {tab === 'html' && (<>
                <div className="filter-bar">
                    <div className="filter-group"><span className="filter-label">Size</span>
                        {['all', 'square', 'vertical'].map(s => <button key={s} className={`f-pill ${adSize === s ? 'active' : ''}`} onClick={() => setAdSize(s)}>{s === 'all' ? 'All' : s === 'square' ? '1:1 Square' : '4:5 Vertical'}</button>)}
                    </div>
                    <div className="filter-group"><span className="filter-label">Angle</span>
                        {['all', ...ANGLES].map(a => <button key={a} className={`f-pill ${adAngle === a ? 'active' : ''}`} onClick={() => setAdAngle(a)}>{a === 'all' ? 'All' : AL[a]}</button>)}
                    </div>
                </div>
                <div className="ad-grid">{htmlAds.map((a, i) => (
                    <div key={i} className={`ad-frame ${a.style} ${a.vert ? 'vertical' : ''}`}>
                        <div className="ad-dim">{a.vert ? '1080×1350' : '1080×1080'}</div>
                        <div className="ad-hook">{a.hook?.t}</div>
                        <div className="ad-sub">{a.sub}</div>
                        <div className="ad-cta">{a.cta?.t}</div>
                        <div className="ad-logo">{C.company}</div>
                    </div>
                ))}</div>
            </>)}

            {tab === 'combos' && (
                <div className="table-wrap"><table className="c-table"><thead><tr><th>Ad</th><th>Campaign</th><th>Hook</th><th>Headline</th><th>Primary</th><th>CTA</th><th>Angle</th></tr></thead>
                    <tbody>{combos.slice(0, 50).map(c => (
                        <tr key={c.id}><td className="id-cell">{c.name}</td><td>{c.camp}</td><td>{c.hook.substring(0, 50)}{c.hook.length > 50 ? '…' : ''}</td><td style={{ fontWeight: 600 }}>{c.head}</td><td>{c.prim.substring(0, 60)}…</td><td>{c.cta}</td><td><span className={`tag tag-${c.angle}`}>{AL[c.angle]}</span></td></tr>
                    ))}</tbody></table></div>
            )}

            {tab === 'stories' && (
                <div className="story-list">{storyboards.map((s, i) => (
                    <div key={i} className="story-card">
                        <div className="story-head">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div className="story-id">{i + 1}</div>
                                <div className="story-info"><div className="story-name">{s.n}</div><div className="story-dur">10–12s · Vertical 9:16</div></div>
                            </div>
                        </div>
                        <div className="story-timeline">
                            {[s.s1, s.s2, s.s3].map((sc, j) => (
                                <div key={j} className="story-scene"><div className="scene-ts">{sc.ts}</div><div className="scene-label">{sc.lb}</div><div className="scene-copy">{sc.tx}</div></div>
                            ))}
                        </div>
                    </div>
                ))}</div>
            )}
        </div>
    );
}
