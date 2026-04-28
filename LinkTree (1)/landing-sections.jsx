// Sections for the Robótica BSB landing page
// Uses globals from brand.jsx: BRAND, ComicTitle, Pill, BigCTA, HardCard, Tape

// ─────────────────────────────────────────────────────────────
// TOP NAV — colored title strip
// ─────────────────────────────────────────────────────────────
function TopNav() {
  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: `2px solid ${BRAND.ink}`,
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    }}>
      <img src="assets/logo.png" alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
      <div style={{
        fontFamily: '"Fredoka", system-ui, sans-serif',
        fontWeight: 700,
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        WebkitTextStroke: `1.2px ${BRAND.ink}`,
        paintOrder: 'stroke fill',
      }}>
        <span style={{ color: BRAND.blue }}>FORMANDO</span>{' '}
        <span style={{ color: BRAND.yellow }}>A</span>{' '}
        <span style={{ color: BRAND.red }}>PRÓXIMA</span>{' '}
        <span style={{ color: BRAND.green }}>GERAÇÃO</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// HERO — title + video placeholder + form (form BELOW the video)
// ─────────────────────────────────────────────────────────────
function HeroSection() {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    border: `2.5px solid ${BRAND.ink}`,
    borderRadius: 12,
    background: '#fff',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: 14,
    fontWeight: 600,
    color: BRAND.ink,
    boxSizing: 'border-box',
    outline: 'none',
    boxShadow: `3px 3px 0 ${BRAND.ink}`,
  };
  const labelStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeight: 700,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: BRAND.ink,
    marginBottom: 6,
    display: 'block',
  };

  return (
    <section className="hero" style={{ padding: '32px 22px 44px', position: 'relative' }}>
      {/* Robótica BSB title */}
      <div className="hero-headline" style={{ textAlign: 'center', marginBottom: 22 }}>
        <ComicTitle size={38} stroke={2.4} lineHeight={1} mode="byChar">ROBÓTICA BSB</ComicTitle>
      </div>

      {/* "Inscrições Abertas" stamp */}
      <div className="hero-stamp-row" style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <div style={{
          background: '#fff',
          border: `3px solid ${BRAND.red}`,
          borderRadius: 14,
          padding: '8px 18px',
          transform: 'rotate(-3deg)',
          boxShadow: `4px 4px 0 ${BRAND.red}`,
          fontFamily: '"Fredoka", sans-serif',
          fontWeight: 700,
          fontSize: 16,
          color: BRAND.red,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          textAlign: 'center',
          lineHeight: 1.1,
        }}>
          Inscrições<br />Abertas
        </div>
      </div>

      {/* Pitch */}
      <p className="hero-pitch" style={{
        textAlign: 'center',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontSize: 14.5,
        fontWeight: 600,
        lineHeight: 1.5,
        color: BRAND.ink,
        margin: '0 0 32px',
        textWrap: 'pretty',
      }}>
        Mais do que uma aula de robótica, uma verdadeira{' '}
        <Pill tilt={-1}>experiência de aprendizado</Pill>{' '}
        para que seu filho domine a tecnologia enquanto se diverte.
      </p>

      {/* VIDEO placeholder — neo-brutalist, with red offset shadow */}
      <div className="hero-video-col" style={{ position: 'relative', marginBottom: 28 }}>
        <div className="video-frame" style={{
          position: 'relative',
          background: '#1a1a1a',
          border: `3.5px solid ${BRAND.ink}`,
          borderRadius: 22,
          overflow: 'hidden',
          aspectRatio: '9 / 16',
          maxWidth: 360,
          margin: '0 auto',
          boxShadow: `9px 9px 0 ${BRAND.red}`,
          cursor: 'pointer',
        }} onClick={() => setPlaying(p => !p)}>
          {/* Striped placeholder pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `repeating-linear-gradient(135deg, #2a2a2a 0 18px, #1a1a1a 18px 36px)`,
          }} />
          {/* Inner safe area label */}
          <div style={{
            position: 'absolute',
            top: 10, left: 10,
            background: BRAND.yellow,
            color: BRAND.ink,
            fontFamily: '"JetBrains Mono", "Courier New", monospace',
            fontSize: 10,
            fontWeight: 700,
            padding: '3px 8px',
            border: `2px solid ${BRAND.ink}`,
            borderRadius: 6,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>VIDEO PLACEHOLDER · 1080×1920</div>

          {/* Play button */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: 78, height: 78,
              borderRadius: '50%',
              background: BRAND.green,
              border: `3.5px solid ${BRAND.ink}`,
              boxShadow: `5px 5px 0 ${BRAND.ink}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: playing ? 'scale(0.92)' : 'scale(1)',
              transition: 'transform 120ms ease',
            }}>
              {playing ? (
                <div style={{ display: 'flex', gap: 5 }}>
                  <div style={{ width: 8, height: 26, background: '#fff', border: `2px solid ${BRAND.ink}` }} />
                  <div style={{ width: 8, height: 26, background: '#fff', border: `2px solid ${BRAND.ink}` }} />
                </div>
              ) : (
                <div style={{
                  width: 0, height: 0,
                  borderLeft: '24px solid #fff',
                  borderTop: '14px solid transparent',
                  borderBottom: '14px solid transparent',
                  marginLeft: 6,
                  filter: `drop-shadow(0 0 0 ${BRAND.ink})`,
                }} />
              )}
            </div>
          </div>

          {/* Caption */}
          <div style={{
            position: 'absolute',
            bottom: 10, left: 10, right: 10,
            background: '#fff',
            border: `2.5px solid ${BRAND.ink}`,
            borderRadius: 12,
            padding: '8px 12px',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: 12,
            fontWeight: 700,
            color: BRAND.ink,
            boxShadow: `3px 3px 0 ${BRAND.ink}`,
          }}>
            ▶ Veja como são as aulas em 30 segundos
          </div>
        </div>
      </div>

      {/* FORM card — visible, BELOW the video, no overlap */}
      <div className="hero-form-col">
      <HardCard color="#fff" shadow={BRAND.blue} radius={22} padding={18} style={{ position: 'relative' }}>
        <Tape width={92} top={-12} rotate={-4} />
        <h3 style={{
          margin: '0 0 14px',
          fontFamily: '"Fredoka", sans-serif',
          fontWeight: 700,
          fontSize: 18,
          lineHeight: 1.15,
          color: BRAND.ink,
          textTransform: 'none',
          textAlign: 'center',
        }}>
          Traga seu filho para uma <Pill color={BRAND.yellow} textColor={BRAND.ink} tilt={-2}>aula experimental</Pill> e veja ele se apaixonar por aprender.
        </h3>

        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <label style={labelStyle}>Nome do Responsável</label>
              <input style={inputStyle} placeholder="Ex: João Pedro" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Telefone / WhatsApp</label>
              <input style={inputStyle} placeholder="(61) 99999-9999" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div style={{ marginTop: 4 }}>
              <BigCTA color={BRAND.green} shadow={BRAND.ink} sub="grátis · sem compromisso">
                TRANSFORMAR O FUTURO DO MEU FILHO
              </BigCTA>
            </div>
            <div style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: 11,
              fontWeight: 600,
              color: BRAND.ink,
              opacity: 0.7,
              textAlign: 'center',
              marginTop: 2,
            }}>
              🔒 Seus dados estão seguros. Não enviamos spam.
            </div>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{ fontSize: 36 }}>🎉</div>
            <div style={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700, fontSize: 18, color: BRAND.green, marginTop: 6 }}>
              Recebemos! Vamos te chamar no WhatsApp em instantes.
            </div>
          </div>
        )}
      </HardCard>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SCHEDULE / Encontros — carousel of 3 cards
// ─────────────────────────────────────────────────────────────
function ScheduleSection() {
  const cards = [
    { title: '1 ENCONTRO\nSEMANAL', body: 'Toda semana o seu filho(a) terá a oportunidade de aprender uma nova habilidade e exercitar toda a imaginação e criatividade dele!', color: BRAND.blue },
    { title: '90 MINUTOS\nDE AULA', body: 'Cada encontro tem 1h30, tempo ideal para construir, programar e ainda sobrar espaço para imaginar projetos novos.', color: BRAND.red },
    { title: 'TURMAS POR\nIDADE', body: 'Crianças e adolescentes agrupados por faixa etária para garantir o nível certo de desafio em cada aula.', color: BRAND.green },
  ];
  const [idx, setIdx] = React.useState(0);
  const next = () => setIdx(i => (i + 1) % cards.length);
  const prev = () => setIdx(i => (i - 1 + cards.length) % cards.length);
  const card = cards[idx];

  const navBtn = {
    width: 44, height: 44, borderRadius: '50%',
    background: '#fff', border: `2.5px solid ${BRAND.ink}`,
    boxShadow: `3px 3px 0 ${BRAND.ink}`,
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 18, fontWeight: 700, color: BRAND.ink, padding: 0,
  };

  // Render single card (mobile carousel) or all cards (desktop grid)
  const renderCard = (c, i) => (
    <HardCard key={i} color={c.color} shadow={BRAND.ink} radius={26} padding={28} style={{
      position: 'relative', transition: 'background 180ms ease',
    }} className="sch-card">
      <div style={{
        fontFamily: '"Fredoka", sans-serif', fontWeight: 700, fontSize: 26,
        lineHeight: 1.05, color: '#fff', textTransform: 'uppercase',
        WebkitTextStroke: `1.6px ${BRAND.ink}`, paintOrder: 'stroke fill',
        whiteSpace: 'pre-line', marginBottom: 12,
      }}>{c.title}</div>
      <div style={{
        fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700,
        fontSize: 14, lineHeight: 1.5, color: '#fff',
        WebkitTextStroke: `0.6px ${BRAND.ink}`, paintOrder: 'stroke fill',
      }}>{c.body}</div>
    </HardCard>
  );

  return (
    <section className="schedule" style={{ padding: '36px 22px 48px', textAlign: 'center' }}>
      <ComicTitle size={28} stroke={2}>ENCONTROS QUE CABEM NA ROTINA</ComicTitle>

      {/* Calendar icon mini-card with flipping page */}
      <FlippingCalendar />


      <p style={{
        margin: '0 0 26px',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontSize: 14.5,
        fontWeight: 600,
        lineHeight: 1.5,
        color: BRAND.ink,
      }}>
        Dia de semana, ou final de semana. Manhã ou Tarde.<br />
        <Pill tilt={-1}>Você escolhe o melhor horário</Pill> que se encaixa na rotina.
      </p>

      {/* Carousel card (mobile) / Grid (desktop) */}
      <div className="schedule-grid" style={{ position: 'relative', minHeight: 260 }}>
        <div className="schedule-mobile-card" style={{ width: '100%' }}>
          {renderCard(card, idx)}
        </div>
        <div className="schedule-desktop-cards" style={{ display: 'none' }}>
          {cards.map((c, i) => renderCard(c, i))}
        </div>
      </div>

      {/* Carousel controls */}
      <div className="schedule-controls" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, margin: '18px 0 22px' }}>
        <button style={navBtn} onClick={prev}>‹</button>
        <div style={{ display: 'flex', gap: 8 }}>
          {cards.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{
              width: 10, height: 10, borderRadius: '50%', padding: 0, cursor: 'pointer',
              border: `2px solid ${BRAND.ink}`,
              background: i === idx ? BRAND.blue : '#fff',
            }} />
          ))}
        </div>
        <button style={navBtn} onClick={next}>›</button>
      </div>

      <BigCTA color={BRAND.green} shadow={BRAND.ink}>AGENDE UMA AULA EXPERIMENTAL</BigCTA>
    </section>
  );
}

// ─── Flipping calendar (animated date pages) ─────────────────
function FlippingCalendar() {
  const dates = [
    { day: 12, dow: 'SEG' },
    { day: 15, dow: 'QUI' },
    { day: 18, dow: 'SÁB' },
    { day: 20, dow: 'SEG' },
    { day: 23, dow: 'QUI' },
    { day: 26, dow: 'DOM' },
  ];
  const [idx, setIdx] = React.useState(0);
  const [flipping, setFlipping] = React.useState(false);

  React.useEffect(() => {
    const t = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setIdx(i => (i + 1) % dates.length);
        setFlipping(false);
      }, 280);
    }, 1800);
    return () => clearInterval(t);
  }, []);

  const cur = dates[idx];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 20px' }}>
      <div style={{
        position: 'relative',
        background: '#fff',
        border: `2.5px solid ${BRAND.ink}`,
        borderRadius: 12,
        width: 64, height: 72,
        boxShadow: `4px 4px 0 ${BRAND.ink}`,
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        perspective: 400,
      }}>
        {/* Header with binding rings */}
        <div style={{
          background: BRAND.red, height: 16,
          borderBottom: `2.5px solid ${BRAND.ink}`,
          display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start',
          flexShrink: 0,
        }}>
          <div style={{ width: 4, height: 9, background: BRAND.ink, transform: 'translateY(-3px)' }} />
          <div style={{ width: 4, height: 9, background: BRAND.ink, transform: 'translateY(-3px)' }} />
        </div>
        {/* Page (with flip animation) */}
        <div style={{
          flex: 1,
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            background: '#fff',
            transformOrigin: 'top',
            transform: flipping ? 'rotateX(-90deg)' : 'rotateX(0deg)',
            transition: 'transform 280ms ease-in',
            backfaceVisibility: 'hidden',
          }}>
            <div style={{
              fontFamily: '"Fredoka", sans-serif',
              fontWeight: 700, fontSize: 22, color: BRAND.ink, lineHeight: 1,
            }}>{cur.day}</div>
            <div style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 800, fontSize: 9, color: BRAND.ink, opacity: 0.7,
              letterSpacing: '0.08em', marginTop: 2,
            }}>{cur.dow}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EvolutionSection() {
  const levels = [
    {
      key: 'starter', label: 'STARTER', age: '6 a 8 anos',
      color: BRAND.blue,
      tagline: 'Primeiros passos no universo da robótica',
      skills: ['Lógica básica', 'Montagem guiada', 'Coordenação motora'],
      icon: '🚀',
    },
    {
      key: 'builder', label: 'BUILDER', age: '8 a 10 anos',
      color: BRAND.red,
      tagline: 'Construção de máquinas e mecanismos',
      skills: ['Engrenagens', 'Sensores básicos', 'Pensamento lógico'],
      icon: '🔧',
    },
    {
      key: 'programmer', label: 'PROGRAMMER', age: '10 a 13 anos',
      color: BRAND.green,
      tagline: 'Programa robôs e dá vida às ideias',
      skills: ['Programação por blocos', 'Algoritmos', 'Resolução de problemas'],
      icon: '💻',
    },
    {
      key: 'designer', label: 'DESIGNER', age: '13 a 16 anos',
      color: BRAND.yellow,
      tagline: 'Cria projetos próprios do zero',
      skills: ['Design de produto', 'IoT', 'Pensamento criativo'],
      icon: '🎨',
    },
  ];

  const [selected, setSelected] = React.useState('builder');
  const sel = levels.find(l => l.key === selected);

  return (
    <section className="evolution" style={{ padding: '36px 22px 48px', textAlign: 'center' }}>
      <ComicTitle size={28} stroke={2}>EVOLUÇÃO PENSADA NO FUTURO DA NOVA GERAÇÃO</ComicTitle>

      <p style={{
        margin: '26px 0 18px',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: BRAND.ink,
      }}>A nossa metodologia de ensino é composta por</p>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <div style={{
          background: BRAND.red, color: '#fff',
          border: `3px solid ${BRAND.ink}`, borderRadius: 14,
          padding: '8px 16px', boxShadow: `5px 5px 0 ${BRAND.ink}`,
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontWeight: 800, fontSize: 14, letterSpacing: '0.02em',
          WebkitTextStroke: `0.6px ${BRAND.ink}`, paintOrder: 'stroke fill',
        }}>4 níveis de aprendizado</div>
      </div>
      <p style={{
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontStyle: 'italic',
        fontSize: 13, color: BRAND.ink, opacity: 0.7,
        margin: '0 0 30px',
      }}>(Toque em um degrau para ver os detalhes)</p>

      <div className="evo-grid">
        <div className="evo-staircase-wrap">
          {/* THE STAIRCASE */}
          <Staircase levels={levels} selected={selected} onSelect={setSelected} />
        </div>

        {/* Detail card for selected level */}
        <div className="evo-detail" style={{ marginTop: 32 }}>
        <HardCard color="#fff" shadow={sel.color} radius={20} padding={18} style={{ position: 'relative', textAlign: 'left' }}>
          <Tape width={70} top={-12} rotate={3} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: sel.color, border: `2.5px solid ${BRAND.ink}`,
              boxShadow: `3px 3px 0 ${BRAND.ink}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 26, flexShrink: 0,
            }}>{sel.icon}</div>
            <div>
              <div style={{
                fontFamily: '"Fredoka", sans-serif',
                fontWeight: 700, fontSize: 22,
                color: sel.color,
                WebkitTextStroke: `1.2px ${BRAND.ink}`, paintOrder: 'stroke fill',
                lineHeight: 1, textTransform: 'uppercase',
              }}>{sel.label}</div>
              <div style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 700, fontSize: 12, color: BRAND.ink, opacity: 0.7,
                marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.06em',
              }}>{sel.age}</div>
            </div>
          </div>
          <p style={{
            margin: '0 0 12px',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 600, fontSize: 14, lineHeight: 1.45, color: BRAND.ink,
          }}>{sel.tagline}.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {sel.skills.map((s, i) => (
              <span key={i} style={{
                background: BRAND.bg,
                border: `2px solid ${BRAND.ink}`, borderRadius: 8,
                padding: '4px 10px', fontSize: 11.5, fontWeight: 700,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                textTransform: 'uppercase', letterSpacing: '0.04em',
                color: BRAND.ink,
              }}>{s}</span>
            ))}
          </div>
        </HardCard>
        </div>
      </div>

      {/* Swipeable level cards section removed */}


      {/* Founder card */}
      <div style={{ marginTop: 40 }}>
        <HardCard color="#fff" shadow={BRAND.ink} radius={18} padding={18} style={{ position: 'relative' }}>
          <div style={{
            width: 70, height: 70, borderRadius: '50%',
            background: BRAND.bg,
            border: `3px solid ${BRAND.ink}`,
            margin: '0 auto 10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundImage: `repeating-linear-gradient(135deg, ${BRAND.bg} 0 6px, ${BRAND.cream2} 6px 12px)`,
            fontFamily: '"JetBrains Mono", monospace', fontSize: 9, fontWeight: 700,
            color: BRAND.ink,
          }}>FOTO</div>
          <div style={{
            fontFamily: '"Fredoka", sans-serif',
            fontWeight: 700, fontSize: 20, color: BRAND.ink,
          }}>Prof. Emanuel</div>
          <div style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 800, fontSize: 11, letterSpacing: '0.1em',
            color: BRAND.ink, opacity: 0.7, textTransform: 'uppercase', marginTop: 2,
          }}>Fundador da Robótica BSB</div>
        </HardCard>
        <div style={{ marginTop: 20 }}>
          <BigCTA color={BRAND.green} shadow={BRAND.ink}>📱 Entre em contato</BigCTA>
        </div>
      </div>
    </section>
  );
}

// ─── Swipeable level cards (one card at a time, navigable) ───
function SwipeableLevelCards({ levels }) {
  const [idx, setIdx] = React.useState(0);
  const trackRef = React.useRef(null);
  const next = () => setIdx(i => (i + 1) % levels.length);
  const prev = () => setIdx(i => (i - 1 + levels.length) % levels.length);

  // Touch swipe
  const startX = React.useRef(0);
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
  };

  return (
    <div style={{ marginTop: 40 }}>
      <div style={{
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 800, fontSize: 12, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: BRAND.ink, opacity: 0.7,
        textAlign: 'center', marginBottom: 10,
      }}>Conheça cada nível</div>

      <div
        ref={trackRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ position: 'relative', overflow: 'hidden', borderRadius: 22 }}
      >
        <div className="level-cards-track level-cards-grid" style={{
          display: 'flex',
          transform: `translateX(-${idx * 100}%)`,
          transition: 'transform 320ms cubic-bezier(.2,.8,.2,1)',
        }}>
          {levels.map((lv, i) => (
            <div key={lv.key} style={{ flex: '0 0 100%', padding: '8px 4px 8px' }}>
              <div style={{
                background: lv.color,
                border: `3.5px solid ${BRAND.ink}`,
                borderRadius: 22,
                padding: 22,
                boxShadow: `8px 8px 0 ${BRAND.ink}`,
                minHeight: 280,
                position: 'relative',
                color: '#fff',
                textAlign: 'left',
              }}>
                {/* Step number badge */}
                <div style={{
                  position: 'absolute', top: -16, left: 16,
                  background: '#fff', border: `2.5px solid ${BRAND.ink}`,
                  borderRadius: 10, padding: '4px 10px',
                  fontFamily: '"Fredoka", sans-serif', fontWeight: 700,
                  fontSize: 13, color: lv.color,
                  WebkitTextStroke: `0.8px ${BRAND.ink}`, paintOrder: 'stroke fill',
                  boxShadow: `3px 3px 0 ${BRAND.ink}`,
                  textTransform: 'uppercase',
                }}>NÍVEL {i + 1}</div>

                {/* Icon big */}
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: '#fff', border: `2.5px solid ${BRAND.ink}`,
                  boxShadow: `4px 4px 0 ${BRAND.ink}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 32, marginBottom: 14, marginTop: 6,
                }}>{lv.icon}</div>

                <div style={{
                  fontFamily: '"Fredoka", sans-serif', fontWeight: 700,
                  fontSize: 26, lineHeight: 1, textTransform: 'uppercase',
                  WebkitTextStroke: `1.4px ${BRAND.ink}`, paintOrder: 'stroke fill',
                  marginBottom: 4,
                }}>{lv.label}</div>
                <div style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 800, fontSize: 12, letterSpacing: '0.08em',
                  textTransform: 'uppercase', opacity: 0.95, marginBottom: 12,
                  WebkitTextStroke: `0.5px ${BRAND.ink}`, paintOrder: 'stroke fill',
                }}>{lv.age}</div>

                <p style={{
                  margin: '0 0 14px',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700, fontSize: 14.5, lineHeight: 1.45,
                  color: '#fff',
                  WebkitTextStroke: `0.5px ${BRAND.ink}`, paintOrder: 'stroke fill',
                }}>{lv.tagline}.</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {lv.skills.map((s, k) => (
                    <span key={k} style={{
                      background: '#fff', color: BRAND.ink,
                      border: `2px solid ${BRAND.ink}`, borderRadius: 8,
                      padding: '4px 10px', fontSize: 11.5, fontWeight: 800,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      textTransform: 'uppercase', letterSpacing: '0.04em',
                      boxShadow: `2px 2px 0 ${BRAND.ink}`,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="level-cards-controls" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 22 }}>
        <button onClick={prev} style={{
          width: 44, height: 44, borderRadius: '50%', background: '#fff',
          border: `2.5px solid ${BRAND.ink}`, boxShadow: `3px 3px 0 ${BRAND.ink}`,
          cursor: 'pointer', fontSize: 18, fontWeight: 700, padding: 0,
        }}>‹</button>
        <div style={{ display: 'flex', gap: 8 }}>
          {levels.map((lv, i) => (
            <button key={lv.key} onClick={() => setIdx(i)} style={{
              width: 10, height: 10, borderRadius: '50%', padding: 0,
              border: `2px solid ${BRAND.ink}`,
              background: i === idx ? lv.color : '#fff',
              cursor: 'pointer',
            }} />
          ))}
        </div>
        <button onClick={next} style={{
          width: 44, height: 44, borderRadius: '50%', background: '#fff',
          border: `2.5px solid ${BRAND.ink}`, boxShadow: `3px 3px 0 ${BRAND.ink}`,
          cursor: 'pointer', fontSize: 18, fontWeight: 700, padding: 0,
        }}>›</button>
      </div>

      <p style={{
        margin: '30px 14px 0',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontStyle: 'italic',
        fontSize: 14, lineHeight: 1.55, color: BRAND.ink, textAlign: 'center',
      }}>
        Cada etapa é como um <Pill color={BRAND.green} tilt={-1.5}>degrau de uma escada</Pill>, a cada passo seu filho fica mais preparado para superar os desafios do futuro com segurança e inteligência.
      </p>
    </div>
  );
}

// ─── Staircase visual ────────────────────────────────────────
function Staircase({ levels, selected, onSelect }) {
  // 4 steps rising left-to-right. Each step: a tilted block with the level on top.
  // Container is fixed-aspect; steps stack visually.
  const stepCount = levels.length;
  const stepHeight = 38; // visual rise per step
  const totalHeight = 32 + stepCount * stepHeight + 70; // base + steps + figures
  const baseY = totalHeight - 38;
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: totalHeight,
      background: '#fff',
      border: `3px solid ${BRAND.ink}`,
      borderRadius: 22,
      boxShadow: `8px 8px 0 ${BRAND.ink}`,
      overflow: 'hidden',
      backgroundImage: `radial-gradient(${BRAND.ink}1a 1px, transparent 1px)`,
      backgroundSize: '14px 14px',
      backgroundPosition: '0 0',
    }}>
      {/* Sun/sky accent in top-right */}
      <div style={{
        position: 'absolute', top: 14, right: 18,
        width: 44, height: 44, borderRadius: '50%',
        background: BRAND.yellow, border: `2.5px solid ${BRAND.ink}`,
        boxShadow: `3px 3px 0 ${BRAND.ink}`,
      }} />
      {/* Arrow up label */}
      <div style={{
        position: 'absolute', top: 12, left: 14,
        fontFamily: '"JetBrains Mono", monospace',
        fontWeight: 700, fontSize: 10, color: BRAND.ink, opacity: 0.5,
        textTransform: 'uppercase', letterSpacing: '0.1em',
      }}>NÍVEL ↑</div>

      {/* Ground line */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 22,
        height: 0, borderTop: `2.5px dashed ${BRAND.ink}33`,
      }} />

      {/* Steps */}
      {levels.map((lv, i) => {
        const stepW = 100 / stepCount; // %
        const left = i * stepW;
        const heightPct = ((i + 1) * stepHeight + 30);
        const isSel = lv.key === selected;
        return (
          <div
            key={lv.key}
            onClick={() => onSelect(lv.key)}
            role="button"
            style={{
              position: 'absolute',
              left: `calc(${left}% + 6px)`,
              width: `calc(${stepW}% - 12px)`,
              bottom: 22,
              height: heightPct,
              cursor: 'pointer',
            }}
          >
            {/* Step block */}
            <div style={{
              position: 'absolute',
              left: 0, right: 0, bottom: 0,
              height: '100%',
              background: lv.color,
              border: `3px solid ${BRAND.ink}`,
              borderBottom: `3px solid ${BRAND.ink}`,
              borderRadius: '6px 6px 0 0',
              boxShadow: `inset -3px 0 0 0 rgba(0,0,0,0.15)`,
              transition: 'transform 120ms ease',
              transform: isSel ? 'translateY(-4px)' : 'none',
            }} />
            {/* Number badge on step face */}
            <div style={{
              position: 'absolute',
              left: '50%', transform: 'translateX(-50%)',
              bottom: 6,
              fontFamily: '"Fredoka", sans-serif',
              fontWeight: 700, fontSize: 18, color: '#fff',
              WebkitTextStroke: `1.2px ${BRAND.ink}`, paintOrder: 'stroke fill',
            }}>{i + 1}</div>

            {/* Label sign on top of step */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: -34,
              transform: `translateX(-50%) rotate(${isSel ? 0 : (i % 2 ? 2 : -2)}deg)`,
              transition: 'transform 120ms ease',
            }}>
              <div style={{
                background: '#fff',
                border: `2.5px solid ${BRAND.ink}`,
                borderRadius: 10,
                padding: '4px 8px',
                boxShadow: isSel ? `4px 4px 0 ${lv.color}` : `3px 3px 0 ${BRAND.ink}`,
                fontFamily: '"Fredoka", sans-serif',
                fontWeight: 700, fontSize: 11,
                color: lv.color,
                WebkitTextStroke: `0.8px ${BRAND.ink}`, paintOrder: 'stroke fill',
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
              }}>{lv.label}</div>
              {/* peg connecting sign to step */}
              <div style={{
                position: 'absolute', left: '50%', top: '100%',
                width: 2, height: 6, background: BRAND.ink, transform: 'translateX(-50%)',
              }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// GALLERY — "Conheça um pouco das nossas aulas"
// ─────────────────────────────────────────────────────────────
function GallerySection() {
  const [idx, setIdx] = React.useState(0);
  const slides = [0, 1, 2, 3];
  return (
    <section className="gallery" style={{ padding: '36px 22px 48px', textAlign: 'center' }}>
      <ComicTitle size={28} stroke={2}>CONHEÇA UM POUCO DAS NOSSAS AULAS</ComicTitle>

      <div className="gallery-grid" style={{ marginTop: 30 }}>
        <HardCard color="#1a1a1a" shadow={BRAND.ink} radius={20} padding={0} style={{ overflow: 'hidden' }}>
          <div style={{
            aspectRatio: '4 / 5',
            background: `repeating-linear-gradient(135deg, #2a2a2a 0 18px, #1a1a1a 18px 36px)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: BRAND.yellow,
            fontFamily: '"JetBrains Mono", monospace',
            fontWeight: 700, fontSize: 12, letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            FOTO {idx + 1} / {slides.length}
          </div>
        </HardCard>
        {/* Extra placeholders only visible in desktop grid */}
        {slides.slice(1).map(s => (
          <div key={s} className="gallery-extra" style={{ display: 'none' }}>
            <HardCard color="#1a1a1a" shadow={BRAND.ink} radius={20} padding={0} style={{ overflow: 'hidden' }}>
              <div style={{
                aspectRatio: '4 / 5',
                background: `repeating-linear-gradient(${135 + s * 15}deg, #2a2a2a 0 18px, #1a1a1a 18px 36px)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: BRAND.yellow,
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 700, fontSize: 12, letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                FOTO {s + 1}
              </div>
            </HardCard>
          </div>
        ))}
      </div>

      <div className="gallery-controls" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 22 }}>
        <button onClick={() => setIdx(i => (i - 1 + slides.length) % slides.length)} style={{
          width: 44, height: 44, borderRadius: '50%', background: '#fff',
          border: `2.5px solid ${BRAND.ink}`, boxShadow: `3px 3px 0 ${BRAND.ink}`,
          cursor: 'pointer', fontSize: 18, fontWeight: 700, padding: 0,
        }}>‹</button>
        <div style={{ display: 'flex', gap: 8 }}>
          {slides.map(i => (
            <button key={i} onClick={() => setIdx(i)} style={{
              width: 10, height: 10, borderRadius: '50%', padding: 0,
              border: `2px solid ${BRAND.ink}`,
              background: i === idx ? BRAND.blue : '#fff',
              cursor: 'pointer',
            }} />
          ))}
        </div>
        <button onClick={() => setIdx(i => (i + 1) % slides.length)} style={{
          width: 44, height: 44, borderRadius: '50%', background: '#fff',
          border: `2.5px solid ${BRAND.ink}`, boxShadow: `3px 3px 0 ${BRAND.ink}`,
          cursor: 'pointer', fontSize: 18, fontWeight: 700, padding: 0,
        }}>›</button>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// LOCATION + MAP
// ─────────────────────────────────────────────────────────────
function LocationSection() {
  return (
    <section className="location" style={{ padding: '36px 22px 48px', textAlign: 'center' }}>
      <ComicTitle size={28} stroke={2}>ESTAMOS MAIS PERTO DE VOCÊ DO QUE IMAGINA</ComicTitle>

      <p style={{
        margin: '24px 0 24px',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 600, fontSize: 14.5, lineHeight: 1.5, color: BRAND.ink,
      }}>
        Acabamos de inaugurar a nossa nova unidade no centro de Brasília, pensando no seu conforto e na facilidade.
      </p>

      <p style={{
        margin: '0 0 26px',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 600, fontSize: 14.5, lineHeight: 1.55, color: BRAND.ink,
      }}>
        E estamos em uma <Pill color={BRAND.green} tilt={-1.5}>localização estratégica</Pill> para garantir a máxima proximidade da sua casa ou do seu trabalho.
      </p>

      <div className="location-grid">
      {/* Unit card — TV-like frame with photo placeholder */}
      <HardCard color="#fff" shadow={BRAND.blue} radius={20} padding={14} style={{ position: 'relative' }}>
        <Tape width={68} top={-12} rotate={4} />
        <div style={{
          aspectRatio: '5 / 4',
          background: '#1a1a1a',
          border: `2.5px solid ${BRAND.ink}`,
          borderRadius: 12,
          marginBottom: 12,
          backgroundImage: `repeating-linear-gradient(135deg, #2a2a2a 0 16px, #1a1a1a 16px 32px)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: BRAND.yellow,
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 700, fontSize: 11, letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          FOTO DA UNIDADE
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            fontFamily: '"Fredoka", sans-serif',
            fontWeight: 700, fontSize: 17, color: BRAND.ink,
            textTransform: 'uppercase', letterSpacing: '0.02em',
          }}>UNIDADE ASA NORTE</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {[BRAND.red, BRAND.yellow, BRAND.green].map((c, i) => (
              <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, border: `1.5px solid ${BRAND.ink}` }} />
            ))}
          </div>
        </div>
      </HardCard>

      {/* MAP placeholder — improved card with address + CTA */}
      <div className="location-map-wrap">
      <HardCard color="#fff" shadow={BRAND.red} radius={20} padding={0} style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Map area */}
        <div style={{
          position: 'relative',
          aspectRatio: '4 / 4.2',
          background: '#eaf3fb',
          backgroundImage: `radial-gradient(${BRAND.blue}33 1.2px, transparent 1.2px)`,
          backgroundSize: '12px 12px',
          borderBottom: `3px solid ${BRAND.ink}`,
        }}>
          {/* Address card pinned on map */}
          <div style={{
            position: 'absolute',
            top: 14, left: 14, right: 14,
            background: '#fff',
            border: `2.5px solid ${BRAND.ink}`,
            borderRadius: 12,
            padding: '12px 14px',
            boxShadow: `4px 4px 0 ${BRAND.ink}`,
            textAlign: 'left',
            zIndex: 2,
          }}>
            <div style={{
              fontFamily: '"Fredoka", sans-serif',
              fontWeight: 700, fontSize: 16, color: BRAND.ink,
              textTransform: 'uppercase', letterSpacing: '0.02em',
              marginBottom: 4,
            }}>ROBÓTICA BSB</div>
            <div style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 600, fontSize: 12.5, color: BRAND.ink, lineHeight: 1.4,
              marginBottom: 10,
            }}>
              CLN 302 Bloco B, Sala 113<br />
              Asa Norte, Brasília DF
            </div>
            <button style={{
              background: BRAND.blue, color: '#fff',
              border: `2.5px solid ${BRAND.ink}`,
              borderRadius: 10,
              padding: '8px 14px',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 800, fontSize: 12,
              textTransform: 'uppercase', letterSpacing: '0.04em',
              boxShadow: `3px 3px 0 ${BRAND.ink}`,
              cursor: 'pointer',
              WebkitTextStroke: `0.6px ${BRAND.ink}`, paintOrder: 'stroke fill',
            }}>COMO CHEGAR</button>
          </div>

          {/* Map placeholder label */}
          <div style={{
            position: 'absolute', bottom: 10, left: 14,
            background: BRAND.yellow,
            border: `2px solid ${BRAND.ink}`,
            borderRadius: 8,
            padding: '4px 8px',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.06em',
            color: BRAND.ink,
            boxShadow: `2px 2px 0 ${BRAND.ink}`,
          }}>API · MAPA EM TEMPO REAL</div>

          {/* Pin in lower right */}
          <div style={{
            position: 'absolute', bottom: 60, right: 60,
            width: 28, height: 28, borderRadius: '50%',
            background: BRAND.red, border: `3px solid ${BRAND.ink}`,
            boxShadow: `3px 3px 0 ${BRAND.ink}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />
          </div>
        </div>
      </HardCard>
      </div>
      </div>

      {/* Notice */}
      <div className="location-notice" style={{ marginTop: 32 }}>
        <HardCard color="#fff" shadow={BRAND.ink} radius={16} padding={16} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', textAlign: 'left' }}>
          <div style={{
            flexShrink: 0,
            width: 36, height: 36, borderRadius: '50%',
            background: BRAND.yellow, border: `2.5px solid ${BRAND.ink}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"Fredoka", sans-serif', fontWeight: 700, fontSize: 22,
            color: BRAND.ink,
          }}>!</div>
          <div style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: 13.5, lineHeight: 1.5, fontWeight: 600, color: BRAND.ink,
          }}>
            Nossa sala fica no mesmo prédio do <b>restaurante Greens</b>. A entrada é por uma porta de vidro que fica na parte de trás do prédio.
          </div>
        </HardCard>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FOOTER (blue)
// ─────────────────────────────────────────────────────────────
function FooterSection() {
  const socialBtn = (color, label, icon) => (
    <button style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 10,
      background: color, color: '#fff',
      border: `2.5px solid ${BRAND.ink}`,
      borderRadius: 999,
      padding: '12px 22px',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 800, fontSize: 14,
      boxShadow: `4px 4px 0 ${BRAND.ink}`,
      cursor: 'pointer',
      WebkitTextStroke: `0.6px ${BRAND.ink}`, paintOrder: 'stroke fill',
      width: '100%', maxWidth: 240,
    }}>
      <span style={{
        width: 22, height: 22, borderRadius: '50%',
        background: '#fff', border: `2px solid ${BRAND.ink}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, color: BRAND.ink,
      }}>{icon}</span>
      {label}
    </button>
  );
  return (
    <footer style={{
      background: BRAND.blue,
      borderTop: `3px solid ${BRAND.ink}`,
      padding: '44px 22px 36px',
      textAlign: 'center',
      color: '#fff',
    }}>
      <div className="footer-grid">
      <div className="foot-col-left">
      {/* Logo card */}
      <div style={{
        display: 'inline-block',
        background: '#fff',
        border: `3px solid ${BRAND.ink}`,
        borderRadius: 18,
        padding: 12,
        boxShadow: `6px 6px 0 ${BRAND.ink}`,
        marginBottom: 14,
      }}>
        <img src="assets/logo.png" alt="" style={{ width: 70, height: 70, objectFit: 'contain', display: 'block' }} />
      </div>
      </div>

      <div className="foot-col-center">
      <div style={{
        fontFamily: '"Fredoka", sans-serif',
        fontWeight: 700, fontSize: 18,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        WebkitTextStroke: `1.2px ${BRAND.ink}`, paintOrder: 'stroke fill',
        marginBottom: 18,
      }}>SIGA E FALE CONOSCO</div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        {socialBtn('#e1306c', 'Instagram', '📷')}
        {socialBtn(BRAND.green, 'WhatsApp', '✆')}
      </div>
      </div>

      <div className="footer-divider" style={{ borderTop: '1px solid rgba(255,255,255,0.4)', margin: '24px 24px 18px' }} />

      <div className="foot-col-right">
      <div style={{
        fontFamily: '"Fredoka", sans-serif',
        fontWeight: 700, fontSize: 16,
        textTransform: 'uppercase', letterSpacing: '0.02em',
        marginBottom: 6,
        WebkitTextStroke: `1px ${BRAND.ink}`, paintOrder: 'stroke fill',
      }}>📍 ONDE ESTAMOS</div>
      <div style={{
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 600, fontSize: 13.5, lineHeight: 1.5,
      }}>
        CLN 302 Bloco B, Sala 113<br />
        Asa Norte, Brasília DF
      </div>
      </div>
      </div>

      <div style={{
        marginTop: 20,
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontSize: 11, fontWeight: 700, opacity: 0.85,
        letterSpacing: '0.04em',
      }}>© 2026 Robótica BSB. Todos os direitos reservados.</div>
    </footer>
  );
}

Object.assign(window, {
  TopNav, HeroSection, ScheduleSection, EvolutionSection, GallerySection, LocationSection, FooterSection,
});
