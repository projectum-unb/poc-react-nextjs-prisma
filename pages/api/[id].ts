import { User, ResponseError } from './../../interfaces/User'
import { NextApiRequest, NextApiResponse } from 'next'
import { findUserById } from 'services/user.service'

export default async function handlerFindUser(
  req: NextApiRequest,
  res: NextApiResponse<User | ResponseError>
) {
  const { query } = req
  const { id } = query
  const user = await findUserById(Number(id))

  // User with id exists
  return user
    ? res.status(200).json(user)
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}
