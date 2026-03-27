import Head from 'next/head'
import { BuyMeACoffee } from './BuyMeACoffee'
import { useRouter } from 'next/router'
import ScrollToTopButton from './ScrollToTopButton'
import styles from '../styles/Header.module.css'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/Services' },
  { label: 'About', href: '/About' },
  { label: 'Projects', href: '/Projects' },
  { label: 'Prototypes', href: '/Prototypes' },
]

const Header = (props) => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <Head>
        <title>Rasile Consulting</title>
        <meta name="description" content="Rasile Consulting — end-to-end software delivery" />
        <link rel="icon" href="/logos/favicon.ico" />
      </Head>

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

        <div className={styles.navRight}>
          {mounted && (
            <button
              className={styles.themeToggle}
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          )}

          <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen1 : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen2 : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen3 : ''}`} />
          </button>
        </div>
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
