// LinkTree page for Robótica BSB — neo-brutalism + comic book style

const BRAND = {
  blue: '#01a1e1',
  yellow: '#ffd900',
  red: '#f01600',
  green: '#45b227',
  bg: '#faefd9',
  ink: '#111111',
};

// ─────────────────────────────────────────────────────────────
// Multicolor stroked title — every char cycles blue/yellow/red/green
// ─────────────────────────────────────────────────────────────
function ComicTitle({ children, size = 28, stroke = 2, lineHeight = 1.0 }) {
  const cycle = [BRAND.blue, BRAND.yellow, BRAND.red, BRAND.green];
  const chars = String(children).split('');
  let visibleIdx = 0;
  return (
    <h1 style={{
      fontFamily: '"Fredoka", system-ui, sans-serif',
      fontWeight: 700,
      fontSize: size,
      lineHeight: lineHeight,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      margin: 0,
      textAlign: 'center',
      WebkitTextStroke: `${stroke}px ${BRAND.ink}`,
      paintOrder: 'stroke fill',
      wordBreak: 'break-word',
    }}>
      {chars.map((ch, i) => {
        if (ch === ' ') return <span key={i}>&nbsp;</span>;
        const c = cycle[visibleIdx % 4];
        visibleIdx++;
        return <span key={i} style={{ color: c, display: 'inline-block' }}>{ch}</span>;
      })}
    </h1>
  );
}

// ─────────────────────────────────────────────────────────────
// Neo-brutalist link button — hard shadow + thick border + press-into-shadow hover
// ─────────────────────────────────────────────────────────────
function LinkButton({ children, color = BRAND.blue, shadowColor = BRAND.ink, icon, href = '#', tilt = 0, textColor = '#fff' }) {
  const [press, setPress] = React.useState(false);
  const offset = press ? 0 : 6;
  const stretchedFill = textColor;
  return (
    <a
      href={href}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onMouseLeave={() => setPress(false)}
      onTouchStart={() => setPress(true)}
      onTouchEnd={() => setPress(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        position: 'relative',
        background: color,
        border: `3px solid ${BRAND.ink}`,
        borderRadius: 18,
        padding: '14px 18px',
        textDecoration: 'none',
        color: stretchedFill,
        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
        fontWeight: 800,
        fontSize: 15,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        boxShadow: `${offset}px ${offset}px 0px ${shadowColor}`,
        transform: `translate(${press ? 6 : 0}px, ${press ? 6 : 0}px) rotate(${tilt}deg)`,
        transition: 'transform 80ms ease, box-shadow 80ms ease',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <span style={{
        flexShrink: 0,
        width: 38,
        height: 38,
        background: '#fff',
        border: `2.5px solid ${BRAND.ink}`,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: BRAND.ink,
      }}>
        {icon}
      </span>
      <span style={{ flex: 1, textWrap: 'balance' }}>{children}</span>
      <span style={{
        flexShrink: 0,
        fontFamily: '"Fredoka", system-ui, sans-serif',
        fontWeight: 700,
        fontSize: 22,
        WebkitTextStroke: `1.5px ${BRAND.ink}`,
        paintOrder: 'stroke fill',
        color: '#fff',
      }}>›</span>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Inline icons (SVG) — kept simple per design system guidance
// ─────────────────────────────────────────────────────────────
const Icons = {
  site: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
    </svg>
  ),
  cal: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>
    </svg>
  ),
  whats: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.5A9 9 0 0 1 21 12z"/><path d="M8 10c0 4 2 6 6 6l2-2-2.5-1-1 1c-1 0-2-1-2-2l1-1L11 8 8 10z" fill="#111"/>
    </svg>
  ),
  insta: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#111"/>
    </svg>
  ),
  pin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  yt: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 9.5v5l4-2.5z" fill="#111"/>
    </svg>
  ),
  spark: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>
    </svg>
  ),
  shop: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h18l-1.5 12a2 2 0 0 1-2 1.7H6.5A2 2 0 0 1 4.5 19L3 7z"/><path d="M8 7a4 4 0 1 1 8 0"/>
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────
// LinkTree — the actual page content inside the device
// ─────────────────────────────────────────────────────────────
function LinkTreePage({ tw }) {
  // Decide shadow color cycle for buttons
  const shadowSeq = tw.shadowMode === 'black'
    ? [BRAND.ink, BRAND.ink, BRAND.ink, BRAND.ink, BRAND.ink, BRAND.ink, BRAND.ink, BRAND.ink]
    : tw.shadowMode === 'rainbow'
      ? [BRAND.blue, BRAND.yellow, BRAND.red, BRAND.green, BRAND.blue, BRAND.yellow, BRAND.red, BRAND.green]
      : [BRAND.ink, BRAND.blue, BRAND.ink, BRAND.red, BRAND.ink, BRAND.green, BRAND.ink, BRAND.yellow];

  // Button color sequence
  const colorSeq = [BRAND.blue, BRAND.green, BRAND.red, BRAND.yellow, BRAND.blue, BRAND.green, BRAND.red, BRAND.yellow];
  const textColors = ['#fff', '#fff', '#fff', BRAND.ink, '#fff', '#fff', '#fff', BRAND.ink];

  const links = [
    { label: 'Agende uma aula experimental', icon: Icons.spark, href: '#cta' },
    { label: 'Site oficial', icon: Icons.site, href: '#' },
    { label: 'Fale com a gente no WhatsApp', icon: Icons.whats, href: '#' },
    { label: 'Nossas unidades', icon: Icons.pin, href: '#' },
    { label: 'Instagram @roboticabsb', icon: Icons.insta, href: '#' },
    { label: 'Canal no YouTube', icon: Icons.yt, href: '#' },
    { label: 'Loja: kits e materiais', icon: Icons.shop, href: '#' },
    { label: 'Calendário de turmas', icon: Icons.cal, href: '#' },
  ];

  return (
    <div style={{
      minHeight: '100%',
      width: '100%',
      background: BRAND.bg,
      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
      color: BRAND.ink,
      paddingBottom: 40,
      backgroundImage: tw.dotted
        ? `radial-gradient(${BRAND.ink}22 1.2px, transparent 1.2px)`
        : 'none',
      backgroundSize: '18px 18px',
    }}>
      {/* HERO */}
      <div style={{ padding: '28px 22px 14px', textAlign: 'center', position: 'relative' }}>

        {/* Logo card with hard shadow */}
        <div style={{
          display: 'inline-block',
          position: 'relative',
          background: '#fff',
          border: `3px solid ${BRAND.ink}`,
          borderRadius: 24,
          padding: 14,
          boxShadow: `8px 8px 0px ${BRAND.blue}`,
          transform: 'rotate(-2deg)',
          marginTop: 6,
        }}>
          <img src="assets/logo.png" alt="Robótica BSB" style={{ width: 130, height: 130, display: 'block', objectFit: 'contain' }} />
          {/* Fake masking tape */}
          <div style={{
            position: 'absolute',
            top: -10,
            left: '50%',
            transform: 'translateX(-50%) rotate(-3deg)',
            width: 76,
            height: 22,
            background: 'rgba(255,217,0,0.85)',
            border: `2px solid ${BRAND.ink}`,
            boxShadow: `2px 2px 0 ${BRAND.ink}`,
          }} />
        </div>

        {/* Handle */}
        <div style={{
          marginTop: 16,
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontWeight: 800,
          fontSize: 16,
          letterSpacing: '0.02em',
        }}>
          @roboticabsb
        </div>

        {/* Title */}
        <div style={{ marginTop: 10, padding: '0 4px' }}>
          <ComicTitle size={26} stroke={2} lineHeight={1.05}>{tw.headline}</ComicTitle>
        </div>

        {/* Tagline with green highlight pill */}
        <div style={{
          marginTop: 14,
          fontSize: 14,
          fontWeight: 600,
          lineHeight: 1.45,
          color: BRAND.ink,
          maxWidth: 320,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Cursos de robótica, programação e criatividade para crianças e
          adolescentes.{' '}
          <span style={{
            display: 'inline-block',
            background: BRAND.green,
            color: '#fff',
            padding: '2px 10px',
            border: `2px solid ${BRAND.ink}`,
            borderRadius: 8,
            boxShadow: `3px 3px 0 ${BRAND.ink}`,
            fontWeight: 800,
            transform: 'rotate(-1.5deg)',
            margin: '0 2px',
          }}>
            aprender brincando
          </span>{' '}
          de verdade.
        </div>
      </div>

      {/* MAIN CTA — bigger, with stamp */}
      <div style={{ padding: '8px 22px 8px', position: 'relative' }}>
        <a href="#" style={{
          display: 'block',
          textDecoration: 'none',
          background: BRAND.green,
          border: `3.5px solid ${BRAND.ink}`,
          borderRadius: 22,
          padding: '18px 18px 16px',
          boxShadow: `8px 8px 0px ${BRAND.ink}`,
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
        }}>
          <div style={{
            fontFamily: '"Fredoka", system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            lineHeight: 1.05,
            WebkitTextStroke: `1.5px ${BRAND.ink}`,
            paintOrder: 'stroke fill',
          }}>Agende uma aula<br/>experimental</div>
          <div style={{
            marginTop: 4,
            fontSize: 12,
            fontWeight: 700,
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            opacity: 0.95,
          }}>grátis · sem compromisso</div>

          {/* Stamp */}
          <div style={{
            position: 'absolute',
            top: -14,
            right: -10,
            background: BRAND.yellow,
            border: `2.5px solid ${BRAND.ink}`,
            borderRadius: 14,
            padding: '6px 10px',
            color: BRAND.ink,
            fontWeight: 900,
            fontSize: 11,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            transform: 'rotate(8deg)',
            boxShadow: `3px 3px 0 ${BRAND.ink}`,
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}>NOVO</div>
        </a>
      </div>

      {/* LINK BUTTONS */}
      <div style={{ padding: '14px 22px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {links.slice(1).map((l, i) => (
          <LinkButton
            key={i}
            href={l.href}
            icon={l.icon}
            color={colorSeq[i]}
            shadowColor={shadowSeq[i]}
            textColor={textColors[i]}
            tilt={tw.wonky ? (i % 2 === 0 ? -0.6 : 0.6) : 0}
          >
            {l.label}
          </LinkButton>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 28,
        padding: '0 22px',
        textAlign: 'center',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: BRAND.ink,
        opacity: 0.7,
      }}>
        © Robótica BSB · Brasília, DF
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// App shell — iOS frame + tweaks
// ─────────────────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "Bem-vindo à Robótica BSB",
  "shadowMode": "mixed",
  "wonky": true,
  "dotted": false,
  "showFrame": true
}/*EDITMODE-END*/;

function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const page = <LinkTreePage tw={tw} />;

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: '#1a1a1a',
      backgroundImage: `radial-gradient(${BRAND.blue}26 1.5px, transparent 1.5px)`,
      backgroundSize: '24px 24px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '32px 16px 80px',
      boxSizing: 'border-box',
    }}>
      {tw.showFrame ? (
        <IOSDevice width={390} height={820} title="">
          <div style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
            {page}
          </div>
        </IOSDevice>
      ) : (
        <div style={{
          width: 390,
          maxWidth: '100%',
          background: BRAND.bg,
          border: `3px solid ${BRAND.ink}`,
          borderRadius: 28,
          overflow: 'hidden',
          boxShadow: `12px 12px 0 ${BRAND.blue}`,
        }}>
          {page}
        </div>
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection title="Conteúdo">
          <TweakText label="Headline" value={tw.headline} onChange={v => setTweak('headline', v)} />
        </TweakSection>
        <TweakSection title="Estilo">
          <TweakRadio
            label="Sombras dos botões"
            value={tw.shadowMode}
            onChange={v => setTweak('shadowMode', v)}
            options={[
              { value: 'black', label: 'Preto' },
              { value: 'mixed', label: 'Misto' },
              { value: 'rainbow', label: 'Coloridas' },
            ]}
          />
          <TweakToggle label="Botões levemente tortos" value={tw.wonky} onChange={v => setTweak('wonky', v)} />
          <TweakToggle label="Fundo pontilhado" value={tw.dotted} onChange={v => setTweak('dotted', v)} />
          <TweakToggle label="Mostrar frame iPhone" value={tw.showFrame} onChange={v => setTweak('showFrame', v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
