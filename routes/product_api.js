import express from 'express';

const Product = require('../models/product.js');
const router = express.Router();

export const AllProducts = async(req, res) => {
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

export const updateProduct = async(req, res) => {
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
router.get('/products');
router.route('/create').post(AllProducts);
router.route('/update').update(updateProduct)




module.exports = router;
