import { db } from '../utils/db.server'

export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  latitude: string
  longitude: string
  bio: string
}

export const getUsers = async (): Promise<User[]> => {
  return db.user.findMany()
}

export const getUserById = async (id: number): Promise<User | null> => {
  return db.user.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      password: true,
      latitude: true,
      longitude: true,
      bio: true
    }
  })
}

export const createUser = async (
  user: Omit<User, 'id'> & { isAdmin: boolean }
): Promise<User> => {
  return db.user.create({
    data: user,
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      password: true,
      latitude: true,
      longitude: true,
      bio: true
    }
  })
}

export const updateUser = async (
  user: Omit<User, 'id'> & { isAdmin: boolean },
  id: number
): Promise<User> => {
  return db.user.update({
    where: {
      id: id
    },
    data: user,
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      password: true,
      latitude: true,
      longitude: true,
      bio: true
    }
  })
}

export const deleteUser = async (id: number): Promise<User> => {
  return db.user.delete({
    where: {
      id: id
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      password: true,
      latitude: true,
      longitude: true,
      bio: true
    }
  })
}
