import { FaArrowUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false)

  function visibility() {
    window && window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false)
  }

  function scrollToTop() {
    window && window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window && window.addEventListener('scroll', visibility)
    return () => window && window.removeEventListener('scroll', visibility)
  }, [])

  return (
    <div className="ScrollToTop">
      {showButton && (
        <button aria-label="Scroll to top" title="Scroll to top" onClick={scrollToTop} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}
