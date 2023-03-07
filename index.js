

const express = require('express')
const mongoose = require('mongoose');

const prod_Api = require('./routes/product_api')
const app = express();
const port = 8000;
express.Router();
app.use(express.json());
app.use('/products', prod_Api);


mongoose.connect("mongodb://localhost:27017/Test_product");
mongoose.connection.on('connected', ()=>{
    console.log(`Successfully connected on MongoDB !!`);
})

app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
})

