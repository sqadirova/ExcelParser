const express = require('express')
// const multer = require('multer')
// const XLSX = require('xlsx')
const dotenv=require('dotenv')

//Load env vars
dotenv.config({path:'./config/config.env'});

//Route files
const routers=require('./routes/parseRouters')

const app = express()

//Mount Router
app.use('/',routers)

const PORT=process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
