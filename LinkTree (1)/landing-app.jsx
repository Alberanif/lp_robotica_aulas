// Landing page app shell

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showFrame": true,
  "wonky": true
}/*EDITMODE-END*/;

function LandingApp() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const page = (
    <div style={{
      width: '100%',
      minHeight: '100%',
      background: BRAND.bg,
      color: BRAND.ink,
      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
    }}>
      <TopNav />
      <HeroSection />
      <ScheduleSection />
      <EvolutionSection />
      <GallerySection />
      <LocationSection />
      <FooterSection />
    </div>
  );

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
        <div className="desktop-mode" style={{
          width: '100%',
          maxWidth: 1240,
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
        <TweakSection title="Layout">
          <TweakToggle label="Mostrar frame iPhone" value={tw.showFrame} onChange={v => setTweak('showFrame', v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LandingApp />);
