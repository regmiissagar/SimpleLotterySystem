const { Router } = require('express');
const Users=require('../models/users') // .. means 2 choti baira jane 
const app = Router();

app.post('/register',async(req, res)=> {
    try{
        const usersList = await Users.findOne({name: req.body.name})
        if(usersList){
            res.json({
                msg: 'User Name already exist'
            })
        }else{
    
        const data = await Users.create(req.body)
        if(data){
            res.json({
                msg: 'user registered'
            })
        }else{
            res.json({
                msg: 'registration failed'
            })
        }
        }

    }catch(err){
        console.log(err)
    }
  
  })

  module.exports = app;