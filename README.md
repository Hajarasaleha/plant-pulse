A simple backend API for a product listing and e-commerce system built with Node.js, Express, and Mongoose.

#Setup Instructions

1.clone the repository

2.Install dependencies using command npm install.

3.Setup Environment
   const MONGO_URL = "mongodb://127.0.0.1:27017/plantPulse";
   then navigate to init folder by cd init and run server node index.js for initializing the sample products in db.

4.Run the server
   node app.js

#API Routes and Usage

 1. GET /products   =>Returns all product listings.

 2.GET /products/:id  => Returns details of a single product.

 3.GET /products/new  =>Returns a form to add a product

 4.POST /products   =>Adds a new product

 5.DELETE /products/:id =>Removes a product from the database

 6.GET /categories    =>Returns all available product categories.

 7.POST /cart/add     =>Add a product to cart.

 8.GET /cart      => Returns current cart contents.
 
 9.DELETE /cart/remove/:productId =>Removes a product from the cart by ID.

#Assumptions Made

1.Cart is stored in-memory using express-session.

2.Product contains product ID, title, price, quantity, and image.

3.Cart items include: product ID, title, price, quantity, and image.

4.Category filtering supports multiple categories using repeated category query params.

5.we can filter the products by category and price-range

6.Styling and responsiveness on the frontend are handled using Bootstrap.

7.Client-side validation is done using Bootstrap's validation classes.

8.Server-side validation is done using Joi.

9.All errors are handled using a custom ExpressError class to show user-friendly messages in a clean and readable format.