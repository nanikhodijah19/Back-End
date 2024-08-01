import express, { Application } from 'express'
import router from './router'

const PORT: number = 9000
const app: Application = express()

app.use(express.json())

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`[server-api]: http://localhost:${PORT}/api`)
})