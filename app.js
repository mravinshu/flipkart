const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const port = process.env.PORT || 9000;

const password = encodeURIComponent("Rawinshoe@1");

const url = `mongodb+srv://mravinshu:${password}@nodetry.utcax.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.get('/', (req, res) => {
    res.send("Ravinshu Makkar")
    res.end()
})

app.use(cors())

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',()=> {
    console.log('Connected');
})

app.use(express.json( ))

const alienRouter = require('./routers/routers');
const res = require('express/lib/response');
const cartRouter = require('./routers/cartroutes');
app.use('/aliens',alienRouter);
app.use('/cart',cartRouter);

app.listen(port,()=>{
    console.log('Server Started');
})