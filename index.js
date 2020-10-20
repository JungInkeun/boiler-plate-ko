const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://imw2008:1qaz2wsx1984@cluster0.n3d0v.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...')).catch(err => console.log(err))
  

app.get('/', (req, res) => res.send('Hello World!, 인근이 첫 node js'))
app.listen(port, () => console.log('Example app listening on port ${port}!')) 