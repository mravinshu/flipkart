const express = require('express');
const router = express.Router();

const aliens = require('../models/aliens');
const cart = require('../models/cart');

router.get('/:id', async (req, res) => {
    console.log(req);
    try {
        const cartItem = await cart.find()
        res.json(cartItem);
    } catch (error) {
        res.send('Error: ' + error);
    }
})

router.post('/add/:id', async (req, res) => {
    const cartUser = await cart.findById(req.params.id);
    try {
        if (cartUser==null) {
            cartItem = req.body.products;
            cartUser = new cart({
                _id: req.params.id,
                products: req.body.products
            })
            cartItem = req.body.products;
            try {
                const c1 = await cartUser.save();
            res.json({"Products":cartItem});
            } catch (error) {
                res.json(error);
            }
        }else{
            cartItem = cartUser.products;
            console.log(cartItem);
            cartItem.push(req.body.products);
            cartUser.products = cartItem;
            try{
                if (cartItem.length>0) {
                    const c1 = await cartUser.save();
                    res.json({"Products":cartItem});
                }
            }catch(error){
                res.json(error);
            }
        }
    } catch (error) {
        res.json(error);
    }

})

module.exports = router;