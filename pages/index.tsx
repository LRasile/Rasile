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
      <div className="homeLeft">
        <p className="homeEyebrow">Software Consultancy</p>
        <h1>
          Rasile
          <br />
          <span>Consulting</span>
        </h1>
        <p className="homeTagline">End-to-end software delivery. .NET Core · Azure · React.</p>
      </div>

      <div className="homeRight">
        <p className="homeRightLabel">Navigate</p>
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
