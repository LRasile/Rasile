import { useEffect, useRef, useState } from 'react'

interface SearchSelectorProps {
  source: string[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  name?: string
  id?: string
  maxResults?: number
}

export default function SearchSelector({
  source,
  value,
  onChange,
  placeholder = 'Search...',
  name,
  id,
  maxResults = 8,
}: SearchSelectorProps) {
  const [inputText, setInputText] = useState(value)
  const [showDropdown, setShowDropdown] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    setInputText(value)
  }, [value])

  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false)
        setInputText(value)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [value])

  const suggestions = inputText.length > 0
    ? source.filter(item => item.toLowerCase().includes(inputText.toLowerCase())).slice(0, maxResults)
    : source.slice(0, maxResults)

  function selectItem(item: string) {
    onChange(item)
    setInputText(item)
    setShowDropdown(false)
    setHighlightedIndex(-1)
  }

  function handleInputChange(e) {
    const text = e.target.value
    setInputText(text)
    setShowDropdown(true)
    setHighlightedIndex(-1)
    if (text !== value) onChange('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      const target = highlightedIndex >= 0 ? suggestions[highlightedIndex] : suggestions[0]
      if (target) selectItem(target)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex(i => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Escape') {
      setShowDropdown(false)
      setInputText(value)
    }
  }

  return (
    <div ref={wrapperRef} className="search-selector-wrapper">
      {name && <input type="hidden" name={name} value={value} />}
      <input
        ref={inputRef}
        id={id}
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowDropdown(true)}
        placeholder={placeholder}
        className="search-selector-input"
        autoComplete="off"
        role="combobox"
        aria-expanded={showDropdown && suggestions.length > 0}
        aria-autocomplete="list"
      />
      {showDropdown && suggestions.length > 0 && (
        <div className="search-selector-dropdown" role="listbox">
          {suggestions.map((item, i) => (
            <div
              key={item}
              role="option"
              aria-selected={i === highlightedIndex}
              className={`search-selector-item${i === highlightedIndex ? ' search-selector-item--active' : ''}`}
              onMouseDown={e => { e.preventDefault(); selectItem(item) }}
              onMouseEnter={() => setHighlightedIndex(i)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
