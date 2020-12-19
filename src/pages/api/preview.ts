import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { secret } = req.query

  try {
    if (
      typeof secret !== 'string' ||
      secret !== process.env.CMS_PREVIEW_SECRET
    ) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    const route = '/'

    if (!route) {
      return res.status(400).json({ message: 'Bad request' })
    }

    res.setPreviewData({})

    res.redirect(route)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}
