const express = require('express')
const app = express()
const port = 3000

const { User } = require("./modelos/user")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const dbConfig = require('./config/key')

// application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({extends: true}))

// application/json
app.use(bodyParser.json())


mongoose.connect(dbConfig.mongoURI,{
    useNewUrlParser: true,  useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false
}).then(() => console.log('MongoDB connectd....Ok'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req,res) => {
    // 회원 가입 할때 필요한 정보들을 Client 에서 가져오면 
    // 그걸 데이터 베이스에 넣는다. 
    const user = new User(req.body)


    user.save((err, userInfo)=>{
        if(err) return res.json({ success: false, err})

        return res.status(200).json({
            success:true
        })
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})