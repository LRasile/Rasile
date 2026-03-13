import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <div className="row">
        <div className="col-lg-3 text-center">
          {/* <img
            src="/images/Me.png"
            alt="Leonardo Rasile"
            style={{
              borderRadius: '50%',
              height: 450 * 0.4,
              width: 475 * 0.4,
              margin: '1rem auto',
              boxShadow: '1px 1px 1px #333',
            }}
          />     */}
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

      {/* Prototypes Section */}
      <h2 className="p-2">Prototypes</h2>
      <div className="row justify-content-center p-4">
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/JungleClears')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🌲</span>
            <div className="tileText">Jungle Clears</div>
            <div className="tileDescription">League of Legends jungle route planner pulled live from Google Sheets</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/PokemonEffectiveness')}>
            <div style={{ height: 150, paddingTop: 20 }}>
              <div className="Pokeball" style={{ margin: 'auto' }}>
                <div className="PokeballLine"></div>
                <div className="PokeballDot"></div>
              </div>
            </div>
            <div className="tileText">Pokemon Effectiveness</div>
            <div className="tileDescription">Look up type matchups and damage multipliers for any Pokémon</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/LoopHeroSolver')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🔁</span>
            <div className="tileText">Loop Hero</div>
            <div className="tileDescription">Tile placement helper and strategy guide for Loop Hero runs</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/CardsForBeats')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🥁</span>
            <div className="tileText">Cards For Beats</div>
            <div className="tileDescription">Card-based game for generating beat patterns and rhythm ideas</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/Menu')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🍝</span>
            <div className="tileText">Menu</div>
            <div className="tileDescription">Weekly meal planner and recipe browser for home cooking</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/Timezones')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>⏰</span>
            <div className="tileText">Timezones</div>
            <div className="tileDescription">Compare current times across multiple cities at a glance</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/HtmlColors')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🎨</span>
            <div className="tileText">HTML Colors</div>
            <div className="tileDescription">Browse and search all named HTML/CSS colours with hex values</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/ContractionTimer')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>👶</span>
            <div className="tileText">Contraction Timer</div>
            <div className="tileDescription">Time and track contractions during labour with duration and frequency</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/PhpMigration')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🐘</span>
            <div className="tileText">PHP Gotchas</div>
            <div className="tileDescription">Common PHP pitfalls and migration gotchas for .NET developers</div>
          </div>
        </div>
      </div>

      {/* Love Reminders Section */}
      <div className="row p-2">
        <div className="col-12 p-0">
          <div
            className="m-4"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.15), rgba(196, 69, 105, 0.15))',
              borderRadius: '12px',
              padding: '1.2rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div>
              <strong>💕 Love Reminders</strong>
              <span style={{ color: '#a0aec0', marginLeft: '0.75rem' }}>
                A relationship companion app — coming soon to iOS &amp; Android
              </span>
            </div>
            <span
              onClick={() => router.push('LoveRemindersPrivacyPolicy')}
              style={{ color: '#a0aec0', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="Rasile" data-color="#5F7FFF" data-emoji="🍺" data-font="Lato" data-text="Buy me a beer" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script> */
}
