# New Blog Post

Scaffold a new blog post for the Rasile portfolio site.

1. Ask the user for the post **title** and a one-sentence **description** if not already provided
2. Derive a PascalCase filename from the title (e.g. "My Post Title" → `MyPostTitle.tsx`)
3. Create `/pages/Blog/<filename>.tsx` using this template:

```tsx
import Layout from '../../components/Layout'

export default function <ComponentName>() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1><PostTitle></h1>
      <p style={{ color: '#a0aec0' }}><Date> · <ReadTime> min read</p>
      <hr style={{ borderColor: '#2d3748', marginBottom: '2rem' }} />

      {/* Content goes here */}

    </div>
  )
}
```

4. Add a link entry to `/pages/Blog.tsx` in the existing list, following the pattern of existing entries
5. Show the user the created file path and remind them to run `yarn dev` to preview
