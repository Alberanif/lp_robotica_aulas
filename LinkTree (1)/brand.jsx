// Shared brand tokens + atomic components for Robótica BSB

const BRAND = {
  blue: '#01a1e1',
  yellow: '#ffd900',
  red: '#f01600',
  green: '#45b227',
  bg: '#faefd9',
  ink: '#111111',
  cream2: '#f4e6c7',
};

// ─────────────────────────────────────────────────────────────
// ComicTitle — multicolor stroked headline (cycle blue/yellow/red/green per visible char, but per WORD ideally)
// We support a "byWord" mode that colors entire words in cycle, matching the design system reference images
// ─────────────────────────────────────────────────────────────
function ComicTitle({ children, size = 30, stroke = 2, lineHeight = 1.05, mode = 'byWord', align = 'center' }) {
  const cycle = [BRAND.blue, BRAND.yellow, BRAND.red, BRAND.green];
  const text = String(children);

  const baseStyle = {
    fontFamily: '"Fredoka", system-ui, sans-serif',
    fontWeight: 700,
    fontSize: size,
    lineHeight,
    letterSpacing: '0.005em',
    textTransform: 'uppercase',
    margin: 0,
    textAlign: align,
    WebkitTextStroke: `${stroke}px ${BRAND.ink}`,
    paintOrder: 'stroke fill',
    wordBreak: 'normal',
    overflowWrap: 'break-word',
  };

  if (mode === 'byWord') {
    const words = text.split(/(\s+)/); // keep whitespace tokens
    let wIdx = 0;
    return (
      <h2 style={baseStyle}>
        {words.map((w, i) => {
          if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
          const c = cycle[wIdx % 4];
          wIdx++;
          return <span key={i} style={{ color: c, display: 'inline-block' }}>{w}</span>;
        })}
      </h2>
    );
  }

  // by char
  const chars = text.split('');
  let vIdx = 0;
  return (
    <h2 style={baseStyle}>
      {chars.map((ch, i) => {
        if (ch === ' ') return <span key={i}>&nbsp;</span>;
        const c = cycle[vIdx % 4];
        vIdx++;
        return <span key={i} style={{ color: c, display: 'inline-block' }}>{ch}</span>;
      })}
    </h2>
  );
}

// Highlight pill — green tag with hard shadow
function Pill({ children, color = BRAND.green, textColor = '#fff', tilt = -1.5, size = 14 }) {
  return (
    <span style={{
      display: 'inline-block',
      background: color,
      color: textColor,
      padding: '3px 12px',
      border: `2.5px solid ${BRAND.ink}`,
      borderRadius: 10,
      boxShadow: `3px 3px 0 ${BRAND.ink}`,
      fontWeight: 800,
      fontSize: size,
      transform: `rotate(${tilt}deg)`,
      margin: '0 2px',
      whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

// Big neo-brutalist CTA
function BigCTA({ children, color = BRAND.green, shadow = BRAND.ink, onClick, sub }) {
  const [press, setPress] = React.useState(false);
  const offset = press ? 0 : 8;
  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onMouseLeave={() => setPress(false)}
      onTouchStart={() => setPress(true)}
      onTouchEnd={() => setPress(false)}
      style={{
        display: 'block',
        width: '100%',
        background: color,
        border: `3.5px solid ${BRAND.ink}`,
        borderRadius: 18,
        padding: '16px 18px 14px',
        boxShadow: `${offset}px ${offset}px 0px ${shadow}`,
        textAlign: 'center',
        color: '#fff',
        cursor: 'pointer',
        transform: `translate(${press ? 8 : 0}px, ${press ? 8 : 0}px)`,
        transition: 'transform 90ms ease, box-shadow 90ms ease',
        fontFamily: '"Fredoka", system-ui, sans-serif',
        fontWeight: 700,
        fontSize: 17,
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        lineHeight: 1.1,
        WebkitTextStroke: `1.4px ${BRAND.ink}`,
        paintOrder: 'stroke fill',
      }}
    >
      <div>{children}</div>
      {sub && <div style={{
        marginTop: 4,
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontSize: 11,
        fontWeight: 700,
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        WebkitTextStroke: '0',
        opacity: 0.95,
      }}>{sub}</div>}
    </button>
  );
}

// Hard-shadow card frame (neo-brutalist black border + colored offset shadow)
function HardCard({ children, color = '#fff', shadow = BRAND.ink, radius = 22, padding = 16, style = {}, tilt = 0 }) {
  return (
    <div style={{
      background: color,
      border: `3px solid ${BRAND.ink}`,
      borderRadius: radius,
      padding,
      boxShadow: `8px 8px 0px ${shadow}`,
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      ...style,
    }}>{children}</div>
  );
}

// Section divider ("comic" horizontal rule)
function ComicHR() {
  return <div style={{
    height: 0,
    borderTop: `2.5px dashed ${BRAND.ink}33`,
    margin: '8px 0',
  }} />;
}

// Tape — yellow masking tape
function Tape({ width = 80, top = -12, left = '50%', rotate = -3 }) {
  return (
    <div style={{
      position: 'absolute',
      top,
      left,
      transform: `translateX(-50%) rotate(${rotate}deg)`,
      width,
      height: 22,
      background: 'rgba(255,217,0,0.85)',
      border: `2px solid ${BRAND.ink}`,
      boxShadow: `2px 2px 0 ${BRAND.ink}`,
    }} />
  );
}

Object.assign(window, { BRAND, ComicTitle, Pill, BigCTA, HardCard, ComicHR, Tape });
