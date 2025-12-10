import { CSSProperties } from 'react'
import { useRouter } from 'next/router'

export default function Apps() {
  const router = useRouter()

  const styleTile: CSSProperties = { textAlign: 'center', cursor: 'pointer' }

  return (
    <div className="flex-container">
      <div className="flex-item" style={styleTile} onClick={() => router.push('Blog/AppConfig')}>
        <img style={{ margin: 'auto', padding: 10 }} height={150} width={150} src="../images/JungleIcon.png" />
        <div className="tileText">App Config</div>
      </div>
      <div className="flex-item" style={styleTile} onClick={() => router.push('Apps/PokemonEffectiveness')}>
        <div style={{ height: 150, paddingTop: 20 }}>
          <div className="Pokeball" style={{ margin: 'auto' }}>
            <div className="PokeballLine"></div>
            <div className="PokeballDot"></div>
          </div>
        </div>
        <div className="tileText"> Pokemon Effectiveness</div>
      </div>

      <div className="flex-item" style={styleTile} onClick={() => router.push('Apps/LoopHeroSolver')}>
        <img style={{ margin: 'auto', padding: 10 }} height={150} width={150} src="../images/LoopHeroLogo.png" />
        <div className="tileText">Loop Hero</div>
      </div>
    </div>
  )
}

{
  /* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="Rasile" data-color="#5F7FFF" data-emoji="🍺" data-font="Lato" data-text="Buy me a beer" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script> */
}
