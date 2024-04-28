import express from "express"
import productRouter from "./routers/products.router.js"
import cartsRouters from "./routers/carts.router.js"

const app = express()
const port = 8080
app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/carts', cartsRouters)

// endpoints http://localhost:8080/
app.get('/', (req, res)=> res.status(200).json({message:'ok'}))
app.get('/health', (req, res)=> res.status(200).json({message: `Server is running on Port ${port}`}))


app.listen(port, ()=> console.log(`menssage: server up en puerto ${port}`))