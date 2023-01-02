const { Router } = require('express');
const Users=require('../models/users') // .. means 2 choti baira jane 
const app = Router();

app.get('/ticket', async(req, res) => {
    try{
    const data = await Users.find()
  res.json({
      ticketList: data,
  })
}catch(err){
    console.log(err)
}
})


module.exports = app;
