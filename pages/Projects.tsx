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
    title: 'Dr. Martens',
    description: 'Finance and HR integrations between D365 and Dayforce via Azure Functions.',
    tags: ['Azure Functions', 'D365', 'Dayforce', 'Finance', 'HR'],
    status: 'Live',
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
  background: 'rgba(59,130,246,0.12)',
  color: '#60a5fa',
  border: '1px solid rgba(59,130,246,0.25)',
  borderRadius: '4px',
  padding: '0.15rem 0.55rem',
  fontSize: '0.78rem',
}

const statusColour = (status: string) => (status === 'Live' ? '#68d391' : '#f6ad55')

export default function Projects() {
  return (
    <div className="pageWrapper">

      <div className="pageHeader">
        <p className="pageEyebrow">Work</p>
        <h1 className="pageTitle">Projects.</h1>
        <p className="pageSubtitle">A selection of things we've built — products, platforms, and client work.</p>
      </div>

      <div className="row g-4">
        {projects.map((p) => (
          <div key={p.title} className="col-lg-6 my-3">
            <div className="tile" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ margin: 0 }}>{p.title}</h4>
                <span style={{ color: statusColour(p.status), fontSize: '0.82rem', fontWeight: 600 }}>● {p.status}</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.95rem' }}>{p.description}</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {p.tags.map((t) => (
                  <span key={t} style={tagStyle}>{t}</span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', fontSize: '0.88rem', textDecoration: 'none' }}>
                  View site →
                </a>
              )}
            </div>
          </div>
        ))}

        <div className="col-lg-6">
          <div className="tile" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
            <span style={{ fontSize: '2rem' }}>🔒</span>
            <p style={{ margin: 0 }}>Client work available on request</p>
            <a href="mailto:leonardo@rasile.co.uk" style={{ color: '#3b82f6', fontSize: '0.88rem' }}>Get in touch →</a>
          </div>
        </div>
      </div>

    </div>
  )
}
