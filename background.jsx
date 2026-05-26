// background.jsx — animated liquid/particle/wave background.
// Renders to a full-bleed <canvas>; mode + intensity + palette come from props.

const LiquidBackground = ({ mode = 'orbs', intensity = 0.75, palette }) => {
  const canvasRef = React.useRef(null);
  const stateRef = React.useRef({ orbs: [], particles: [], t: 0, raf: 0 });
  const propsRef = React.useRef({ mode, intensity, palette });
  propsRef.current = { mode, intensity, palette };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const s = stateRef.current;
      s.orbs = Array.from({ length: 4 }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 280 + Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        hueIdx: i % 3,
        phase: Math.random() * Math.PI * 2,
      }));
      s.particles = Array.from({ length: 70 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.3 + Math.random() * 0.7,
        vy: 0.05 + Math.random() * 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        r: 0.4 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const drawOrbs = (t) => {
      const { intensity, palette } = propsRef.current;
      const speed = 0.0002 + intensity * 0.0009;
      ctx.globalCompositeOperation = 'lighter';
      const s = stateRef.current;
      for (const o of s.orbs) {
        o.x += o.vx * intensity * 1.5;
        o.y += o.vy * intensity * 1.5;
        o.phase += speed;
        if (o.x < -o.r) o.x = w + o.r;
        if (o.x > w + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = h + o.r;
        if (o.y > h + o.r) o.y = -o.r;
        const breath = 0.85 + Math.sin(o.phase) * 0.15;
        const r = o.r * breath;
        const color = palette[o.hueIdx % palette.length];
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, r);
        grad.addColorStop(0, hexA(color, 0.14));
        grad.addColorStop(0.4, hexA(color, 0.04));
        grad.addColorStop(1, hexA(color, 0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(o.x, o.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    };

    const drawWaves = (t) => {
      const { intensity, palette } = propsRef.current;
      ctx.globalCompositeOperation = 'lighter';
      const layers = 4;
      for (let i = 0; i < layers; i++) {
        const color = palette[i % palette.length];
        const yBase = h * (0.35 + i * 0.13);
        const amp = 80 + i * 36;
        const freq = 0.0028 + i * 0.0006;
        const phase = t * (0.0004 + intensity * 0.0012) + i * 1.7;
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 6) {
          const y =
            yBase +
            Math.sin(x * freq + phase) * amp +
            Math.sin(x * freq * 2.3 + phase * 1.6) * amp * 0.4;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, yBase - amp, 0, h);
        grad.addColorStop(0, hexA(color, 0.32));
        grad.addColorStop(1, hexA(color, 0));
        ctx.fillStyle = grad;
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    };

    const drawParticles = (t) => {
      const { intensity, palette } = propsRef.current;
      const s = stateRef.current;
      ctx.globalCompositeOperation = 'lighter';
      // soft ambient orbs behind particles
      for (let i = 0; i < 3; i++) {
        const cx = w * (0.2 + i * 0.3);
        const cy = h * (0.3 + Math.sin(t * 0.0004 + i) * 0.15);
        const r = 360;
        const color = palette[i % palette.length];
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, hexA(color, 0.22));
        g.addColorStop(1, hexA(color, 0));
        ctx.fillStyle = g;
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
      }
      for (const p of s.particles) {
        p.x += p.vx * intensity * 2 + Math.sin((t + p.phase * 1000) * 0.0006) * 0.2;
        p.y -= p.vy * intensity * 2;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        const color = palette[Math.floor(p.z * palette.length) % palette.length];
        const r = p.r * (1 + p.z);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6);
        g.addColorStop(0, hexA(color, 0.9 * p.z));
        g.addColorStop(1, hexA(color, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = hexA('#ffffff', 0.85 * p.z);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    };

    const tick = () => {
      const s = stateRef.current;
      s.t += 16;
      // trail-fade instead of clear → silky liquid motion
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(8, 7, 11, 0.28)';
      ctx.fillRect(0, 0, w, h);
      const m = propsRef.current.mode;
      if (m === 'orbs') drawOrbs(s.t);
      else if (m === 'waves') drawWaves(s.t);
      else if (m === 'particles') drawParticles(s.t);
      s.raf = requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    tick();

    return () => {
      cancelAnimationFrame(stateRef.current.raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

// hex (#rrggbb) + alpha → rgba()
function hexA(hex, a) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

window.LiquidBackground = LiquidBackground;
