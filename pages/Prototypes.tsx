import React, { CSSProperties } from 'react'
import { useRouter } from 'next/router'

export default function Apps() {
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
    <div className="row justify-content-center">
      <div className="col-lg-3 col-md-6 my-2">
        <div style={styleTile} onClick={() => router.push('Prototypes/JungleClears')}>
          <img style={{ margin: 'auto', padding: 10 }} height={150} width={150} src="../images/JungleIcon.png" />
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
          <img style={{ margin: 'auto', padding: 10 }} height={150} width={150} src="../images/LoopHeroLogo.png" />
          <div className="tileText">Loop Hero</div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 my-2">
        <div style={styleTile} onClick={() => router.push('Prototypes/CardsForBeats')}>
          <img
            style={{ margin: 'auto', paddingTop: 40 }}
            height={150}
            width={150}
            src="../images/cardsForBeats/LSBL.png"
          />
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
    </div>
  )
}

{
  /* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="Rasile" data-color="#5F7FFF" data-emoji="🍺" data-font="Lato" data-text="Buy me a beer" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script> */
}
