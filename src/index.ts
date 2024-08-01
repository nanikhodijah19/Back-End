import  express, {Application, application} from "express"
import router from "./router"

const PORT : number = 2000

const app: Application= express()

app.use (express.json())
app.use ('/api',router)

app.listen (PORT, ()=> {
    console.log(`[server] => http://localhost:${PORT}/api`);
    
}) 