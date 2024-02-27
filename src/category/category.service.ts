import { db } from '../utils/db.server'

export type Category = {
    id: number,
    name: string,
    productId: number | null
}

export const getCategories = async (): Promise<Category[]> => {
    return db.category.findMany()
}

export const getCategory = async ($id: number): Promise<Category | null> => {
    return db.category.findUnique({
        where: {
            id: $id
        },
        select: {
            id: true,
            name: true,
            productId: true
        }
    })
}

export const createCategory = async ($category: Omit<Category, 'id' & 'productId'>): Promise<Category> => {
    return db.category.create({
        data: $category,
        select: {
            id: true,
            name: true,
            productId: true
        }
    })
}

export const updateCategory = async ($category: Omit<Category, 'id'>, $id: number): Promise<Category> => {
    return db.category.update({
        where: {
            id: $id
        },
        data: $category,
        select: {
            id: true,
            name: true,
            productId: true
        }

    })
}

export const deleteCategory = async ($id: number): Promise<Category> => {
    return db.category.delete({
        where: {
            id: $id
        },
        select: {
            id: true,
            name: true,
            productId: true
        }
    })
}