export default function About() {
  return (
    <div className="card" style={{ margin: '2rem 0' }}>
      <div className="row">
        <div className="col-lg-3 text-center">
          <img
            src="/images/SmartB&W.jpg"
            alt="Leonardo Rasile"
            style={{
              borderRadius: '5rem',
              height: 920 * 0.4,
              width: 690 * 0.4,
              margin: '1rem auto',
              boxShadow: '1px 1px 1px #333',
            }}
          />
        </div>
        <div className="col-lg-9 p-5">
          <h1>Leonardo Rasile</h1>
          <p>Owner of Rasile Consulting Ltd.</p>
          <p>Experienced Lead Full Stack Developer specialising in .NET Core, Azure and React.</p>
          <h2>About me</h2>
          <p>
            I am an experienced software developer with advanced understanding of Azure Cloud technologies. I have also
            led teams through Agile and Scrum methodologies.
          </p>
          <p>
            Software development is more than just a job to me; it's a genuine passion. I always strive to stay updated
            on the latest technologies and trends, so I can bring the most value to any organization I work with. My
            goal is to help companies optimize their software development processes and foster innovation.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:leonardo@rasile.co.uk"
              style={{ color: '#63b3ed', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              ✉️ leonardo@rasile.co.uk
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-rasile"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#63b3ed', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
