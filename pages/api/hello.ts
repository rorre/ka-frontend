// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	name: string
}

/**
 * Give John Doe Response
 * @date 2021-09-26
 * @param {NextApiRequest} req:NextApiRequest
 * @param {NextApiResponse<string>} res:NextApiResponse<Data>
 */
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({ name: 'John Doe' })
}
