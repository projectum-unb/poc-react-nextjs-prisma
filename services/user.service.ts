import { User } from '../interfaces/User'
import { prisma } from './prisma'

export async function getAllUsers() {
  const data = await prisma.user.findMany()
  return data
}

export async function createUser(userInput: User) {
  const user = await prisma.user.create({
    data: userInput,
  })
}

export async function findUserById(id: number) {
  const data = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })
  return data
}
