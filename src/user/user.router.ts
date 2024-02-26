import express from 'express'
import type { Request, Response } from 'express'

import * as UserService from './user.service'

export const userRouter = express.Router()

userRouter.get('/', async (request: Request, response: Response) => {
  try {
    const users = await UserService.getUsers()
    return response.status(200).json(users)
  } catch (error: any) {
    return response.status(500).json(error.mesage)
  }
})

userRouter.get('/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id)
  try {
    const user = await UserService.getUserById(id)
    if (user) {
      return response.status(200).json(user)
    } else {
      return response.status(404).json('O usuário não foi encontrado.')
    }
  } catch (error: any) {
    return response.status(500).json(error.mesage)
  }
})

userRouter.post('/', async (request: Request, response: Response) => {
  try {
    const user = request.body
    const newUser = await UserService.createUser(user)
    return response.status(201).json('Usuário criado com sucesso')
  } catch (error: any) {
    return response.status(500).json(error.message)
  }
})

userRouter.put('/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id)
  try {
    const user = request.body
    const updateUser = await UserService.updateUser(user, id)
    return response.status(201).json(updateUser)
  } catch (error: any) {
    return response.status(500).json(error.message)
  }
})

userRouter.delete('/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id)
  try {
    await UserService.deleteUser(id)
    return response.status(200).json('O Usuario foi excluido com sucesso!')
  } catch (error: any) {
    return response.status(500).json(error.message)
  }
})
