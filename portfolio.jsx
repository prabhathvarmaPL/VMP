// portfolio.jsx — the main portfolio app (glass/liquid futuristic).

const PROFILE = {
  name: 'Viswa Mihir Pannala',
  firstName: 'Viswa Mihir',
  lastName: 'Pannala',
  role: 'Senior Product Manager',
  tagline: 'Vision. Execution. Scale.',
  bio: 'Building enterprise products at the intersection of AI and business.',
  email: 'viswamihir.p@gmail.com',
  phone: '+91 63045 27296',
  whatsapp: '+91 63045 27296',
  linkedin: 'https://www.linkedin.com/in/viswamihirpannala/',
  instagram: 'viswamihir_p',
  snapchat: 'viswamihir_p',
  photo: 'assets/viswa.png',
};

// ── SVG icons ───────────────────────────────────────────────────────────────
const Icon = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75ZM9.5 9.75H13.3v1.55h.06c.53-.94 1.83-1.93 3.77-1.93 4.04 0 4.79 2.66 4.79 6.11V21h-4v-4.94c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75Z"/>
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  snapchat: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c-3.2 0-5.4 2.4-5.4 5.5 0 .9.1 1.7.1 2.2-.5.3-1 .6-1.6.6-.5 0-.9-.2-1.2-.5l-.3-.2-.2.5c-.1.2-.1.3-.1.5 0 .8.9 1.4 1.9 1.8.3.1.7.2.7.5 0 .1-.1.4-.4.9-.7 1.5-2 2.4-3.3 2.7-.3.1-.4.2-.4.4 0 .6 1.4 1 2.4 1.1.1.2.2.7.3 1 .1.2.3.3.5.3.3 0 .8-.1 1.5-.1 1.2 0 1.6.3 2.7 1 .7.4 1.4.7 2.3.7h.1c.9 0 1.6-.3 2.3-.7 1.1-.7 1.5-1 2.7-1 .7 0 1.2.1 1.5.1.2 0 .4-.1.5-.3.1-.3.2-.8.3-1 1-.1 2.4-.5 2.4-1.1 0-.2-.1-.4-.4-.4-1.3-.3-2.6-1.2-3.3-2.7-.3-.5-.4-.8-.4-.9 0-.3.4-.4.7-.5 1-.4 1.9-1 1.9-1.8 0-.2-.1-.3-.1-.5l-.2-.5-.3.2c-.4.3-.8.5-1.2.5-.6 0-1.1-.3-1.6-.6 0-.5.1-1.3.1-2.2 0-3.1-2.2-5.5-5.4-5.5Z"/>
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2.1-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.5 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.7.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.4-.3ZM12 2.2C6.6 2.2 2.2 6.6 2.2 12c0 1.7.4 3.4 1.3 4.8L2.2 21.8l5.1-1.3c1.4.8 3 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2Zm0 17.9c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3c-.9-1.4-1.3-2.9-1.3-4.5 0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.6 8.3-8.1 8.3Z"/>
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  ),
  download: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  ),
  copy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="8" width="12" height="12" rx="2.5" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 5 5 9-10" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  ),
};

// ── Palettes ────────────────────────────────────────────────────────────────
const PALETTES = {
  vision:      { name: 'Vision',          bg: '#08070b', primary: '#E63DB6', secondary: '#F2902B', accent: '#2BBFC9', ink: '#F7F1F5', orbs: ['#E63DB6', '#F2902B', '#2BBFC9'] },
  cyanViolet:  { name: 'Cyan / Violet',   bg: '#06041a', primary: '#5BE7FF', secondary: '#B57BFF', accent: '#FF6BD6', ink: '#EAF2FF', orbs: ['#5BE7FF', '#B57BFF', '#FF6BD6'] },
  warmMagenta: { name: 'Magenta / Amber', bg: '#170614', primary: '#FF7AC6', secondary: '#FFB45A', accent: '#FF4D7E', ink: '#FFEEF5', orbs: ['#FF7AC6', '#FFB45A', '#FF4D7E'] },
  greenLime:   { name: 'Lime / Aqua',     bg: '#04140d', primary: '#7CFF9F', secondary: '#3FE0C2', accent: '#D8FF5E', ink: '#E8FFE8', orbs: ['#7CFF9F', '#3FE0C2', '#D8FF5E'] },
  iridescent:  { name: 'Iridescent',      bg: '#0a0822', primary: '#9AD8FF', secondary: '#FFB1F4', accent: '#FFE08A', ink: '#F4F0FF', orbs: ['#9AD8FF', '#FFB1F4', '#FFE08A'] },
  mono:        { name: 'Mono',            bg: '#0a0a0c', primary: '#FFFFFF', secondary: '#BBBBBB', accent: '#888888', ink: '#FFFFFF', orbs: ['#FFFFFF', '#AAAAAA', '#666666'] },
};

const FONT_STACKS = {
  instrument:   { name: 'Instrument Serif', display: '"Instrument Serif", Georgia, serif',  mono: '"JetBrains Mono", ui-monospace, monospace', google: 'Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500' },
  spaceGrotesk: { name: 'Space Grotesk',    display: '"Space Grotesk", system-ui, sans-serif', mono: '"JetBrains Mono", ui-monospace, monospace', google: 'Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500' },
  manrope:      { name: 'Manrope',          display: '"Manrope", system-ui, sans-serif',     mono: '"IBM Plex Mono", ui-monospace, monospace',  google: 'Manrope:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500' },
};

// ── vCard generation ────────────────────────────────────────────────────────
function buildVCard() {
  const v = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${PROFILE.lastName};${PROFILE.firstName};;;`,
    `FN:${PROFILE.name}`,
    `TITLE:${PROFILE.role}`,
    `EMAIL;TYPE=INTERNET:${PROFILE.email}`,
    `TEL;TYPE=CELL,VOICE:${PROFILE.phone}`,
    `URL;TYPE=LinkedIn:${PROFILE.linkedin}`,
    `URL;TYPE=Instagram:https://instagram.com/${PROFILE.instagram}`,
    `URL;TYPE=Snapchat:https://snapchat.com/add/${PROFILE.snapchat}`,
    `NOTE:${PROFILE.bio}`,
    'END:VCARD',
  ].join('\n');
  return v;
}

function downloadVCard() {
  const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Viswa-Mihir-Pannala.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

// ── Reactive pointer parallax ───────────────────────────────────────────────
function usePointer() {
  const [p, setP] = React.useState({ x: 0.5, y: 0.5 });
  React.useEffect(() => {
    const onMove = (e) => {
      const t = e.touches ? e.touches[0] : e;
      setP({ x: t.clientX / window.innerWidth, y: t.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
    };
  }, []);
  return p;
}

// ── Live clock in IST ──────────────────────────────────────────────────────
function useISTClock() {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  return fmt.format(now);
}

// ── Photo orb (with morph shape + liquid blob outline) ──────────────────────
const PhotoOrb = ({ shape, palette, pointer }) => {
  const clock = useISTClock();
  // Rotation amount based on pointer (subtle 3D tilt)
  const tiltX = (pointer.y - 0.5) * -10;
  const tiltY = (pointer.x - 0.5) * 10;

  const clip =
    shape === 'circle'
      ? 'circle(50% at 50% 50%)'
      : shape === 'hex'
      ? 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)'
      : 'url(#blobClip)';

  return (
    <div className="orb-wrap" style={{ transform: `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` }}>
      {/* Corner ticks framing the whole composition */}
      <span className="tick tick-tl" />
      <span className="tick tick-tr" />
      <span className="tick tick-bl" />
      <span className="tick tick-br" />

      {/* Concentric guide rings + orbital text */}
      <svg className="orb-rings" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="orbital-path" d="M 100,100 m -94,0 a 94,94 0 1,1 188,0 a 94,94 0 1,1 -188,0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.3" strokeDasharray="1 3" />
        <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.2" />
        {[0, 90, 180, 270].map((deg) => (
          <line
            key={deg}
            x1="100" y1="2" x2="100" y2="7"
            stroke="rgba(255,255,255,0.4)" strokeWidth="0.6"
            transform={`rotate(${deg} 100 100)`}
          />
        ))}
        <g className="orbital-text">
          <text fill="rgba(255,255,255,0.55)" fontSize="5.2" letterSpacing="2.8" fontFamily="'JetBrains Mono', monospace">
            <textPath href="#orbital-path" startOffset="0">
              VISWA · MIHIR · PANNALA &nbsp;·&nbsp; VISION · EXECUTION · SCALE &nbsp;·&nbsp;
            </textPath>
          </text>
        </g>
      </svg>

      {/* Animated glow halo */}
      <div className="orb-halo" style={{
        background: `conic-gradient(from 0deg, ${palette.primary}, ${palette.secondary}, ${palette.accent}, ${palette.primary})`,
      }} />
      <div className="orb-halo-2" style={{
        background: `radial-gradient(circle at 30% 30%, ${palette.primary}66, transparent 60%), radial-gradient(circle at 70% 70%, ${palette.accent}55, transparent 60%)`,
      }} />

      {/* SVG defs for blob clip path */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.02 C0.72,0.02 0.93,0.16 0.97,0.36 C1.02,0.58 0.92,0.78 0.74,0.9 C0.57,1.02 0.34,1.01 0.18,0.88 C0.02,0.74 -0.03,0.5 0.04,0.3 C0.11,0.12 0.28,0.02 0.5,0.02 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="orb-photo" style={{ clipPath: clip, WebkitClipPath: clip }}>
        <img src={PROFILE.photo} alt={PROFILE.name} draggable="false" />
      </div>

      {/* (decorative plates removed at user's request) */}
    </div>
  );
};

// ── Social card ─────────────────────────────────────────────────────────────
const SocialCard = ({ icon, label, handle, href, color }) => {
  const open = (e) => {
    e.preventDefault();
    // Force a new top-level window so preview iframes (which block embedding
    // of LinkedIn / Instagram / etc.) don't try to load the site inline.
    window.open(href, '_blank', 'noopener,noreferrer');
  };
  return (
    <a
      className="social-card"
      href={href}
      onClick={open}
      target="_blank"
      rel="noopener noreferrer"
      style={{ '--c': color }}
    >
      <span className="social-icon">{icon}</span>
      <span className="social-meta">
        <span className="social-label">{label}</span>
        <span className="social-handle">{handle}</span>
      </span>
      <span className="social-arrow">{Icon.arrow}</span>
    </a>
  );
};

// ── Defaults the user can tweak (parsed and rewritten on disk) ─────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "paletteKey": "vision",
  "background": "orbs",
  "photoShape": "circle",
  "motion": 35,
  "density": "regular",
  "fontKey": "instrument"
}/*EDITMODE-END*/;

// ── App root ────────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [copied, setCopied] = React.useState(null);
  const pointer = usePointer();

  const palette = PALETTES[t.paletteKey] || PALETTES.vision;
  const fonts = FONT_STACKS[t.fontKey] || FONT_STACKS.instrument;
  const intensity = t.motion / 100;

  // load chosen google font
  React.useEffect(() => {
    const id = 'gfont-' + t.fontKey;
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${fonts.google}&display=swap`;
    document.head.appendChild(link);
  }, [t.fontKey]);

  // density mapping
  const density = t.density === 'compact' ? 0.85 : t.density === 'comfy' ? 1.15 : 1;

  // copy helper
  const copyToClipboard = (key, text) => (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1400);
  };

  // CSS variable bag
  const rootStyle = {
    '--bg': palette.bg,
    '--ink': palette.ink,
    '--primary': palette.primary,
    '--secondary': palette.secondary,
    '--accent': palette.accent,
    '--font-display': fonts.display,
    '--font-mono': fonts.mono,
    '--density': density,
  };

  return (
    <div className="root" style={rootStyle}>
      <LiquidBackground mode={t.background} intensity={intensity} palette={palette.orbs} />

      {/* fixed grain + scanlines for texture */}
      <div className="texture" />
      {/* pointer-following spotlight */}
      <div
        className="spotlight"
        style={{
          background: `radial-gradient(600px circle at ${pointer.x * 100}% ${pointer.y * 100}%, ${palette.primary}1a, transparent 60%)`,
        }}
      />

      <header className="top-bar">
        <div className="brand">
          <span className="brand-mark" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }} />
          <span className="brand-text">VMP<span style={{ color: palette.primary }}>.</span></span>
        </div>
        <div className="top-tagline">{PROFILE.tagline}</div>
      </header>

      <main className="stage">
        <section className="hero">
          <div className="hero-left">
            <PhotoOrb shape={t.photoShape} palette={palette} pointer={pointer} />
          </div>

          <div className="hero-right">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">{PROFILE.role}</span>
            </div>

            <h1 className="display">
              <span className="display-line">Viswa Mihir</span>
              <span className="display-line outline">Pannala</span>
            </h1>

            <p className="bio">{PROFILE.bio}</p>

            <div className="cta-row">
              <button className="btn-primary" onClick={downloadVCard}>
                <span className="btn-bg" />
                <span className="btn-inner">
                  <span className="btn-icon">{Icon.download}</span>
                  <span>Save my contact</span>
                  <span className="btn-meta">.vcf</span>
                </span>
              </button>
              <a className="btn-ghost" href={`mailto:${PROFILE.email}`}>
                {Icon.mail}
                <span>Email me</span>
              </a>
            </div>
          </div>
        </section>

        <section className="socials">
          <div className="socials-header">
            <span className="socials-line" />
            <span className="socials-label">LET'S CATCH UP</span>
            <span className="socials-line" />
          </div>
          <div className="social-grid">
            <SocialCard
              icon={Icon.linkedin}
              label="LinkedIn"
              handle="in/viswamihirpannala"
              href={PROFILE.linkedin}
              color="#0A66C2"
            />
            <SocialCard
              icon={Icon.instagram}
              label="Instagram"
              handle={`@${PROFILE.instagram}`}
              href={`https://instagram.com/${PROFILE.instagram}`}
              color="#E1306C"
            />
            <SocialCard
              icon={Icon.snapchat}
              label="Snapchat"
              handle={PROFILE.snapchat}
              href={`https://snapchat.com/add/${PROFILE.snapchat}`}
              color="#FFFC00"
            />
            <SocialCard
              icon={Icon.whatsapp}
              label="WhatsApp"
              handle={PROFILE.whatsapp}
              href={`https://wa.me/${PROFILE.whatsapp.replace(/[^\d]/g, '')}`}
              color="#25D366"
            />
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>© 2026 · viswamihirpannala.com</span>
      </footer>

      {/* Toast */}
      {copied && (
        <div className="toast">{Icon.check}<span>{copied === 'phone' ? 'Phone' : 'Email'} copied</span></div>
      )}

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakColor
          label="Theme"
          value={[palette.primary, palette.secondary, palette.accent]}
          options={Object.keys(PALETTES).map(k => [PALETTES[k].primary, PALETTES[k].secondary, PALETTES[k].accent])}
          onChange={(arr) => {
            const idx = Object.keys(PALETTES).findIndex(k => PALETTES[k].primary === arr[0]);
            if (idx >= 0) setTweak('paletteKey', Object.keys(PALETTES)[idx]);
          }}
        />

        <TweakSection label="Background" />
        <TweakRadio
          label="Style"
          value={t.background}
          options={['orbs', 'waves', 'particles']}
          onChange={(v) => setTweak('background', v)}
        />
        <TweakSlider
          label="Motion intensity"
          value={t.motion}
          min={0}
          max={100}
          step={5}
          unit="%"
          onChange={(v) => setTweak('motion', v)}
        />

        <TweakSection label="Photo" />
        <TweakRadio
          label="Shape"
          value={t.photoShape}
          options={['circle', 'hex', 'blob']}
          onChange={(v) => setTweak('photoShape', v)}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)}
        />

        <TweakSection label="Typography" />
        <TweakSelect
          label="Font"
          value={t.fontKey}
          options={Object.keys(FONT_STACKS).map(k => ({ value: k, label: FONT_STACKS[k].name }))}
          onChange={(v) => setTweak('fontKey', v)}
        />
      </TweaksPanel>
    </div>
  );
}

window.PortfolioApp = App;
