import { User } from 'interfaces/User'
import { NextApiResponse, NextApiRequest } from 'next'
import { getAllUsers } from 'services/user.service'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  const data = await getAllUsers()
  return res.status(200).json(data)
}
