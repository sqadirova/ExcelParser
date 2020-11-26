const express = require('express');
const dotenv=require('dotenv');
const mongoSanitize=require('express-mongo-sanitize');
const helmet=require('helmet');
const xss=require('xss-clean');
const rateLimit=require('express-rate-limit');
const hpp=require('hpp');
const cors=require('cors');
const connectDB = require('./config/db');
const cookieParser=require('cookie-parser');
const errorHandler=require('./middleware/error');

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
app.use(cookieParser());

//Sanitize data
app.use(mongoSanitize());

//Set security headers
app.use(helmet());

//Prevent XSS attacks
app.use(xss());

//Rate Limiting
const limiter=rateLimit({
    windowMs: 10*60*1000,  //10min
    max:100
});

app.use(limiter);

//Prevent http param pollution
app.use(hpp());

//Enable CORS
app.use(cors());

//Mount Router
app.use('/api/v1/excel',routers)
app.use('/api/v1/auth',auth)
app.use('/api/v1/users',admin)

app.use(errorHandler);

const PORT=process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

