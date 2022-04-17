import React from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex-container">
      <div
        className="flex-item"
        style={{ textAlign: 'center', cursor: 'pointer' }}
        onClick={() => router.push('Blog')}
      >
        <div className="tileText">Blog</div>
      </div>
    </div>
  )
}

{
  /* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="Rasile" data-color="#5F7FFF" data-emoji="🍺" data-font="Lato" data-text="Buy me a beer" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script> */
}
