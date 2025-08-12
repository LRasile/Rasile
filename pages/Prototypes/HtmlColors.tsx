import React, { useEffect, useRef, useState } from 'react'

const colorData = [
  { name: 'aliceblue', hex: '#f0f8ff', red: 240, green: 248, blue: 255 },
  { name: 'antiquewhite', hex: '#faebd7', red: 250, green: 235, blue: 215 },
  { name: 'aqua', hex: '#00ffff', red: 0, green: 255, blue: 255 },
  { name: 'aquamarine', hex: '#7fffd4', red: 127, green: 255, blue: 212 },
  { name: 'azure', hex: '#f0ffff', red: 240, green: 255, blue: 255 },
  { name: 'beige', hex: '#f5f5dc', red: 245, green: 245, blue: 220 },
  { name: 'bisque', hex: '#ffe4c4', red: 255, green: 228, blue: 196 },
  { name: 'black', hex: '#000000', red: 0, green: 0, blue: 0 },
  { name: 'blanchedalmond', hex: '#ffebcd', red: 255, green: 235, blue: 205 },
  { name: 'blue', hex: '#0000ff', red: 0, green: 0, blue: 255 },
  { name: 'blueviolet', hex: '#8a2be2', red: 138, green: 43, blue: 226 },
  { name: 'brown', hex: '#a52a2a', red: 165, green: 42, blue: 42 },
  { name: 'burlywood', hex: '#deb887', red: 222, green: 184, blue: 135 },
  { name: 'cadetblue', hex: '#5f9ea0', red: 95, green: 158, blue: 160 },
  { name: 'chartreuse', hex: '#7fff00', red: 127, green: 255, blue: 0 },
  { name: 'chocolate', hex: '#d2691e', red: 210, green: 105, blue: 30 },
  { name: 'coral', hex: '#ff7f50', red: 255, green: 127, blue: 80 },
  { name: 'cornflowerblue', hex: '#6495ed', red: 100, green: 149, blue: 237 },
  { name: 'cornsilk', hex: '#fff8dc', red: 255, green: 248, blue: 220 },
  { name: 'crimson', hex: '#dc143c', red: 220, green: 20, blue: 60 },
  { name: 'cyan', hex: '#00ffff', red: 0, green: 255, blue: 255 },
  { name: 'darkblue', hex: '#00008b', red: 0, green: 0, blue: 139 },
  { name: 'darkcyan', hex: '#008b8b', red: 0, green: 139, blue: 139 },
  { name: 'darkgoldenrod', hex: '#b8860b', red: 184, green: 134, blue: 11 },
  { name: 'darkgray', hex: '#a9a9a9', red: 169, green: 169, blue: 169 },
  { name: 'darkgreen', hex: '#006400', red: 0, green: 100, blue: 0 },
  { name: 'darkgrey', hex: '#a9a9a9', red: 169, green: 169, blue: 169 },
  { name: 'darkkhaki', hex: '#bdb76b', red: 189, green: 183, blue: 107 },
  { name: 'darkmagenta', hex: '#8b008b', red: 139, green: 0, blue: 139 },
  { name: 'darkolivegreen', hex: '#556b2f', red: 85, green: 107, blue: 47 },
  { name: 'darkorange', hex: '#ff8c00', red: 255, green: 140, blue: 0 },
  { name: 'darkorchid', hex: '#9932cc', red: 153, green: 50, blue: 204 },
  { name: 'darkred', hex: '#8b0000', red: 139, green: 0, blue: 0 },
  { name: 'darksalmon', hex: '#e9967a', red: 233, green: 150, blue: 122 },
  { name: 'darkseagreen', hex: '#8fbc8f', red: 143, green: 188, blue: 143 },
  { name: 'darkslateblue', hex: '#483d8b', red: 72, green: 61, blue: 139 },
  { name: 'darkslategray', hex: '#2f4f4f', red: 47, green: 79, blue: 79 },
  { name: 'darkslategrey', hex: '#2f4f4f', red: 47, green: 79, blue: 79 },
  { name: 'darkturquoise', hex: '#00ced1', red: 0, green: 206, blue: 209 },
  { name: 'darkviolet', hex: '#9400d3', red: 148, green: 0, blue: 211 },
  { name: 'deeppink', hex: '#ff1493', red: 255, green: 20, blue: 147 },
  { name: 'deepskyblue', hex: '#00bfff', red: 0, green: 191, blue: 255 },
  { name: 'dimgray', hex: '#696969', red: 105, green: 105, blue: 105 },
  { name: 'dimgrey', hex: '#696969', red: 105, green: 105, blue: 105 },
  { name: 'dodgerblue', hex: '#1e90ff', red: 30, green: 144, blue: 255 },
  { name: 'firebrick', hex: '#b22222', red: 178, green: 34, blue: 34 },
  { name: 'floralwhite', hex: '#fffaf0', red: 255, green: 250, blue: 240 },
  { name: 'forestgreen', hex: '#228b22', red: 34, green: 139, blue: 34 },
  { name: 'fuchsia', hex: '#ff00ff', red: 255, green: 0, blue: 255 },
  { name: 'gainsboro', hex: '#dcdcdc', red: 220, green: 220, blue: 220 },
  { name: 'ghostwhite', hex: '#f8f8ff', red: 248, green: 248, blue: 255 },
  { name: 'gold', hex: '#ffd700', red: 255, green: 215, blue: 0 },
  { name: 'goldenrod', hex: '#daa520', red: 218, green: 165, blue: 32 },
  { name: 'gray', hex: '#808080', red: 128, green: 128, blue: 128 },
  { name: 'green', hex: '#008000', red: 0, green: 128, blue: 0 },
  { name: 'greenyellow', hex: '#adff2f', red: 173, green: 255, blue: 47 },
  { name: 'grey', hex: '#808080', red: 128, green: 128, blue: 128 },
  { name: 'honeydew', hex: '#f0fff0', red: 240, green: 255, blue: 240 },
  { name: 'hotpink', hex: '#ff69b4', red: 255, green: 105, blue: 180 },
  { name: 'indianred', hex: '#cd5c5c', red: 205, green: 92, blue: 92 },
  { name: 'indigo', hex: '#4b0082', red: 75, green: 0, blue: 130 },
  { name: 'ivory', hex: '#fffff0', red: 255, green: 255, blue: 240 },
  { name: 'khaki', hex: '#f0e68c', red: 240, green: 230, blue: 140 },
  { name: 'lavender', hex: '#e6e6fa', red: 230, green: 230, blue: 250 },
  { name: 'lavenderblush', hex: '#fff0f5', red: 255, green: 240, blue: 245 },
  { name: 'lawngreen', hex: '#7cfc00', red: 124, green: 252, blue: 0 },
  { name: 'lemonchiffon', hex: '#fffacd', red: 255, green: 250, blue: 205 },
  { name: 'lightblue', hex: '#add8e6', red: 173, green: 216, blue: 230 },
  { name: 'lightcoral', hex: '#f08080', red: 240, green: 128, blue: 128 },
  { name: 'lightcyan', hex: '#e0ffff', red: 224, green: 255, blue: 255 },
  { name: 'lightgoldenrodyellow', hex: '#fafad2', red: 250, green: 250, blue: 210 },
  { name: 'lightgray', hex: '#d3d3d3', red: 211, green: 211, blue: 211 },
  { name: 'lightgreen', hex: '#90ee90', red: 144, green: 238, blue: 144 },
  { name: 'lightgrey', hex: '#d3d3d3', red: 211, green: 211, blue: 211 },
  { name: 'lightpink', hex: '#ffb6c1', red: 255, green: 182, blue: 193 },
  { name: 'lightsalmon', hex: '#ffa07a', red: 255, green: 160, blue: 122 },
  { name: 'lightseagreen', hex: '#20b2aa', red: 32, green: 178, blue: 170 },
  { name: 'lightskyblue', hex: '#87cefa', red: 135, green: 206, blue: 250 },
  { name: 'lightslategray', hex: '#778899', red: 119, green: 136, blue: 153 },
  { name: 'lightslategrey', hex: '#778899', red: 119, green: 136, blue: 153 },
  { name: 'lightsteelblue', hex: '#b0c4de', red: 176, green: 196, blue: 222 },
  { name: 'lightyellow', hex: '#ffffe0', red: 255, green: 255, blue: 224 },
  { name: 'lime', hex: '#00ff00', red: 0, green: 255, blue: 0 },
  { name: 'limegreen', hex: '#32cd32', red: 50, green: 205, blue: 50 },
  { name: 'linen', hex: '#faf0e6', red: 250, green: 240, blue: 230 },
  { name: 'magenta', hex: '#ff00ff', red: 255, green: 0, blue: 255 },
  { name: 'maroon', hex: '#800000', red: 128, green: 0, blue: 0 },
  { name: 'mediumaquamarine', hex: '#66cdaa', red: 102, green: 205, blue: 170 },
  { name: 'mediumblue', hex: '#0000cd', red: 0, green: 0, blue: 205 },
  { name: 'mediumorchid', hex: '#ba55d3', red: 186, green: 85, blue: 211 },
  { name: 'mediumpurple', hex: '#9370db', red: 147, green: 112, blue: 219 },
  { name: 'mediumseagreen', hex: '#3cb371', red: 60, green: 179, blue: 113 },
  { name: 'mediumslateblue', hex: '#7b68ee', red: 123, green: 104, blue: 238 },
  { name: 'mediumspringgreen', hex: '#00fa9a', red: 0, green: 250, blue: 154 },
  { name: 'mediumturquoise', hex: '#48d1cc', red: 72, green: 209, blue: 204 },
  { name: 'mediumvioletred', hex: '#c71585', red: 199, green: 21, blue: 133 },
  { name: 'midnightblue', hex: '#191970', red: 25, green: 25, blue: 112 },
  { name: 'mintcream', hex: '#f5fffa', red: 245, green: 255, blue: 250 },
  { name: 'mistyrose', hex: '#ffe4e1', red: 255, green: 228, blue: 225 },
  { name: 'moccasin', hex: '#ffe4b5', red: 255, green: 228, blue: 181 },
  { name: 'navajowhite', hex: '#ffdead', red: 255, green: 222, blue: 173 },
  { name: 'navy', hex: '#000080', red: 0, green: 0, blue: 128 },
  { name: 'oldlace', hex: '#fdf5e6', red: 253, green: 245, blue: 230 },
  { name: 'olive', hex: '#808000', red: 128, green: 128, blue: 0 },
  { name: 'olivedrab', hex: '#6b8e23', red: 107, green: 142, blue: 35 },
  { name: 'orange', hex: '#ffa500', red: 255, green: 165, blue: 0 },
  { name: 'orangered', hex: '#ff4500', red: 255, green: 69, blue: 0 },
  { name: 'orchid', hex: '#da70d6', red: 218, green: 112, blue: 214 },
  { name: 'palegoldenrod', hex: '#eee8aa', red: 238, green: 232, blue: 170 },
  { name: 'palegreen', hex: '#98fb98', red: 152, green: 251, blue: 152 },
  { name: 'paleturquoise', hex: '#afeeee', red: 175, green: 238, blue: 238 },
  { name: 'palevioletred', hex: '#db7093', red: 219, green: 112, blue: 147 },
  { name: 'papayawhip', hex: '#ffefd5', red: 255, green: 239, blue: 213 },
  { name: 'peachpuff', hex: '#ffdab9', red: 255, green: 218, blue: 185 },
  { name: 'peru', hex: '#cd853f', red: 205, green: 133, blue: 63 },
  { name: 'pink', hex: '#ffc0cb', red: 255, green: 192, blue: 203 },
  { name: 'plum', hex: '#dda0dd', red: 221, green: 160, blue: 221 },
  { name: 'powderblue', hex: '#b0e0e6', red: 176, green: 224, blue: 230 },
  { name: 'purple', hex: '#800080', red: 128, green: 0, blue: 128 },
  { name: 'red', hex: '#ff0000', red: 255, green: 0, blue: 0 },
  { name: 'rosybrown', hex: '#bc8f8f', red: 188, green: 143, blue: 143 },
  { name: 'royalblue', hex: '#4169e1', red: 65, green: 105, blue: 225 },
  { name: 'saddlebrown', hex: '#8b4513', red: 139, green: 69, blue: 19 },
  { name: 'salmon', hex: '#fa8072', red: 250, green: 128, blue: 114 },
  { name: 'sandybrown', hex: '#f4a460', red: 244, green: 164, blue: 96 },
  { name: 'seagreen', hex: '#2e8b57', red: 46, green: 139, blue: 87 },
  { name: 'seashell', hex: '#fff5ee', red: 255, green: 245, blue: 238 },
  { name: 'sienna', hex: '#a0522d', red: 160, green: 82, blue: 45 },
  { name: 'silver', hex: '#c0c0c0', red: 192, green: 192, blue: 192 },
  { name: 'skyblue', hex: '#87ceeb', red: 135, green: 206, blue: 235 },
  { name: 'slateblue', hex: '#6a5acd', red: 106, green: 90, blue: 205 },
  { name: 'slategray', hex: '#708090', red: 112, green: 128, blue: 144 },
  { name: 'slategrey', hex: '#708090', red: 112, green: 128, blue: 144 },
  { name: 'snow', hex: '#fffafa', red: 255, green: 250, blue: 250 },
  { name: 'springgreen', hex: '#00ff7f', red: 0, green: 255, blue: 127 },
  { name: 'steelblue', hex: '#4682b4', red: 70, green: 130, blue: 180 },
  { name: 'tan', hex: '#d2b48c', red: 210, green: 180, blue: 140 },
  { name: 'teal', hex: '#008080', red: 0, green: 128, blue: 128 },
  { name: 'thistle', hex: '#d8bfd8', red: 216, green: 191, blue: 216 },
  { name: 'tomato', hex: '#ff6347', red: 255, green: 99, blue: 71 },
  { name: 'turquoise', hex: '#40e0d0', red: 64, green: 224, blue: 208 },
  { name: 'violet', hex: '#ee82ee', red: 238, green: 130, blue: 238 },
  { name: 'wheat', hex: '#f5deb3', red: 245, green: 222, blue: 179 },
  { name: 'white', hex: '#ffffff', red: 255, green: 255, blue: 255 },
  { name: 'whitesmoke', hex: '#f5f5f5', red: 245, green: 245, blue: 245 },
  { name: 'yellow', hex: '#ffff00', red: 255, green: 255, blue: 0 },
  { name: 'yellowgreen', hex: '#9acd32', red: 154, green: 205, blue: 50 },
]

export default function HtmlColors() {
  const [data, setData] = useState(colorData)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const clearCopyTimeoutRef = useRef<number | null>(null)

  // Function to handle header click and sort the table
  const handleSort = (key) => {
    let direction = 'ascending'

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1
      }
      return 0
    })

    setData(sortedData)
    setSortConfig({ key, direction })
  }
  const renderSortIndicator = (key: string) => {
    if (sortConfig.key !== key) return null
    return (
      <span className={`sortIndicator ${sortConfig.direction === 'ascending' ? 'asc' : 'desc'}`}>
        {sortConfig.direction === 'ascending' ? '▲' : '▼'}
      </span>
    )
  }

  const handleCopy = async (hex: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(hex)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = hex
        textArea.style.position = 'fixed'
        textArea.style.left = '-9999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      setCopiedHex(hex)
      if (clearCopyTimeoutRef.current) {
        window.clearTimeout(clearCopyTimeoutRef.current)
      }
      clearCopyTimeoutRef.current = window.setTimeout(() => setCopiedHex(null), 1200)
    } catch (err) {
      // Swallow error; copying is a UX enhancement
    }
  }

  useEffect(() => {
    return () => {
      if (clearCopyTimeoutRef.current) {
        window.clearTimeout(clearCopyTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="colorTableCard">
      <div className="colorTableScroll">
        <table className="colorTable">
          <thead>
            <tr>
              <th className="sortable" onClick={() => handleSort('name')}>
                <span className="thLabel">Name</span>
                {renderSortIndicator('name')}
              </th>
              <th className="sortable" onClick={() => handleSort('hex')}>
                <span className="thLabel">Hex</span>
                {renderSortIndicator('hex')}
              </th>
              <th className="sortable" onClick={() => handleSort('red')}>
                <span className="thLabel">Red</span>
                {renderSortIndicator('red')}
              </th>
              <th className="sortable" onClick={() => handleSort('green')}>
                <span className="thLabel">Green</span>
                {renderSortIndicator('green')}
              </th>
              <th className="sortable" onClick={() => handleSort('blue')}>
                <span className="thLabel">Blue</span>
                {renderSortIndicator('blue')}
              </th>
              <th className="swatchHeader"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((color, index) => (
              <tr className="colorRow" key={index}>
                <td className="colorName">{color.name}</td>
                <td className="mono hexCell">
                  <span className="hexText">{color.hex}</span>
                  <button
                    className={`copyBtn ${copiedHex === color.hex ? 'copied' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCopy(color.hex)
                    }}
                    aria-label={`Copy ${color.hex}`}
                    title="Copy hex"
                  >
                    {copiedHex === color.hex ? '✓' : '⧉'}
                  </button>
                </td>
                <td className="mono">{color.red}</td>
                <td className="mono">{color.green}</td>
                <td className="mono">{color.blue}</td>
                <td>
                  <div className="colorSwatch" style={{ backgroundColor: color.hex }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
