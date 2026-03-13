const projects = [
  {
    title: 'Love Reminders',
    description: 'A relationship companion mobile app built with React Native. Coming soon to iOS and Android.',
    tags: ['React Native', 'Mobile', 'iOS', 'Android'],
    status: 'In Progress',
  },
  {
    title: 'The Melody Crafters',
    description: 'A music tuition website for a professional music school offering lessons in guitar, piano, drums and more.',
    tags: ['Next.js', 'React', 'Vercel'],
    status: 'Live',
    link: 'https://www.themelodycrafters.com/',
  },
  {
    title: 'Rasile Consulting Website',
    description: 'This site — a Next.js portfolio and consulting hub with interactive prototypes and tools.',
    tags: ['Next.js', 'TypeScript', 'React', 'Vercel'],
    status: 'Live',
    link: 'https://rasile.vercel.app',
  },
]

const tagStyle = {
  background: 'rgba(99,179,237,0.12)',
  color: '#63b3ed',
  border: '1px solid rgba(99,179,237,0.25)',
  borderRadius: '4px',
  padding: '0.15rem 0.55rem',
  fontSize: '0.78rem',
}

const statusColour = (status: string) => (status === 'Live' ? '#68d391' : '#f6ad55')

export default function Projects() {
  return (
    <div className="card" style={{ margin: '2rem 0', padding: '2rem 1rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Projects</h1>
      <p style={{ color: '#a0aec0', marginBottom: '2.5rem' }}>A selection of things we've built.</p>

      <div className="row g-4">
        {projects.map((p) => (
          <div key={p.title} className="col-lg-6 my-3">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ margin: 0 }}>{p.title}</h4>
                <span style={{ color: statusColour(p.status), fontSize: '0.82rem', fontWeight: 600 }}>
                  ● {p.status}
                </span>
              </div>
              <p style={{ color: '#a0aec0', margin: 0, fontSize: '0.95rem' }}>{p.description}</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {p.tags.map((t) => (
                  <span key={t} style={tagStyle}>
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#63b3ed', fontSize: '0.88rem', textDecoration: 'none' }}
                >
                  View site →
                </a>
              )}
            </div>
          </div>
        ))}

        {/* Placeholder */}
        <div className="col-lg-6">
          <div
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#4a5568',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '2rem' }}>🔒</span>
            <p style={{ margin: 0 }}>Client work available on request</p>
            <a href="mailto:leonardo@rasile.co.uk" style={{ color: '#63b3ed', fontSize: '0.88rem' }}>
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
