import { useState } from 'react'
import SearchSelector from '../../components/SearchSelector'

const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia', 'Austria', 'Bangladesh',
  'Belgium', 'Bolivia', 'Brazil', 'Bulgaria', 'Cambodia', 'Canada', 'Chile', 'China',
  'Colombia', 'Croatia', 'Cuba', 'Czech Republic', 'Denmark', 'Ecuador', 'Egypt',
  'Estonia', 'Ethiopia', 'Finland', 'France', 'Germany', 'Ghana', 'Greece', 'Guatemala',
  'Hungary', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
  'Jamaica', 'Japan', 'Jordan', 'Kenya', 'Latvia', 'Lithuania', 'Malaysia', 'Mexico',
  'Morocco', 'Myanmar', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Pakistan',
  'Peru', 'Philippines', 'Poland', 'Portugal', 'Romania', 'Russia', 'Saudi Arabia',
  'Serbia', 'Singapore', 'Slovakia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka',
  'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'Uganda', 'Ukraine',
  'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Venezuela',
  'Vietnam', 'Zimbabwe',
]

const LANGUAGES = [
  'Bash', 'C', 'C#', 'C++', 'Clojure', 'Crystal', 'Dart', 'Elixir', 'Elm', 'Erlang',
  'F#', 'Go', 'Groovy', 'Haskell', 'Java', 'JavaScript', 'Julia', 'Kotlin', 'Lua',
  'MATLAB', 'Nim', 'Objective-C', 'OCaml', 'Perl', 'PHP', 'Python', 'R', 'Ruby',
  'Rust', 'Scala', 'Swift', 'TypeScript', 'Zig',
]

export default function SearchSelectorPrototype() {
  const [country, setCountry] = useState('')
  const [language, setLanguage] = useState('')
  const [submitted, setSubmitted] = useState<{ country: string; language: string } | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setSubmitted({
      country: data.get('country') as string,
      language: data.get('language') as string,
    })
  }

  return (
    <div className="pageWrapper">
      <div className="pageHeader">
        <p className="pageEyebrow">Prototype</p>
        <h1 className="pageTitle">Search Selector</h1>
        <p className="pageSubtitle">A searchable dropdown that filters as you type, bindable to form values.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              <div>
                <label htmlFor="country-select" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Country
                </label>
                <SearchSelector
                  id="country-select"
                  name="country"
                  source={COUNTRIES}
                  value={country}
                  onChange={setCountry}
                  placeholder="Search countries..."
                />
              </div>

              <div>
                <label htmlFor="lang-select" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Programming Language
                </label>
                <SearchSelector
                  id="lang-select"
                  name="language"
                  source={LANGUAGES}
                  value={language}
                  onChange={setLanguage}
                  placeholder="Search languages..."
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  style={{
                    background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6,
                    padding: '0.5rem 1.25rem', cursor: 'pointer', fontWeight: 500, fontSize: '0.95rem',
                  }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => { setCountry(''); setLanguage(''); setSubmitted(null) }}
                  style={{
                    background: 'none', border: '1px solid #555', borderRadius: 6,
                    padding: '0.5rem 1.25rem', cursor: 'pointer', fontSize: '0.95rem',
                  }}
                >
                  Reset
                </button>
              </div>

              {submitted && (
                <div style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: 6, padding: '0.75rem 1rem' }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.85rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Form submitted</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.95rem' }}>
                    <div>country: <strong>{submitted.country || '(empty)'}</strong></div>
                    <div>language: <strong>{submitted.language || '(empty)'}</strong></div>
                  </div>
                </div>
              )}

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
