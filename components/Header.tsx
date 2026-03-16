import Head from 'next/head'
import { BuyMeACoffee } from './BuyMeACoffee'
import { useRouter } from 'next/router'
import ScrollToTopButton from './ScrollToTopButton'
import styles from '../styles/Header.module.css'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/Services' },
  { label: 'About', href: '/About' },
  { label: 'Projects', href: '/Projects' },
  { label: 'Prototypes', href: '/Prototypes' },
]

const Header = (props) => {
  const router = useRouter()
  const isDebug = process.env.NEXT_PUBLIC_DEBUG === 'true'
  const [menuOpen, setMenuOpen] = useState(false)

  if (router.pathname === '/') {
    return (
      <Head>
        <title>Rasile Consulting</title>
        <meta name="description" content="Rasile Consulting — end-to-end software delivery" />
        <link rel="icon" href="/logos/favicon.ico" />
      </Head>
    )
  }

  return (
    <>
      <Head>
        <title>Rasile Consulting</title>
        <meta name="description" content="Rasile Consulting — end-to-end software delivery" />
        <link rel="icon" href="/logos/favicon.ico" />
      </Head>
      {isDebug && <div style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>DEBUG MODE</div>}

      <nav className={styles.nav}>
        <span className={styles.wordmark} onClick={() => router.push('/')}>
          Rasile <span className={styles.wordmarkAccent}>Consulting</span>
        </span>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <span
              key={link.href}
              onClick={() => router.push(link.href)}
              className={`${styles.link} ${router.pathname === link.href ? styles.linkActive : ''}`}
            >
              {link.label}
            </span>
          ))}
        </div>

        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen1 : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen2 : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen3 : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <span
              key={link.href}
              onClick={() => { router.push(link.href); setMenuOpen(false) }}
              className={`${styles.mobileLink} ${router.pathname === link.href ? styles.mobileLinkActive : ''}`}
            >
              {link.label}
            </span>
          ))}
        </div>
      )}

      <BuyMeACoffee />
      <ScrollToTopButton />
    </>
  )
}

export default Header
