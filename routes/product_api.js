const express  = require('express');
const router = express.Router();
const Product = require('../models/product.js');

 
const createNewProduct = async(req, res) => {
    try{
        const product = await Product.create(req.body);
            res.status(201).json({
                data:{
                    product,
                    msg: "Created successfuly"
                }
            });
        console.log(product);
    } catch(error){
        res.status(404).json({
            data: {
               msg: "Error in creating a new product" 
            }
        })
    }
}
 const AllProducts = async(req, res) => {
    try{
        const products = await Product.find({});
        if(products.length < 1){
            res.status(200).json({
                msg: "No products found"
            });
            return;
        }
        if(products){
            res.status(200).json({
                data: products,
                msg: "these are products"
            });
        }
    } catch(error){
        res.status(404).json({
            msg: "Error in founding products"
        })
    }
}
 const updateProduct = async(req, res) => {
    const {name,price, Qty} = req.body;
    try{
        const product = await Product.findByIdAndUpdate(
            {_id: req.params.id},
            {name, Qty, price},
            {new: true}
        )
        console.log(product);
        res.status(200).json({
            data: {
                product: product,
                msg: "Updated Successfully"
            }
        })
    } catch(error){
        res.status(404).json({
            data: {
               msg: error 
            }
        })
    }
}

router.route('/create').post(createNewProduct);
router.route('/').post(AllProducts);
router.route('/products').put(updateProduct);





module.exports = router;
