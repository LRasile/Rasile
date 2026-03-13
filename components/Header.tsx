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
        <title>Leos Apps</title>
        <meta name="description" content="Leos Apps" />
        <link rel="icon" href="/logos/favicon.ico" />
      </Head>
    )
  }

  return (
    <>
      <Head>
        <title>Leos Apps</title>
        <meta name="description" content="Leos Apps" />
        <link rel="icon" href="/logos/favicon.ico" />
      </Head>
      {isDebug && <div style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>DEBUG MODE</div>}

      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2.5rem',
          height: '56px',
          background: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          position: 'sticky',
          top: 0,
          zIndex: 200,
        }}
      >
        <span
          onClick={() => router.push('/')}
          style={{
            fontWeight: 700,
            fontSize: '0.95rem',
            color: '#fff',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Rasile
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

        <a href="mailto:leonardo@rasile.co.uk" className={`${styles.cta} ${styles.ctaDesktop}`}>
          Get in touch
        </a>

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
              className={`${styles.mobileLink} ${router.pathname === link.href ? styles.linkActive : ''}`}
            >
              {link.label}
            </span>
          ))}
          <a href="mailto:leonardo@rasile.co.uk" className={styles.mobileCta}>Get in touch</a>
        </div>
      )}

      <BuyMeACoffee />
      <ScrollToTopButton />
    </>
  )
}

export default Header
