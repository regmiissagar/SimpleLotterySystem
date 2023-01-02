const { Router } = require('express');
const Users=require('../models/winner')
const Users=require('../models/users')  // .. means 2 choti baira jane 
const app = Router();

app.get('/users',async (req, res)=> {
    if(req.query.name){
        const usersList = await Users.findOne({name: req.query.name})
        const searchWinColor = await Winner.findOne({ticketNo: req.query.ticketNo})
        if(searchWinColor?.color === req.query.color && usersList){
          res.json({
              msg: "hurray! wiiner winner chicken dinner"
          })
        }else{
            if(!usersList){
                res.json({
                  errMsg: 'not registered'
                })
            }else{
                res.json({
                    errMsg: 'you have lost'
                })
            }
        }
    }else{
        const usersList = await Users.find()
        res.json({
            usersList: usersList
        })

    }


})
module.exports = app;