import { useRouter } from 'next/router'

export default function Prototypes() {
  const router = useRouter()

  return (
    <div className="panel" style={{ margin: '2rem 0' }}>
      <h2 className="p-2">Prototypes</h2>
      <div className="row justify-content-center p-4">
        <div className="col-lg-3 col-md-6 my-2">
          <div className="tile" onClick={() => router.push('Prototypes/JungleClears')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🌲</span>
            <div className="tileText">Jungle Clears</div>
            <div className="tileDescription">League of Legends jungle route planner pulled live from Google Sheets</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="tile" onClick={() => router.push('Prototypes/PokemonEffectiveness')} style={{ cursor: 'pointer', textAlign: 'center' }}>
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
          <div className="tile" onClick={() => router.push('Prototypes/LoopHeroSolver')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🔁</span>
            <div className="tileText">Loop Hero</div>
            <div className="tileDescription">Tile placement helper and strategy guide for Loop Hero runs</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="tile" onClick={() => router.push('Prototypes/CardsForBeats')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🥁</span>
            <div className="tileText">Cards For Beats</div>
            <div className="tileDescription">Card-based game for generating beat patterns and rhythm ideas</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="tile" onClick={() => router.push('Prototypes/Menu')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🍝</span>
            <div className="tileText">Menu</div>
            <div className="tileDescription">Weekly meal planner and recipe browser for home cooking</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="tile" onClick={() => router.push('Prototypes/Timezones')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>⏰</span>
            <div className="tileText">Timezones</div>
            <div className="tileDescription">Compare current times across multiple cities at a glance</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="tile" onClick={() => router.push('Prototypes/HtmlColors')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🎨</span>
            <div className="tileText">HTML Colors</div>
            <div className="tileDescription">Browse and search all named HTML/CSS colours with hex values</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="tile" onClick={() => router.push('Prototypes/ContractionTimer')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>👶</span>
            <div className="tileText">Contraction Timer</div>
            <div className="tileDescription">Time and track contractions during labour with duration and frequency</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2">
          <div className="tile" onClick={() => router.push('Prototypes/PhpMigration')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>🐘</span>
            <div className="tileText">PHP Gotchas</div>
            <div className="tileDescription">Common PHP pitfalls and migration gotchas for .NET developers</div>
          </div>
        </div>
      </div>
    </div>
  )
}