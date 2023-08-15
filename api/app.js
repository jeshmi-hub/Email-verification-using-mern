require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true
}))

//Routes
app.use('/user', require('./routes/userRouter'))


mongoose.connect(
    process.env.DBCONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (!err) {
        console.log("database connected");
      } else {
        console.log("cannot connect to db");
        console.log(err);
      }
    }
  );
  

const PORT = process.env.PORT || 8000

app.listen(PORT, () =>{
    console.log('server is running on', PORT)
})