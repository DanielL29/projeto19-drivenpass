import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import chalk from 'chalk'
import dotenv from 'dotenv'
import router from './routes/router.js'
import errorsHandler from './errors/errorsHandler.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use(router)
app.use(errorsHandler)

app.listen(PORT, () => console.log(chalk.yellow(`Server listening at port ${PORT}...`)))