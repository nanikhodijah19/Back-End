import express, { Application } from 'express'
import router from './router'
import "dotenv/config"

const PORT: number = 8000
const app: Application = express()

app.use(express.json())

app.use('/api', router)

// console.log(process.env.DATABASE_NAME );


app.listen(PORT, () => {
    console.log(`[server-api]: http://localhost:${PORT}/api`)
})