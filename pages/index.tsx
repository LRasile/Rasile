import { useRouter } from 'next/router'

const menuItems = [
  { label: 'Services', href: '/Services' },
  { label: 'About', href: '/About' },
  { label: 'Projects', href: '/Projects' },
  { label: 'Prototypes', href: '/Prototypes' },
]

export default function Home() {
  const router = useRouter()

  return (
    <div className="homeWrapper">
      <div className="homePanel">
        <h1>Rasile Consulting</h1>
        <ul className="homeMenu">
          {menuItems.map((item) => (
            <li key={item.href} className="homeMenuItem" onClick={() => router.push(item.href)}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
