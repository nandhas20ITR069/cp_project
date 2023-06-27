const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require("cors")
app.use(cors())

// connecting with mongodb

const mongoose = require("mongoose");

const {  ListProduct, UpdateProduct, DeleteProduct, CreateProduct, UpdateStock, UpdateErodeProduct, UpdateErodeStock, DeleteErodeProduct, UpdateTrichyProduct, UpdateTrichyStock, DeleteTrichyProduct, UpdateNamakalProduct, UpdateNamakalStock, DeleteNamakalProduct, UpdateTirupurProduct, UpdateTirupurStock, DeleteTirupurProduct, UpdatePollachiProduct, UpdatePollachiStock, DeletePollachiProduct, UpdateCoimbatoreProduct, UpdateCoimbatoreStock, DeleteCoimbatoreProduct, ListErodeProduct, ListTrichyProduct, ListTirupurProduct, ListCoimbatoreProduct, ListNamakalProduct, ListPollachiProduct } = require("./controllers/product");
// mongodb://localhost:27017
// mongodb+srv://navasakthi:navasakthi@cluster0.vddep1q.mongodb.net/stock?retryWrites=true&w=majority
const db=()=>mongoose.connect("mongodb://localhost:27017/produ").then(() => {
    console.log("Connection Successfull")
}).catch((err) => {
    console.log(err)
})

// sign up API


// Get all user 


// Add Products
app.post("/addproducts", CreateProduct);//checked


//list product
app.get("/listproducts", ListProduct);//checked
app.get("/listErodeproducts", ListErodeProduct);
app.get("/listTrichyproducts", ListTrichyProduct);
app.get("/listTirupurproducts", ListTirupurProduct);
app.get("/listCoimbatoreproducts", ListCoimbatoreProduct);
app.get("/listNamakalproducts", ListNamakalProduct);
app.get("/listPollachiproducts", ListPollachiProduct);
//Add to cart


//List all products

app.get("/mycart", ListProduct);//checked

//update product

app.put("/product/updateone",UpdateProduct);//checked

app.put("/product/updatestock",UpdateStock);
// delete product 

app.delete("/product/deleteone",DeleteProduct);//checked


app.put("/product/updateErodeone",UpdateErodeProduct);//checked

app.put("/product/updateErodestock",UpdateErodeStock);
// delete product 

app.delete("/product/deleteerodeone",DeleteErodeProduct);//checked


app.put("/product/updateone",UpdateTrichyProduct);//checked

app.put("/product/updatestock",UpdateTrichyStock);
// delete product 

app.delete("/product/deleteone",DeleteTrichyProduct);//checked


app.put("/product/updateone",UpdateNamakalProduct);//checked

app.put("/product/updatestock",UpdateNamakalStock);
// delete product 

app.delete("/product/deleteone",DeleteNamakalProduct);//checked

app.put("/product/updateone",UpdateTirupurProduct);//checked

app.put("/product/updatestock",UpdateTirupurStock);
// delete product 

app.delete("/product/deleteone",DeleteTirupurProduct);//checked

app.put("/product/updateone",UpdatePollachiProduct);//checked

app.put("/product/updatestock",UpdatePollachiStock);
// delete product 

app.delete("/product/deleteone",DeletePollachiProduct);//checked

app.put("/product/updateone",UpdateCoimbatoreProduct);//checked

app.put("/product/updatestock",UpdateCoimbatoreStock);
// delete product 

app.delete("/product/deleteone",DeleteCoimbatoreProduct);//checked


// Order products



//checked
// const verifyJwt = (req,res,next) =>{
//     const token = req.headers["access-token"];
//     if(!token){
//         return res.json("We need token please provide it for next time")
//     }else{
//         jwt.verify(token,"jwtSecretKey",(err,decoded)=>{
//             if(err){
//                 res.json("Not Authenticated");
//             }else{
//                 res.userId = decoded.id;
//                 next();
//             }
//         })
//     }
// }




/// localstorage.setItem("token",res.data.token);
/// headers: {'access-token': localStorage.getItem("token");} // app.get 
app.listen(8082, () => {
    console.log("Server is runing at port 8082")
    db()
})


// jwt.sign({ id }, "jwtwebtoken", { expiresIn: 300 })

// return res.json({Login:true, token,data});

