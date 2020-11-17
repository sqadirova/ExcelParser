const express = require('express')
const dotenv=require('dotenv')
const connectDB = require('./config/db');
const errorHandler=require('./middleware/error')

//Load env vars
dotenv.config({path:'./config/config.env'});

//Connect to database
connectDB();

//Route files
const routers=require('./routes/parseRouters')

const app = express()

//Body Parser
// app.use(express.json())


//Mount Router
app.use('/',routers)

//error handler
app.use(function (err, req, res, next) {
    console.log('This is the invalid field ->', err.field)
    next(err)
})

app.use(errorHandler);

const PORT=process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
