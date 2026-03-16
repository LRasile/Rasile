export default function About() {
  return (
    <div className="pageWrapper">

      <div className="pageHeader">
        <p className="pageEyebrow">Our Story</p>
        <h1 className="pageTitle">Built to deliver software<br />that actually ships.</h1>
        <p className="pageSubtitle">
          Rasile Consulting is a software consultancy specialising in end-to-end delivery — from architecture and cloud
          infrastructure to production-ready applications. We work with organisations that need things done properly.
        </p>
      </div>

      <div className="pageDivider" />

      <div style={{ marginBottom: '4rem' }}>
        <p className="pageEyebrow">What we do</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {[
            { title: '.NET Core & C#', body: 'Robust backend services, APIs, and enterprise systems built on the Microsoft stack.' },
            { title: 'Azure Cloud', body: 'Architecture, infrastructure, DevOps pipelines, and cloud-native solutions on Azure.' },
            { title: 'React & TypeScript', body: 'Modern, performant frontends and interactive web applications.' },
          ].map((item) => (
            <div key={item.title} className="tile">
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' }}>{item.title}</h2>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pageDivider" />

      <div style={{ marginBottom: '4rem' }}>
        <p className="pageEyebrow">Founder</p>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <img
            src="/images/SmartB&W.jpg"
            alt="Leonardo Rasile"
            style={{ borderRadius: '12px', width: '220px', height: '293px', objectFit: 'cover', flexShrink: 0, boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}
          />
          <div style={{ flex: 1, minWidth: '260px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>Leonardo Rasile</h2>
            <p className="pageEyebrow" style={{ marginBottom: '1.5rem' }}>Founder & Lead Engineer</p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
              Leonardo has spent his career building software for organisations that demand reliability — from
              cloud-native platforms on Azure to high-performance APIs and data-driven frontends.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
              He founded Rasile Consulting to bring senior-level engineering expertise directly to clients, without
              the overhead and slowness of large agencies. The focus is always on pragmatic, well-crafted solutions
              that teams can actually own and maintain.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="mailto:leonardo@rasile.co.uk" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                leonardo@rasile.co.uk
              </a>
              <a href="https://www.linkedin.com/in/leonardo-rasile" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pageDivider" />

      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Ready to work together?</h2>
        <p className="pageSubtitle" style={{ marginBottom: '1.5rem' }}>Get in touch to discuss your project.</p>
        <a href="mailto:leonardo@rasile.co.uk" className="btnPrimary">Get in touch</a>
      </div>

    </div>
  )
}
