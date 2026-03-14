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
    <div className="card" style={{ margin: '0.75rem 0' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>What we do</h2>
      <p style={{ color: '#a0aec0', marginBottom: '2rem' }}>A selection of our most popular services.</p>

      <div className="row g-3">
        {services.map((s) => (
          <div key={s.title} className="col-lg-4 col-md-6 my-2">
            <div className="card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{s.icon}</div>
              <h5 style={{ marginBottom: '0.4rem' }}>{s.title}</h5>
              <p style={{ color: '#c0cec0', margin: 0, fontSize: '0.9rem' }}>{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href="mailto:leonardo@rasile.co.uk" style={{ color: '#63b3ed', fontSize: '0.9rem' }}>
          Get in touch to discuss your project →
        </a>
      </div>
    </div>
  )
}
