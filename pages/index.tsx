import React from 'react'
import { useRouter } from 'next/router'
import { Heading, Text } from '@chakra-ui/react'

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
            As a professional in the software industry, I am proud of the experience and expertise I bring to the table.
            Over the years, I have honed my skills in software architecture and development, gaining a deep
            understanding of Azure Cloud technologies. I have also led teams through Agile and Scrum methodologies,
            utilizing my exceptional leadership and mentorship skills to guide them towards success.
          </Text>
          <Text>
            My passion for software development is matched only by my commitment to staying on the cutting edge of new
            technologies and trends. I take pride in being a valuable asset to any organization, helping them optimize
            their software development processes and drive innovation. With my comprehensive skillset, I am confident in
            my ability to deliver results and exceed expectations.
          </Text>
        </div>
      </div>
      <Heading as="h2" size="xl" margin={2}>
        Blog Posts
      </Heading>
      <div className="flex-container">
        <div className="flex-item BlogTile" onClick={() => router.push('Blog/AppConfigStore')}>
          <Heading as="h3" size="md">
            App Config Store
          </Heading>
          <p>Why and how to set up an application configuration store in Azure</p>
        </div>
        <div className="flex-item BlogTile" onClick={() => router.push('Blog/AppConfigStore')}>
          <Heading as="h3" size="md">
            App Config Store
          </Heading>
          <p>Why and how to set up an application configuration store in Azure</p>
        </div>
        <div className="flex-item BlogTile" onClick={() => router.push('Blog/AppConfigStore')}>
          <Heading as="h3" size="md">
            App Config Store
          </Heading>
          <p>Why and how to set up an application configuration store in Azure</p>
        </div>
      </div>
    </div>
  )
}

{
  /* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="Rasile" data-color="#5F7FFF" data-emoji="🍺" data-font="Lato" data-text="Buy me a beer" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script> */
}
