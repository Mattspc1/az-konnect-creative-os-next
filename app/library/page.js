'use client';
export default function LibraryPage() {
    const imgs = [];
    for (let i = 1; i <= 6; i++) imgs.push({ f: `ads_square/ad_sq_0${i}_problem.png`, l: `Square #${i}` });
    return (
        <div className="view active">
            <div className="view-header"><h2>Asset Library</h2><p>Pre-generated creatives and templates</p></div>
            <div className="gallery-grid">
                {imgs.map((img, i) => (
                    <div key={i} className="gallery-item">
                        <img src={`/assets/${img.f}`} alt={img.l} loading="lazy" onError={(e) => { e.target.style.display = 'none' }} />
                        <div className="gallery-label">{img.l}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
