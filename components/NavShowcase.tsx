/**
 * NavShowcase — 10 dark navbar design concepts for Leo to review.
 * Each variant is a fully self-contained strip with its own styles.
 * Pick the one you like and we'll port it into Header.tsx + Header.module.css.
 */

const navLinks = ['Home', 'About', 'Projects', 'Prototypes']

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design 1 — Vercel-style: pill container, frosted glass, animated bg pill   */
/* ─────────────────────────────────────────────────────────────────────────── */
function Nav1() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem', height: '60px',
      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <span style={{ fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '0.02em' }}>Rasile</span>
      <div style={{ display: 'flex', gap: '0', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '4px' }}>
        {navLinks.map((l, i) => (
          <span key={l} style={{
            padding: '6px 14px', fontSize: '0.8rem', fontWeight: 500, borderRadius: '6px', cursor: 'pointer',
            background: i === 0 ? 'rgba(255,255,255,0.1)' : 'transparent',
            color: i === 0 ? '#fff' : 'rgba(255,255,255,0.5)',
          }}>{l}</span>
        ))}
      </div>
      <a style={{
        padding: '7px 16px', background: '#fff', color: '#000', borderRadius: '6px',
        fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
      }}>Get in touch</a>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design 2 — Linear-style: pure black, spaced caps label links, indigo CTA   */
/* ─────────────────────────────────────────────────────────────────────────── */
function Nav2() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2.5rem', height: '56px',
      background: '#000',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>RASILE</span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {navLinks.map((l, i) => (
          <span key={l} style={{
            fontSize: '0.78rem', fontWeight: 500, cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase',
            color: i === 0 ? '#fff' : 'rgba(255,255,255,0.4)',
          }}>{l}</span>
        ))}
      </div>
      <a style={{
        padding: '7px 18px', background: '#5b5ef4', color: '#fff', borderRadius: '6px',
        fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
      }}>Get in touch</a>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design 3 — Resend-style: dark gray bg, dot separator, outlined CTA          */
/* ─────────────────────────────────────────────────────────────────────────── */
function Nav3() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem', height: '58px',
      background: '#0a0a0a',
      borderBottom: '1px solid #1f1f1f',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '4px' }} />
        <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff' }}>Rasile</span>
      </div>
      <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
        {navLinks.map((l, i) => (
          <span key={l} style={{
            padding: '5px 12px', fontSize: '0.82rem', fontWeight: 400, cursor: 'pointer', borderRadius: '4px',
            color: i === 0 ? '#fff' : '#6b6b6b',
          }}>{l}</span>
        ))}
      </div>
      <a style={{
        padding: '6px 16px', background: 'transparent', color: '#fff',
        border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px',
        fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none',
      }}>Get in touch</a>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design 4 — Raycast-style: neon-orange accent, bold wordmark, glow CTA       */
/* ─────────────────────────────────────────────────────────────────────────── */
function Nav4() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2.5rem', height: '60px',
      background: '#111',
      borderBottom: '1px solid #1e1e1e',
    }}>
      <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff', letterSpacing: '-0.02em' }}>Rasile<span style={{ color: '#ff6640' }}>.</span></span>
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {navLinks.map((l, i) => (
          <span key={l} style={{
            padding: '6px 13px', fontSize: '0.83rem', fontWeight: i === 0 ? 600 : 400, cursor: 'pointer', borderRadius: '6px',
            color: i === 0 ? '#fff' : 'rgba(255,255,255,0.45)',
            background: i === 0 ? 'rgba(255,102,64,0.1)' : 'transparent',
          }}>{l}</span>
        ))}
      </div>
      <a style={{
        padding: '7px 18px', background: '#ff6640', color: '#fff', borderRadius: '8px',
        fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none',
        boxShadow: '0 0 16px rgba(255,102,64,0.35)',
      }}>Get in touch</a>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design 5 — Stripe-style: very dark navy, medium-weight links, gradient CTA */
/* ─────────────────────────────────────────────────────────────────────────── */
function Nav5() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2.5rem', height: '64px',
      background: '#0d1117',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff', fontStyle: 'italic' }}>Rasile</span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {navLinks.map((l, i) => (
          <span key={l} style={{
            fontSize: '0.875rem', fontWeight: 400, cursor: 'pointer',
            color: i === 0 ? '#e6edf3' : '#8b949e',
          }}>{l}</span>
        ))}
      </div>
      <a style={{
        padding: '7px 18px',
        background: 'linear-gradient(135deg, #635bff, #a78bfa)',
        color: '#fff', borderRadius: '20px',
        fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
      }}>Get in touch</a>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design 6 — Supabase-style: deep dark green accent, minimal border, clean    */
/* ─────────────────────────────────────────────────────────────────────────── */
function Nav6() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem', height: '60px',
      background: '#1c1c1c',
      borderBottom: '1px solid #2e2e2e',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
        <div style={{ width: '22px', height: '22px', background: '#3ecf8e', borderRadius: '5px' }} />
        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ededed' }}>Rasile</span>
      </div>
      <div style={{ display: 'flex', gap: '0.1rem' }}>
        {navLinks.map((l, i) => (
          <span key={l} style={{
            padding: '6px 14px', fontSize: '0.83rem', fontWeight: 400, cursor: 'pointer', borderRadius: '5px',
            color: i === 0 ? '#3ecf8e' : '#888',
            background: i === 0 ? 'rgba(62,207,142,0.08)' : 'transparent',
          }}>{l}</span>
        ))}
      </div>
      <a style={{
        padding: '7px 16px', background: '#3ecf8e', color: '#000', borderRadius: '6px',
        fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none',
      }}>Get in touch</a>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design 7 — Clerk-style: near-black + active bottom-line + ghost CTA pill   */
/* ─────────────────────────────────────────────────────────────────────────── */
function Nav7() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem', height: '60px',
      background: '#09090b',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <span style={{ fontWeight: 700, fontSize: '1rem', color: '#fafafa', letterSpacing: '-0.01em' }}>Rasile</span>
      <div style={{ display: 'flex', height: '100%', alignItems: 'stretch' }}>
        {navLinks.map((l, i) => (
          <span key={l} style={{
            display: 'flex', alignItems: 'center',
            padding: '0 1rem', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer',
            color: i === 0 ? '#fafafa' : '#71717a',
            borderBottom: i === 0 ? '2px solid #a78bfa' : '2px solid transparent',
          }}>{l}</span>
        ))}
      </div>
      <a style={{
        padding: '6px 16px', background: 'transparent', color: '#fafafa',
        border: '1px solid #3f3f46', borderRadius: '9999px',
        fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none',
      }}>Get in touch</a>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design 8 — Minimal mono: monospace font, all grey, no CTA color, underline */
/* ─────────────────────────────────────────────────────────────────────────── */
function Nav8() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem', height: '52px',
      background: '#141414',
      borderBottom: '1px solid #252525',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    }}>
      <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#e5e5e5', letterSpacing: '0.1em', textTransform: 'uppercase' }}>rasile.co.uk</span>
      <div style={{ display: 'flex', gap: '1.75rem' }}>
        {navLinks.map((l, i) => (
          <span key={l} style={{
            fontSize: '0.78rem', fontWeight: 400, cursor: 'pointer', letterSpacing: '0.04em',
            color: i === 0 ? '#e5e5e5' : '#555',
            textDecoration: i === 0 ? 'underline' : 'none',
            textDecorationColor: '#555',
          }}>{l.toLowerCase()}</span>
        ))}
      </div>
      <a style={{
        padding: '5px 14px', background: 'transparent', color: '#e5e5e5',
        border: '1px solid #333', borderRadius: '3px',
        fontSize: '0.75rem', fontWeight: 400, textDecoration: 'none', letterSpacing: '0.04em',
      }}>contact →</a>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design 9 — Glassmorphism float: centered pill floating bar, heavy blur      */
/* ─────────────────────────────────────────────────────────────────────────── */
function Nav9() {
  return (
    <div style={{ background: '#0f0f0f', padding: '12px 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <nav style={{
        display: 'flex', alignItems: 'center',
        background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
        padding: '6px 8px', gap: '4px',
      }}>
        <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', padding: '4px 12px', marginRight: '8px' }}>Rasile</span>
        {navLinks.map((l, i) => (
          <span key={l} style={{
            padding: '6px 14px', fontSize: '0.8rem', fontWeight: i === 0 ? 600 : 400,
            borderRadius: '8px', cursor: 'pointer',
            background: i === 0 ? 'rgba(255,255,255,0.12)' : 'transparent',
            color: i === 0 ? '#fff' : 'rgba(255,255,255,0.45)',
          }}>{l}</span>
        ))}
        <a style={{
          marginLeft: '8px', padding: '6px 14px', background: '#fff', color: '#000',
          borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
        }}>Contact</a>
      </nav>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design 10 — Bold gradient: dark bg, gradient wordmark, split left/right     */
/* ─────────────────────────────────────────────────────────────────────────── */
function Nav10() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center',
      padding: '0 2.5rem', height: '64px',
      background: 'linear-gradient(180deg, #0e0e12 0%, #0a0a0e 100%)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      {/* Logo left */}
      <span style={{
        fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.03em',
        background: 'linear-gradient(90deg, #818cf8, #c084fc)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        flex: '0 0 auto',
      }}>Rasile</span>

      {/* Links centered */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '0.25rem' }}>
        {navLinks.map((l, i) => (
          <span key={l} style={{
            padding: '6px 14px', fontSize: '0.83rem', fontWeight: i === 0 ? 600 : 400, cursor: 'pointer', borderRadius: '6px',
            color: i === 0 ? '#e2e8f0' : 'rgba(255,255,255,0.35)',
            background: i === 0 ? 'rgba(129,140,248,0.08)' : 'transparent',
          }}>{l}</span>
        ))}
      </div>

      {/* CTA right */}
      <a style={{
        flex: '0 0 auto',
        padding: '7px 18px',
        background: 'linear-gradient(90deg, #818cf8, #c084fc)',
        color: '#fff', borderRadius: '8px',
        fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none',
        boxShadow: '0 0 20px rgba(129,140,248,0.3)',
      }}>Get in touch</a>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Wrapper — renders all 10 with labels                                         */
/* ─────────────────────────────────────────────────────────────────────────── */
const designs = [
  { n: 1, label: 'Vercel-style — frosted pill container, white CTA', Component: Nav1 },
  { n: 2, label: 'Linear-style — pure black, uppercase spaced links, indigo CTA', Component: Nav2 },
  { n: 3, label: 'Resend-style — near-black, compact links, outlined CTA', Component: Nav3 },
  { n: 4, label: 'Raycast-style — bold wordmark, orange accent, glow CTA', Component: Nav4 },
  { n: 5, label: 'Stripe-style — dark navy, italic logo, purple gradient pill CTA', Component: Nav5 },
  { n: 6, label: 'Supabase-style — square green accent, green CTA', Component: Nav6 },
  { n: 7, label: 'Clerk-style — bottom-line active state, ghost pill CTA', Component: Nav7 },
  { n: 8, label: 'Monospace minimal — mono font, lowercase links, no color', Component: Nav8 },
  { n: 9, label: 'Floating glass pill — centered floating bar, heavy blur', Component: Nav9 },
  { n: 10, label: 'Gradient split — purple gradient wordmark + CTA glow', Component: Nav10 },
]

export default function NavShowcase() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
      <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '1.5rem' }}>
        Nav Design Showcase — pick your favourite
      </h2>
      {designs.map(({ n, label, Component }) => (
        <div key={n} style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.75rem', color: '#718096', marginBottom: '6px', fontFamily: 'monospace' }}>
            #{n} — {label}
          </p>
          <div style={{ borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            <Component />
          </div>
        </div>
      ))}
    </div>
  )
}
