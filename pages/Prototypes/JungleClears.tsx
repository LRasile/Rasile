import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { JungleClear } from '../../lib/JungleClear'
import ChampRow from '../../components/JungleClears/ChampRow'
import { GetJungleClears } from '../../lib/JungleClearService'

export interface JungleClearProps {
  jungleClears: JungleClear[]
  host: string
}

export default function JungleClears({ jungleClears }: JungleClearProps) {
  const [data, setData] = useState<JungleClear[]>(jungleClears)
  const oringalData: JungleClear[] = jungleClears

  const [search, setSearch] = useState('')

  useEffect(() => {
    if (oringalData) {
      setData(
        oringalData.filter(
          (item) =>
            item.champion.toLowerCase().search(search.toLowerCase()) != -1 ||
            item.time.search(search.toLowerCase()) != -1
        )
      )
    }
  }, [search])

  function handleChange(event) {
    setSearch(event.target.value)
  }

  return (
    <>
      <div className="col-12 p-md-2">
        <div style={{ position: 'relative' }}>
          <input
            placeholder="Champion name or clear time, Amumu or 3:15"
            value={search}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', paddingRight: '2.5rem', fontSize: '1.125rem' }}
          />
          <FaSearch style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.5em', color: '#999' }} />
        </div>
      </div>
      <div className="col-12 m-0 p-0">{data && data.map((jungleClear) => <ChampRow jungleClear={jungleClear} />)}</div>
    </>
  )
}

export async function getStaticProps() {
  const jungleClears = await GetJungleClears(process.env.GOOGLE_API_KEY)

  return {
    props: { jungleClears },
    revalidate: 86400,
  }
}

{
  /* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="Rasile" data-color="#5F7FFF" data-emoji="🍺" data-font="Lato" data-text="Buy me a beer" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script> */
}
