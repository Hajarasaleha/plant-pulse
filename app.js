const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Product=require("./models/productListing.js")
const path= require("path");
const engine = require('ejs-mate');
app.engine('ejs', engine);
const methodOverride=require("method-override");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/carts");
const ExpressError= require("./utils/ExpressError.js");
const validateProduct = require("./middleware.js");
const MONGO_URL="mongodb://127.0.0.1:27017/plantPulse";

main().then(()=>{
  console.log("connection successfull")
}).catch(err=>{
    console.log(err)
})

async function main(){
  await  mongoose.connect(MONGO_URL)
};
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")))
const session = require('express-session');
app.use(session({
  secret: 'notagoodsecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    httpOnly: true
  }
}));
app.use("/cart", cartRoutes);
app.use("/products", productRoutes);

// Catch-all 404 route
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404,"Page Not Found"));
});

// Error-handling middleware
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { err });
});

app.listen(3000,()=>{
    console.log("server started with port 8080")
})