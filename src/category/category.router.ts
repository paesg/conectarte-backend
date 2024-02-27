import express from 'express'
import type { Request, Response } from 'express'

import * as CategoryService from './category.service'

export const categoryRouter = express.Router()

categoryRouter.get('/', async (request: Request, response: Response) => {
    try {
        const categories = await CategoryService.getCategories()
        return response.status(200).json(categories)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

categoryRouter.get('/:id', async (request: Request, response: Response) => {
    try {
        const id: number = parseInt(request.params.id)
        const category = await CategoryService.getCategory(id)
        if (!category) {
            return response.status(404).json('categoria não encontrada')
        }
        return response.status(200).json(category)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

categoryRouter.post('/', async (request: Request, response: Response) => {
    try {
        const category = request.body
        const newCategory = await CategoryService.createCategory(category)
        return response.status(201).json(newCategory)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

categoryRouter.put('/:id', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    try {
        const category = request.body
        const updatedCategory = await CategoryService.updateCategory(category, id)
        return response.status(201).json(updatedCategory)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

categoryRouter.delete('/:id', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    try {
        const deletedCategory = await CategoryService.deleteCategory(id)
        return response.status(200).json(deletedCategory)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})