// ═══ AZ KONNECT CREATIVE OS — CONTENT GENERATORS ═══

export const ANGLES = ['problem', 'curiosity', 'authority', 'social', 'urgency'];
export const AL = { problem: 'Problem', curiosity: 'Curiosity', authority: 'Authority', social: 'Social Proof', urgency: 'Urgency' };
export const STYLES = ['as-1', 'as-2', 'as-3', 'as-4', 'as-5', 'as-6'];

export function genHooks(C) {
    const a = C.audience.toLowerCase(), o = C.old.toLowerCase(), s1 = a.endsWith('ies') ? a.slice(0, -3) + 'y' : a.endsWith('s') ? a.slice(0, -1) : a;
    return [
        { id: 1, t: `You're still using ${o} in 2026? There's a better way.`, a: 'problem' },
        { id: 2, t: `${C.old} is costing you time, money, and results. Here's the fix.`, a: 'problem' },
        { id: 3, t: `Your current approach is broken. Here's what ${C.price} gets you instead.`, a: 'problem' },
        { id: 4, t: `Stop wasting resources on ${o} that doesn't deliver.`, a: 'problem' },
        { id: 5, t: `You're falling behind the ${s1} who switched to ${C.solution}.`, a: 'problem' },
        { id: 6, t: `${C.old} is dead. ${C.solution} is the new standard.`, a: 'problem' },
        { id: 7, t: `What happens when you achieve ${C.metric} in 7 days?`, a: 'curiosity' },
        { id: 8, t: `This ${s1} ditched ${o} 6 months ago. Never been busier.`, a: 'curiosity' },
        { id: 9, t: `The top 1% of ${a} don't use ${o}. Here's what they do instead.`, a: 'curiosity' },
        { id: 10, t: `We tested ${C.solution} against ${o}. The results were extraordinary.`, a: 'curiosity' },
        { id: 11, t: `What if ${C.product} could handle ${o} for you automatically?`, a: 'curiosity' },
        { id: 12, t: `There's a smarter way to get results — and it doesn't involve ${o}.`, a: 'curiosity' },
        { id: 13, t: `Built by a team that's helped ${a} succeed since 2020.`, a: 'authority' },
        { id: 14, t: `The ${C.solution} trusted by leading ${a}.`, a: 'authority' },
        { id: 15, t: `${C.product} uses the same strategies as top-performing ${a}.`, a: 'authority' },
        { id: 16, t: `We've helped hundreds of ${a} move beyond ${o}. Here's how.`, a: 'authority' },
        { id: 17, t: `${C.solution} outperforms ${o} by 3x. The data proves it.`, a: 'authority' },
        { id: 18, t: `From the team that's driven massive results for ${a}.`, a: 'authority' },
        { id: 19, t: `${C.metric}. ${C.result}. Week one.`, a: 'social' },
        { id: 20, t: `One ${s1} achieved ${C.result} — completely on autopilot.`, a: 'social' },
        { id: 21, t: `${C.product} delivers ${C.result} faster than you'd think possible.`, a: 'social' },
        { id: 22, t: `Real ${a}. Real results. Zero ${o}.`, a: 'social' },
        { id: 23, t: `See how one ${s1} went from ${o} to ${C.result}.`, a: 'social' },
        { id: 24, t: `From struggling with ${o} to achieving ${C.result}. Here's the story.`, a: 'social' },
        { id: 25, t: `Only 7 spots left for ${C.product} this month.`, a: 'urgency' },
        { id: 26, t: `${C.urgency}. Money-back guarantee.`, a: 'urgency' },
        { id: 27, t: `The market is shifting. Your competitors are switching to ${C.solution}.`, a: 'urgency' },
        { id: 28, t: `Every day you wait on ${o}, your competitors using ${C.solution} pull ahead.`, a: 'urgency' },
        { id: 29, t: `Limited spots available. ${C.urgency}. Don't wait.`, a: 'urgency' },
        { id: 30, t: `${C.urgency}. If ${C.product} doesn't deliver, you pay nothing.`, a: 'urgency' }
    ];
}

export function genHeads(C) {
    return [
        { id: 1, t: `Stop ${C.old}. Start Winning.`, a: 'problem' },
        { id: 2, t: `${C.old} Is Holding You Back`, a: 'problem' },
        { id: 3, t: `Replace ${C.old} with ${C.solution}`, a: 'problem' },
        { id: 4, t: `Still Doing Things the Hard Way?`, a: 'problem' },
        { id: 5, t: `End ${C.old} Forever`, a: 'problem' },
        { id: 6, t: `The High Cost of ${C.old}`, a: 'problem' },
        { id: 7, t: `The ${C.solution} That Works While You Focus`, a: 'curiosity' },
        { id: 8, t: `What ${C.metric} Looks Like in 1 Week`, a: 'curiosity' },
        { id: 9, t: `Top ${C.audience} Stopped ${C.old}. Here's Why.`, a: 'curiosity' },
        { id: 10, t: `Your Next Win Is One Decision Away`, a: 'curiosity' },
        { id: 11, t: `The Secret Behind Top Performers`, a: 'curiosity' },
        { id: 12, t: `${C.solution} Just Changed Everything`, a: 'curiosity' },
        { id: 13, t: `Trusted by Top ${C.audience} in ${C.niche}`, a: 'authority' },
        { id: 14, t: `Helping ${C.niche} Succeed Since 2020`, a: 'authority' },
        { id: 15, t: `The #1 ${C.solution} Built for ${C.niche}`, a: 'authority' },
        { id: 16, t: `Professional-Grade ${C.solution}. Fair Pricing.`, a: 'authority' },
        { id: 17, t: `Built by Experts. Powered by Results.`, a: 'authority' },
        { id: 18, t: `The ${C.solution} Used by Top Performers`, a: 'authority' },
        { id: 19, t: `${C.result} in 7 Days`, a: 'social' },
        { id: 20, t: `${C.metric}. Zero Effort. Real Results.`, a: 'social' },
        { id: 21, t: `From Zero to ${C.result} in One Week`, a: 'social' },
        { id: 22, t: `Real Results in ${C.niche}`, a: 'social' },
        { id: 23, t: `${C.solution} Outperforms 3 to 1`, a: 'social' },
        { id: 24, t: `Real People. Real Results. Proven.`, a: 'social' },
        { id: 25, t: `Limited Spots. Go Live in ${C.urgency}`, a: 'urgency' },
        { id: 26, t: `The Market Waits for No One`, a: 'urgency' },
        { id: 27, t: `Lock In ${C.product} Before Spots Fill`, a: 'urgency' },
        { id: 28, t: `${C.urgency} to Your First Win`, a: 'urgency' },
        { id: 29, t: `Money-Back Guarantee. Zero Risk.`, a: 'urgency' },
        { id: 30, t: `Don't Let Another Opportunity Slip Away`, a: 'urgency' }
    ];
}

export function genPrims(C) {
    return [
        { id: 1, t: `Stop wasting time on ${C.old.toLowerCase()}. ${C.product} does the heavy lifting — ${C.metric} on complete autopilot. ${C.price}.`, a: 'problem', l: 'short' },
        { id: 2, t: `${C.old} wastes your time and kills your momentum. By the time you see results, it's too late.\n\n${C.product} uses ${C.solution} to deliver ${C.metric} — automatically.\n\n${C.result}. All on autopilot.`, a: 'problem', l: 'medium' },
        { id: 3, t: `${C.old} is broken. Wasted hours, poor results, and zero scalability.\n\n${C.product} delivers ${C.metric} with ${C.solution}:\n- Fully automated workflow\n- Intelligent optimization\n- Real-time tracking\n- Seamless integration\n- Live in ${C.urgency}\n\n${C.price}. No contracts. Money-back guarantee.`, a: 'problem', l: 'long' },
        { id: 4, t: `The top 1% of ${C.audience.toLowerCase()} don't rely on ${C.old.toLowerCase()}. They use ${C.solution} to hit ${C.metric} — achieving ${C.result} without lifting a finger.`, a: 'curiosity', l: 'short' },
        { id: 5, t: `We built ${C.product} to replace ${C.old.toLowerCase()} entirely.\n\n${C.metric}\n${C.result}\nResults in week one\n\nNo manual effort. Pure ${C.solution}. Live in ${C.urgency}. Money-back guarantee.`, a: 'curiosity', l: 'medium' },
        { id: 6, t: `What if you could forget about ${C.old.toLowerCase()} forever?\n\n${C.product} leverages ${C.solution} to deliver ${C.metric} automatically. Go live in ${C.urgency} and watch the results roll in.\n\n${C.price}. Money-back guarantee.`, a: 'curiosity', l: 'long' },
        { id: 7, t: `${C.company} has helped ${C.audience.toLowerCase()} succeed since 2020. Our latest: ${C.product} — ${C.solution} at a fraction of the cost. ${C.price}. ${C.urgency}.`, a: 'authority', l: 'short' },
        { id: 8, t: `${C.product} is built by experts who understand ${C.audience.toLowerCase()}. We've analyzed what works and built ${C.solution} that delivers.\n\n${C.metric}. ${C.result}. All automated.`, a: 'authority', l: 'medium' },
        { id: 9, t: `Most ${C.old.toLowerCase()} fails because it can't scale. We studied what top-performing ${C.audience.toLowerCase()} do differently and built ${C.product}.\n\n${C.solution}\nFully automated\nReal-time optimization\nSeamless integration\nLive in ${C.urgency}\n\n${C.price}. Money-back guarantee.`, a: 'authority', l: 'long' },
        { id: 10, t: `${C.metric}. ${C.result}. All in 7 days with ${C.product}.\n\n${C.price}. ${C.urgency}. Money-back guarantee.`, a: 'social', l: 'short' },
        { id: 11, t: `BEFORE:\n- Wasting hours on ${C.old.toLowerCase()}\n- Inconsistent results\n- Falling behind competitors\n\nAFTER ${C.product}:\n- ${C.metric}\n- ${C.result}\n- Fully automated with ${C.solution}\n\n${C.price}. No contracts.`, a: 'social', l: 'medium' },
        { id: 12, t: `We don't ask you to trust us. We ask you to test us.\n\nGo live with ${C.product} in ${C.urgency}. See ${C.result} for yourself.\n\nIf it doesn't deliver? Full refund. That's the ${C.product} promise.`, a: 'social', l: 'long' },
        { id: 13, t: `Only 7 spots left for ${C.product} this month.\n\n${C.price}. ${C.urgency}. Money-back guarantee.\n\nSecure your spot now.`, a: 'urgency', l: 'short' },
        { id: 14, t: `Every day you stick with ${C.old.toLowerCase()}:\n- You lose ground to competitors\n- Results stay flat\n- Opportunities slip away\n\nMeanwhile ${C.product} users: ${C.metric}, ${C.result}, on autopilot.\n\n${C.price}. ${C.urgency}. 7 spots left.`, a: 'urgency', l: 'medium' },
        { id: 15, t: `Last call: 3 spots remaining for ${C.product}.\n\n${C.metric}. ${C.result}. ${C.urgency}. ${C.price}. Money-back guarantee.\n\nAfter this, you're on the waitlist.`, a: 'urgency', l: 'long' }
    ];
}

export function genCTAs(C) {
    return [
        { id: 1, t: 'Reserve Your Spot — Only 7 Left', tp: 'lead' },
        { id: 2, t: 'Book a Free Demo Call', tp: 'lead' },
        { id: 3, t: `Get Started — Go Live in ${C.urgency}`, tp: 'lead' },
        { id: 4, t: 'Claim Your Spot Now', tp: 'lead' },
        { id: 5, t: `See ${C.product} in Action`, tp: 'traffic' },
        { id: 6, t: `Learn How ${C.solution} Delivers ${C.result}`, tp: 'traffic' },
        { id: 7, t: 'Watch the 2-Minute Demo', tp: 'traffic' },
        { id: 8, t: `Test ${C.product} Live`, tp: 'traffic' },
        { id: 9, t: `See How ${C.audience} Are Winning`, tp: 'traffic' },
        { id: 10, t: 'Book a Zero-Pressure Strategy Call', tp: 'lead' }
    ];
}

export function genCombos(hooks, heads, prims, ctas, C, n = 100) {
    const c = []; const u = new Set(); let at = 0;
    while (c.length < n && at < n * 10) {
        at++;
        const h = hooks[Math.floor(Math.random() * hooks.length)];
        const hl = heads[Math.floor(Math.random() * heads.length)];
        const p = prims[Math.floor(Math.random() * prims.length)];
        const ct = ctas[Math.floor(Math.random() * ctas.length)];
        const k = `${h.id}-${hl.id}-${p.id}-${ct.id}`;
        if (u.has(k)) continue;
        u.add(k);
        c.push({
            id: c.length + 1,
            camp: `${C.company.replace(/\s+/g, '_').toUpperCase()}_${h.a.toUpperCase()}`,
            set: `${h.a.toUpperCase()}_BROAD`,
            name: `AD_${String(c.length + 1).padStart(3, '0')}`,
            hook: h.t, head: hl.t, prim: p.t, cta: ct.t,
            ctaType: ct.tp === 'lead' ? 'SIGN_UP' : 'LEARN_MORE',
            angle: h.a
        });
    }
    return c;
}

export function generateAll(C) {
    const hooks = genHooks(C);
    const heads = genHeads(C);
    const prims = genPrims(C);
    const ctas = genCTAs(C);
    const combos = genCombos(hooks, heads, prims, ctas, C, 100);
    return { hooks, heads, prims, ctas, combos };
}
