import Anthropic from '@anthropic-ai/sdk'
import type { NextApiRequest, NextApiResponse } from 'next'

const client = new Anthropic()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { picks } = req.body

  if (!picks || typeof picks !== 'object') {
    return res.status(400).json({ error: 'Invalid picks' })
  }

  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.setHeader('Transfer-Encoding', 'chunked')
  res.setHeader('X-Accel-Buffering', 'no')
  res.setHeader('Cache-Control', 'no-cache')

  try {
    const stream = client.messages.stream({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      system:
        'You are a warm, imaginative storyteller who creates gentle bedtime stories for young children aged 3-7. ' +
        'Your stories are magical, positive, soothing, and always end peacefully with the hero settling down to sleep. ' +
        'Write in a lyrical, read-aloud style with vivid but gentle imagery. Keep stories to around 400-500 words.',
      messages: [
        {
          role: 'user',
          content:
            `Please tell me a bedtime story with these elements:\n` +
            `- Hero: ${picks.hero}\n` +
            `- World: ${picks.world}\n` +
            `- Companion: ${picks.companion}\n` +
            `- Quest: ${picks.quest}\n` +
            `- Magic item: ${picks.item}\n` +
            `- Ending: ${picks.ending}\n\n` +
            `Begin with "Once upon a time..." and end with the hero drifting peacefully off to sleep.`,
        },
      ],
    })

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        res.write(event.delta.text)
      }
    }

    res.end()
  } catch (_error) {
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to generate story' })
    } else {
      res.end()
    }
  }
}
