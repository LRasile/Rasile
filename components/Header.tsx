import Head from 'next/head'
import { BuyMeACoffee } from './BuyMeACoffee'
import { useRouter } from 'next/router'
import ScrollToTopButton from './ScrollToTopButton'

const Header = (props) => {
  const router = useRouter()
  const isDebug = process.env.NEXT_PUBLIC_DEBUG === 'true'

  return (
    <>
      <Head>
        <title>Leos Apps</title>
        <meta name="description" content="Leos Apps" />
        <link rel="icon" href="/logos/favicon.ico" />
      </Head>
      {isDebug && <div style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>DEBUG MODE</div>}
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ padding: '1rem' }}>
          <h1 style={{ color: '#037', cursor: 'pointer' }} onClick={() => router.push('/')}>
            <img
              className="Logo"
              src="/logos/logo.svg"
              alt="Home"
              style={{
                filter: 'invert(100%)',
              }}
            />

            {/* 
            <img
              className="Logo"
              src="/logos/android-chrome-192x192.png"
              title="Home"
            /> */}
          </h1>
        </div>
        <div style={{ flex: 1 }}></div>
        <div style={{ padding: '1rem' }}>
          {/* <IconButton aria-label="Toggle Mode" onClick={toggleColorMode} title="Toggle Mode">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </IconButton> */}
          <BuyMeACoffee />
          <ScrollToTopButton />
        </div>
      </div>
    </>
  )
}

export default Header
