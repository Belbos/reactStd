const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jobkae:1q2w3e4r!!@jobkae.bbrnn.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,  useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false
}).then(() => console.log('MongoDB connectd....'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})