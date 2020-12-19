import { NextApiRequest, NextApiResponse } from 'next'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData()
  res.status(200).json({})
}
