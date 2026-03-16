import styles from '../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'

export const siteTitle = 'JungleClears'

export default function Layout({ children }) {
  const isDebug = process.env.NEXT_PUBLIC_DEBUG === 'true'
  return (
    <>
      {isDebug && <div style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>DEBUG MODE</div>}
      <Header />
      <div className="container p-0">
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
