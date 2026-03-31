'use client';
import { useState } from 'react';
import { useProject } from '@/lib/context';

function ContentCard({ platform, ratio, hook, body, visual, cta }) {
    return (
        <div className="c-card content-card">
            <div className="c-card-head"><span className="tag tag-type">{platform}</span><span className="c-card-num">{ratio}</span></div>
            <div className="c-card-body">
                <div className="content-hook">{hook}</div>
                <div className="content-body" style={{ whiteSpace: 'pre-wrap' }}>{body}</div>
                {visual && <div className="content-visual"><strong>Visual:</strong> {visual}</div>}
            </div>
            <div className="c-card-foot"><span className="content-cta">{cta}</span></div>
        </div>
    );
}

export default function ContentPage() {
    const { project: C } = useProject();
    const [tab, setTab] = useState('ig-posts');
    const tabs = [
        { k: 'ig-posts', l: 'IG Posts' }, { k: 'ig-stories', l: 'IG Stories' },
        { k: 'ig-carousels', l: 'Carousels' }, { k: 'linkedin', l: 'LinkedIn' },
        { k: 'blog', l: 'Blog' }, { k: 'captions', l: 'Captions' }
    ];

    const igPosts = [
        { h: `${C.old} is dead.`, b: `${C.audience} who still rely on ${C.old?.toLowerCase()} are falling behind. ${C.product} delivers ${C.metric} — on autopilot. No hassle. No wasted effort. Just results.`, v: 'Clean dark background, bold white text overlay, brand accent stripe', cta: 'Link in bio for a free demo' },
        { h: `${C.result}. Week one.`, b: `That's not a goal. That's what ${C.product} delivered in 7 days. ${C.solution} that works while you focus on what matters.`, v: 'Split screen: left side shows old way, right side shows automated results dashboard', cta: `DM "${C.company}" to learn more` },
        { h: `The top 1% don't work harder.`, b: `They work smarter. ${C.product} handles ${C.metric} so you can focus on growth. ${C.price}. ${C.urgency}.`, v: 'Minimalist design with a single compelling stat centered, brand colors', cta: 'Book your demo today' },
        { h: `Your competitor just hit ${C.result}.`, b: `They didn't grind harder. They switched to ${C.solution}. ${C.product} gives you the same edge. ${C.price}. Money-back guarantee.`, v: 'Dark gradient background with urgency-style countdown', cta: 'Tap the link before spots fill' },
        { h: `We replaced ${C.old?.toLowerCase()} entirely.`, b: `${C.metric}. ${C.result}. ${C.urgency} to go live. The future of ${C.niche?.toLowerCase()} is here with ${C.product}.`, v: 'Futuristic visual with data streams, dark background, brand color glow', cta: 'See it in action — link in bio' }
    ];

    const igStories = [
        { h: `Still doing ${C.old?.toLowerCase()}?`, b: `Swipe to see what ${C.solution} looks like in 2026.`, v: 'Slide 1: Bold question. Slide 2: Before/after. Slide 3: CTA with swipe-up', cta: 'Swipe up to book a demo' },
        { h: `${C.result} in 7 days.`, b: `No ${C.old?.toLowerCase()}. No manual work. Just ${C.product}.`, v: 'Full-screen stat with animated counter effect, dark bg, brand color text', cta: 'Tap to learn more' },
        { h: `POV: You switched to ${C.solution}`, b: `Your results tomorrow: incredible. Your effort: minimal. ${C.product} — ${C.price}.`, v: 'Screenshot-style mockup of results dashboard, clean and premium', cta: 'DM us to get started' }
    ];

    const carousels = [
        { h: `The ${C.solution} Playbook`, b: `Slide 1: The problem — ${C.old} is broken\nSlide 2: The solution — ${C.product}\nSlide 3: Feature 1 — ${C.metric} automated\nSlide 4: Feature 2 — ${C.result}\nSlide 5: CTA — ${C.price}. ${C.urgency}.`, v: '5-slide carousel, dark bg, brand color accents, one idea per slide', cta: 'Save this post' }
    ];

    const linkedin = [
        { h: `I stopped ${C.old?.toLowerCase()} 6 months ago.`, b: `Best decision I ever made.\n\n→ Switched to ${C.product}\n→ ${C.metric} in week one\n→ ${C.result} automatically\n→ Zero manual effort\n\nThe old playbook is dead. ${C.solution} is the new standard.\n\nIf you're still grinding through ${C.old?.toLowerCase()}, there's a better way.\n\n${C.price}. ${C.urgency}. Money-back guarantee.`, v: 'Text-first format. Optional: clean stat graphic.', cta: 'Comment "info" and I\'ll send you the details' },
        { h: `Unpopular opinion: ${C.old} shouldn't exist in 2026.`, b: `There. I said it.\n\nWhen you can achieve ${C.metric} with ${C.solution}, and get ${C.result} — why would anyone do it the old way?\n\n${C.product} is changing ${C.niche?.toLowerCase()} forever.\n\nAnd no, this isn't a pitch. It's math.\n\n${C.price}. ${C.urgency}. Full refund if it doesn't work.`, v: 'Optional: simple comparison infographic', cta: 'DM me for a walkthrough' }
    ];

    const blog = [
        { h: `How ${C.solution} Is Replacing ${C.old} in ${C.niche}`, b: `Introduction: The problem with ${C.old?.toLowerCase()} in 2026.\n\nSection 1: Why ${C.old?.toLowerCase()} fails — time, cost, and poor results.\n\nSection 2: The rise of ${C.solution} — how ${C.product} delivers ${C.metric} automatically.\n\nSection 3: Real results — ${C.result} in the first week.\n\nSection 4: How ${C.product} works — setup in ${C.urgency}, full integration, automated workflow.\n\nConclusion: The math is clear. ${C.price}. Money-back guarantee.`, v: 'Hero image: split-screen comparison of old way vs new way. 16:9 ratio. Dark, premium.', cta: `Try ${C.product} free — ${C.urgency} setup` }
    ];

    const captions = [
        { h: `${C.old?.toLowerCase()} is dead.`, b: `${C.solution} for ${C.audience?.toLowerCase()} → ${C.metric}, ${C.result}. ${C.price}.`, v: '', cta: 'Link in bio' },
        { h: `POV: You switched to ${C.product}`, b: `Results: ${C.metric}. ${C.result}. ${C.urgency}. Zero effort.`, v: '', cta: `DM "${C.company}"` },
        { h: `Why top 1% chose ${C.solution}`, b: `Not just a tool. A system. ${C.product} delivers ${C.result} on autopilot. ${C.price}.`, v: '', cta: 'Book a demo' }
    ];

    const activeData = { 'ig-posts': igPosts, 'ig-stories': igStories, 'ig-carousels': carousels, 'linkedin': linkedin, 'blog': blog, 'captions': captions }[tab] || [];
    const platformLabel = { 'ig-posts': 'Instagram', 'ig-stories': 'IG Story', 'ig-carousels': 'Carousel', 'linkedin': 'LinkedIn', 'blog': 'Blog', 'captions': 'Caption' }[tab] || '';
    const ratioLabel = { 'ig-posts': '1:1', 'ig-stories': '9:16', 'ig-carousels': '1:1 × 5', 'linkedin': 'Text-first', 'blog': '16:9', 'captions': 'Universal' }[tab] || '';

    return (
        <div className="view active">
            <div className="view-header"><h2>Content Creation</h2><p>{C.company} — Multi-platform content</p></div>
            <div className="filter-bar">
                {tabs.map(t => <button key={t.k} className={`f-pill ${tab === t.k ? 'active' : ''}`} onClick={() => setTab(t.k)}>{t.l}</button>)}
            </div>
            <div className="card-grid">
                {activeData.map((p, i) => <ContentCard key={i} platform={platformLabel} ratio={ratioLabel} hook={p.h} body={p.b} visual={p.v} cta={p.cta} />)}
            </div>
        </div>
    );
}
