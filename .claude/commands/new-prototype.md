# New Prototype

Scaffold a new interactive prototype/tool for the Rasile portfolio site.

1. Ask the user for:
   - **Name** (e.g. "Unit Converter")
   - **Description** — one sentence for the index tile
   - **Icon** — an emoji or react-icon name to use on the tile
   - Does it need **multiple sub-components**? (if yes, create a `/components/<Name>/` directory)

2. Create `/pages/Prototypes/<Name>.tsx`:

```tsx
import { useState } from 'react'

export default function <Name>() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h1><Name></h1>
      <p style={{ color: '#a0aec0', marginBottom: '2rem' }}><Description></p>

      {/* Tool UI goes here */}

    </div>
  )
}
```

3. Add a tile to `/pages/index.tsx` in the Prototypes section, following the pattern of existing tiles

4. If sub-components are needed, create the `/components/<Name>/` directory and stub out the first component

5. Show the user the route path (`/Prototypes/<Name>`) and remind them to run `yarn dev` to preview
