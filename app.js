import express from "express"
import { products } from "./data.js"

const app = express()
const PORT = 5000

app.listen(PORT,()=>{
    console.log(`server running on LocalHost:${PORT}`)
})

// get all product data 
// it will automatically detect wheter a single product or all products
app.get("/",(req, res)=>{
    console.log("query params", req.query.id)
    if(req.query.id){
        const filterData = products.filter((product)=>{
                  return  req.query.id == product.id
                }) 
            res.send(filterData)
            return
    }
res.send(products)
})

// // single product data
// app.get("/product/:id",(req, res)=>{
//     console.log("params",req.params.id)
//    const filterData = products.filter((product)=>{
//       return  req.params.id == product.id
//     }) 
// res.send(filterData)
// })





// get data 
// app.get("/",(req, res)=>{
// res.send("user get")
// })

// post or create 

app.post("/createUser",(req, res)=>{
res.send("user created")
})
// update 

app.put("/updateUser",(req, res)=>{
res.send("user updated")
})
// delete

app.delete("/deleteUser",(req, res)=>{
res.send("user deleted")
})

