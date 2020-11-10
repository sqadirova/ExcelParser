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
app.use('/profile',routers)

const PORT=process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// const upload = multer({dest: 'uploads/'});

// app.post('/profile', upload.single('avatar'), function (req, res) {
    // console.log(req.file);
    // let excelfile = XLSX.readFile(__dirname + '/uploads/'+req.file.filename, {
    //     cellDates:true
    // })
    //
    // const sheetNames = excelfile.SheetNames;
    // console.log(sheetNames);
    //
    // const general = excelfile.Sheets['General']
    // const test=excelfile.Sheets['Tests']
    // const risk_factors=excelfile.Sheets['Risk Factors']
    //
    // const res_general= XLSX.utils.sheet_to_json(general)
    // const res_test= XLSX.utils.sheet_to_json(test)
    // const res_riskFactors= XLSX.utils.sheet_to_json(risk_factors)
    //
    // const excel_info= {
    //     res_general,
    //     res_test,
    //     res_riskFactors
    // }
    //
    // res.send(excel_info)
// });
