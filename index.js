let http = require('http');
const express = require('express')
const bodyparser = require('body-parser');
require('dotenv').config()

const UserModel=require('./controllers/User');
const app = express()
const port = process.env.PORT || 8080;

app.use(bodyparser.json());
  app.get('/', (req, res) => {
    getAllUsers = async(req, res, next) => {
        let userList = await UserModel.all();
        if (!userList.length) {
            throw new HttpException(404, 'Users not found');
        }
        console.log("users", userList)
        res.json({title: 'Data', 'mydata': userList});
        return userList;
    };
    // res.send("jello");
   
    //  res.send(getAllUsers());
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })