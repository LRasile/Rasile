import React, { CSSProperties } from 'react'
import { useRouter } from 'next/router'
import { Heading, Text } from '@chakra-ui/react'

export default function Home() {
  const router = useRouter()
  const styleTile: CSSProperties = {
    textAlign: 'center',
    cursor: 'pointer',
    background: 'rgba(150, 150, 150, 0.1)',
    border: '0px solid rgba(150, 150, 150, 0.8)',
    borderRadius: 10,
    height: 200,
    minWidth: 200,
  }

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
          <Heading as="h1" size="2xl">
            Leonardo Rasile
          </Heading>
          <Text fontSize="xl">Owner of Rasile Consulting Ltd.</Text>
          <Text fontSize="md" noOfLines={[1, 2, 3]}>
            Experienced Lead Full Stack Developer specialising in .NET Core, Azure and React.
          </Text>
          <Heading as="h2" size="lg" mt={4}>
            About me
          </Heading>
          <Text my={2}>
            I am an experienced software developer with advanced understanding of Azure Cloud technologies. I have also
            led teams through Agile and Scrum methodologies.
          </Text>
          <Text>
            Software development is more than just a job to me; it's a genuine passion. I always strive to stay updated
            on the latest technologies and trends, so I can bring the most value to any organization I work with. My
            goal is to help companies optimize their software development processes and foster innovation.
          </Text>
        </div>
      </div>
      <Heading as="h2" size="xl" margin={2}>
        Prototypes
      </Heading>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 my-2">
          <div style={styleTile} onClick={() => router.push('Prototypes/JungleClears')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🌲</span>
            <div className="tileText">Jungle Clears</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div style={styleTile} onClick={() => router.push('Prototypes/PokemonEffectiveness')}>
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
          <div style={styleTile} onClick={() => router.push('Prototypes/LoopHeroSolver')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🔁</span>
            <div className="tileText">Loop Hero</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div style={styleTile} onClick={() => router.push('Prototypes/CardsForBeats')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🥁</span>
            <div className="tileText">Cards For Beats</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div style={styleTile} onClick={() => router.push('Prototypes/Menu')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🍝</span>
            <div className="tileText">Menu</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div style={styleTile} onClick={() => router.push('Prototypes/Timezones')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>⏰</span>
            <div className="tileText">Timezones</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div style={styleTile} onClick={() => router.push('Prototypes/HtmlColors')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🎨</span>
            <div className="tileText">HTML Colors</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div style={styleTile} onClick={() => router.push('Prototypes/ContractionTimer')}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>👶</span>
            <div className="tileText">Contraction Timer</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div style={styleTile} onClick={() => router.push('Prototypes/PhpMigration')}>
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
