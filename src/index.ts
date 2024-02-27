import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { userRouter } from './user/user.router'
import { categoryRouter } from './category/category.router'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string)

const app = express()

app.use(cors()) //adicionar uma tecnologia
app.use(express.json()) //indicando que só recebe e manda json
app.use('/api/user', userRouter)
app.use('/api/category', categoryRouter)

app.listen(PORT, () => {
  console.log(`Listening na porta ${PORT} <><>`)
})
