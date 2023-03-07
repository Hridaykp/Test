

const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.js');
const prod_Api = ('./routes/product_api.js');
const app = express();
app.use(express.json());
app.use('/products', Product);
const port = 8000;
app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
})

mongoose.connect("mongodb://localhost:27017/Test_product");
mongoose.connection.on('connected', ()=>{
    console.log(`Successfully connected on MongoDB !!`);
})