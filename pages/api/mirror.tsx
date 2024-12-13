import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const contentType = req.headers['content-type']

    if (contentType === 'application/json') {
      const data = req.body
      return res.status(200).json(data)
    } else if (contentType === 'application/xml' || contentType === 'text/xml') {
      const data = req.body
      return res.status(200).send(data)
    } else {
      return res.status(415).json({ error: 'Unsupported Content-Type' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }
}

export default handler
