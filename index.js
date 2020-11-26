const express = require('express')
const dotenv=require('dotenv')
const connectDB = require('./config/db');
const cookieParser=require('cookie-parser')
const errorHandler=require('./middleware/error')

//Load env vars
dotenv.config({path:'./config/config.env'});

//Connect to database
connectDB();

//Route files
const routers=require('./routes/parseRouters');
const auth=require('./routes/authRouter');
const admin=require('./routes/adminRouter');

const app = express()

//Body Parser
app.use(express.json())

//Cookie Parser
app.use(cookieParser())

//Mount Router
app.use('/api/v1/excel',routers)
app.use('/api/v1/auth',auth)
app.use('/api/v1/users',admin)

//error handler
// app.use(function (err, req, res, next) {
//     console.log('This is the invalid field ->', err.field)
//     next(err)
// })

app.use(errorHandler);

const PORT=process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

