import express, {Request, Response, Application,  } from 'express'
import router from "./router";

const PORT :Number= 8000 //localhost alamat harus 4 digit

const app: Application = express() // ngasih tipe bawaan dari express
app.use (express.json())
//buat slas api methodnya get local host 8000 tipenya requeat dan response yang diminta oleh client atau frontend
app.get('/api', (req: Request, res: Response) => {
    
    res.status(200).send({ //200=sukses responnya sukses
        message: 'welcome to my api',
        status: "oke"
    })
})

app.use('/api', router)

//listen untuk menjalankan portnya
app.listen(PORT, () => {
    console.log(`[server API]: http://localhost:${PORT}/api`);

})


