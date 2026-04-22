import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import Layout from '../components/Layout'
import '../styles/bootstrap.css'
import '../styles/global.css'

// next-themes ThemeProvider types don't play well with TS 4.x — cast to any
const ThemeProvider = NextThemesProvider as any

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableColorScheme={false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
