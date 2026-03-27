const services = [
  {
    icon: '🌐',
    title: 'Business Websites',
    description: 'Professional sites for SMEs, landing pages, and portfolio sites that convert.',
  },
  {
    icon: '🚀',
    title: 'SaaS MVPs',
    description: 'Turn your idea into a working product fast — built to scale from day one.',
  },
  {
    icon: '📊',
    title: 'Customer Portals',
    description: 'Dashboards, reporting tools, and internal platforms tailored to your workflow.',
  },
  {
    icon: '☁️',
    title: 'Azure Cloud Migrations',
    description: 'Move from on-premise to Azure with minimal downtime and maximum reliability.',
  },
  {
    icon: '🔧',
    title: 'Legacy .NET Modernisation',
    description: 'Rewrite and upgrade ageing .NET systems into clean, maintainable code.',
  },
  {
    icon: '🔍',
    title: 'Code Audits',
    description: 'Pre-launch or pre-funding technical reviews with actionable recommendations.',
  },
]

export default function Services() {
  return (
    <div className="pageWrapper">

      <div className="pageHeader">
        <p className="pageEyebrow">Services</p>
        <h1 className="pageTitle">What we build.</h1>
        <p className="pageSubtitle">
          End-to-end software delivery across web, cloud, and enterprise. Here's what we do best.
        </p>
      </div>

      <div className="row g-3">
        {services.map((s) => (
          <div key={s.title} className="col-lg-4 col-md-6 my-2">
            <div className="tile">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{s.icon}</div>
              <h5 style={{ marginBottom: '0.4rem' }}>{s.title}</h5>
              <p style={{ color: 'rgba(15,23,42,0.5)', margin: 0, fontSize: '0.9rem' }}>{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pageDivider" style={{ marginTop: '4rem' }} />

      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Have a project in mind?</h2>
        <p className="pageSubtitle" style={{ marginBottom: '1.5rem' }}>Get in touch and let's talk about what you need.</p>
        <a href="mailto:leonardo@rasile.co.uk" className="btnPrimary">Get in touch</a>
      </div>

    </div>
  )
}
