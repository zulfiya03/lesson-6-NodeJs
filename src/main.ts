import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/auth',authRoutes)

app.listen(3000, () =>
  console.log('Server running, host: http://localhost:3000')
)