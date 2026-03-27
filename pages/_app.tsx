import type { AppProps } from 'next/app'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import Layout from '../components/Layout'
import '../styles/bootstrap.css'
import '../styles/global.css'

// next-themes ThemeProvider types don't play well with TS 4.x — cast to any
const ThemeProvider = NextThemesProvider as any

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableColorScheme={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
