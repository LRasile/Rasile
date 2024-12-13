import { NextApiRequest, NextApiResponse } from 'next'

// Disable Next.js body parsing
export const config = {
  api: {
    bodyParser: false,
  },
}

// Utility to collect raw body
const getRawBody = async (req: NextApiRequest): Promise<string> => {
  return new Promise((resolve, reject) => {
    let data = ''

    req.on('data', (chunk) => {
      data += chunk
    })

    req.on('end', () => {
      resolve(data)
    })

    req.on('error', (err) => {
      reject(err)
    })
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  try {
    const rawBody = await getRawBody(req)
    console.log(rawBody)
    // Length validation
    if (rawBody.trim().length <= 4) {
      return res.status(400).end('Bad Request: Content is less that 4 characters')
    }

    const contentType = req.headers['content-type']

    if (contentType === 'application/json') {
      console.log('JSON')
      try {
        const jsonData = JSON.parse(rawBody)
        return res.status(200).json(jsonData)
      } catch (err) {
        return res.status(400).json({ error: 'Invalid JSON' })
      }
    } else if (contentType === 'application/xml' || contentType === 'text/xml') {
      console.log('XML')
      res.setHeader('Content-Type', 'application/xml')
      return res.status(200).send(rawBody)
    } else {
      return res.status(415).json({ error: 'Unsupported Content-Type' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error', details: error.message })
  }
}

export default handler
