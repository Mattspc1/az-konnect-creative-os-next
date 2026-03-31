'use client';
import { useProject } from '@/lib/context';

export default function BrandKitPage() {
    const { project: C } = useProject();
    return (
        <div className="view active">
            <div className="view-header"><h2>Brand Kit</h2><p>{C.company} identity system</p></div>
            <div className="bk-grid">
                <div className="bk-card"><h3>Brand Identity</h3>
                    <div className="bk-row"><div className="bk-label">Company</div><div className="bk-value">{C.company}</div></div>
                    <div className="bk-row"><div className="bk-label">Product</div><div className="bk-value">{C.product}</div></div>
                    <div className="bk-row"><div className="bk-label">Niche</div><div className="bk-value">{C.niche}</div></div>
                    <div className="bk-row"><div className="bk-label">Tone</div><div className="bk-value">{C.tone}</div></div>
                    <div className="bk-row"><div className="bk-label">Primary Color</div><div className="bk-value"><span className="color-swatch" style={{ background: C.color, display: 'inline-block', width: 16, height: 16, borderRadius: 4, marginRight: 8, verticalAlign: 'middle' }} />{C.color}</div></div>
                </div>
                <div className="bk-card"><h3>Target Audience</h3>
                    <div className="bk-row"><div className="bk-label">Who</div><div className="bk-value">{C.audience}</div></div>
                    <div className="bk-row"><div className="bk-label">Pain Point</div><div className="bk-value">{C.old}</div></div>
                    <div className="bk-row"><div className="bk-label">Solution</div><div className="bk-value">{C.solution}</div></div>
                </div>
                <div className="bk-card"><h3>Messaging Framework</h3>
                    <div className="bk-row"><div className="bk-label">Key Metric</div><div className="bk-value">{C.metric}</div></div>
                    <div className="bk-row"><div className="bk-label">Key Result</div><div className="bk-value">{C.result}</div></div>
                    <div className="bk-row"><div className="bk-label">Price / Offer</div><div className="bk-value">{C.price}</div></div>
                    <div className="bk-row"><div className="bk-label">Urgency</div><div className="bk-value">{C.urgency}</div></div>
                </div>
            </div>
        </div>
    );
}
