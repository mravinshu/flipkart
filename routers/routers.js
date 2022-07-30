const express = require('express');
const router = express.Router();

const Alien = require('../models/aliens')
const Cart = require('../models/cart');


router.get('/', async (req, res) => {
    console.log(req);
    try {
        const aliens = await Alien.find()
        res.json(aliens);
    } catch (error) {
        res.send('Error: ' + error);
    }
})

router.get('/:id', async (req, res) => {
    console.log(req.params);
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien);
        // res.json({data:"User Exsists"})
    } catch (error) {
        res.send('Error: ' + error);
    }
})

router.post('/', async (req, res) => {

    try {
        var alien = await Alien.findById(req.body.email);
        if (alien==null) {
            alien = new Alien({
                _id: req.body.email,
                name: req.body.name,
                number: req.body.number,
                type: req.body.type
            })
            cart = new Cart({
                _id: req.body.email,
                products: []
            })
            try {
                const a1 = await alien.save()
                const c1 = await cart.save()
                res.json(c1);
            } catch (error) {
                res.json(error);
            }
        } else {
            try {
                alien.name = req.body.name;
                alien._id = req.body.email;
                alien.number = req.body.number;
                alien.type = req.body.type;
                const a1 = await alien.save()
                res.json({"Update":"Done"});
            } catch (error) {
                res.send('Error: ' + error);
            }
        }
    }catch(error){

    }
})

router.patch('/:id',async(req,res)=>{
    try {
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(a1);
    } catch (error) {
        res.send('Error');
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const alien = await Alien.findById(req.params.id);
        const a1 = await alien.remove();
        res.json(a1);
    } catch (error) {
        res.json({"error":error});
    }
})

router.get('/cart/:id',async(req,res)=>{
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch (error) {
        res.send('Error');
    }
})

module.exports = router;