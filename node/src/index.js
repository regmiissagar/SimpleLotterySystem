const app = require('express')()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
const Connect = require('./db/connect')
const winner =require('./routes/winnerRouter')
const ticket = require('./routes/ticketRouter')
const register = require('./routes/registerRouter')


Connect()

app.use(ticket)
app.use(winner)
app.use(register)






app.get('/tickets/:ticketno',(req, res)=> {
    console.log(req.params.ticketno)
})

app.post('/tickets',(req, res)=> {
  console.log(req)
})

app.put('/register',async(req, res)=> {
//req.bodyt

//task : save it in db not with await Users.create(req.body)
//we have to update await Users.findOneAndUpdate
  
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

