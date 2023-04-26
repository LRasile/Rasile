import React, { useEffect, useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { JungleClear } from '../../lib/JungleClear'
import ChampRow from '../../components/JungleClears/ChampRow'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
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
        <InputGroup>
          <InputLeftElement
            fontSize="1.5em"
            margin="1"
            children={<SearchIcon color="gray.400" />}
          />
          <Input
            placeholder="Champion name or clear time, Amumu or 3:15"
            size="lg"
            value={search}
            onChange={handleChange}
          />
        </InputGroup>
      </div>
      <div className="col-12 m-0 p-0">
        {data &&
          data.map((jungleClear) => <ChampRow jungleClear={jungleClear} />)}
      </div>
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
