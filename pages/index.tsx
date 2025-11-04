import React, { CSSProperties } from 'react'
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
          <p>Experienced Lead Full Stack Developer specialiing in .NET Core, Azure and React.</p>
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
        </div>
      </div>

      {/* Love Reminders Section */}
      <div className="row p-2">
        <div className="col-12 p-0">
          <div
            className="m-4"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(196, 69, 105, 0.2))',
              borderRadius: '15px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                fontSize: '120px',
                opacity: '0.1',
                transform: 'rotate(15deg)',
              }}
            >
              💝
            </div>
            <h2>💕 Love Reminders - Coming Soon</h2>
            <p>Never miss a moment to show your love and appreciation</p>
            <p>
              Love Reminders is your personal relationship companion, designed to help you nurture the connections that
              matter most. From thoughtful birthday surprises to anniversary celebrations, our intelligent reminder
              system ensures you're always there for the people you love, even when life gets busy.
            </p>
            <p>Coming soon to iOS and Android app stores</p>
            <p onClick={() => router.push('LoveRemindersPrivacyPolicy')}>
              <a style={{ textDecoration: 'underline', color: 'inherit', cursor: 'pointer' }}>Privacy Policy</a>
            </p>
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
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/LoopHeroSolver')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🔁</span>
            <div className="tileText">Loop Hero</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/CardsForBeats')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🥁</span>
            <div className="tileText">Cards For Beats</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/Menu')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🍝</span>
            <div className="tileText">Menu</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/Timezones')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>⏰</span>
            <div className="tileText">Timezones</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/HtmlColors')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🎨</span>
            <div className="tileText">HTML Colors</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/ContractionTimer')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>👶</span>
            <div className="tileText">Contraction Timer</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="prototype-tile" onClick={() => router.push('Prototypes/PhpMigration')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🐘</span>
            <div className="tileText">PHP Gotchas</div>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="Rasile" data-color="#5F7FFF" data-emoji="🍺" data-font="Lato" data-text="Buy me a beer" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script> */
}
