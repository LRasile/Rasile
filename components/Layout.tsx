import styles from '../styles/Home.module.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export const siteTitle = 'JungleClears'

export default function Layout({ children }): JSX.Element {
  return (
    <div className="container p-0">
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
