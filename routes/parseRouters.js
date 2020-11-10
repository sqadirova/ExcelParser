const express=require('express')
const {
    getAllInfo
    // ,getGeneral
    // ,getTests
    // ,getRiskFactory
} =require('../controllers/parserController')

const router=express.Router()

const multer = require('multer')

const upload = multer({dest: 'uploads/'});

router.route('/')
    .post(upload.single('avatar'),getAllInfo)
    // .post(upload.single('avatar'),getGeneral)
    // .post(upload.single('avatar'),getTests)
    // .post(upload.single('avatar'),getRiskFactory);

module.exports=router;


// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
//
// app.post('/', upload.single('avatar'), function (req, res) {
//
//     console.log(req.file)
//
//     let excelfile = XLSX.readFile(__dirname + '/uploads/'+req.file.filename, {
//         cellDates:true
//     })
//
//     const sheetNames = excelfile.SheetNames;
//     console.log(sheetNames);
//
//     const general = excelfile.Sheets['General']
//     const test=excelfile.Sheets['Tests']
//     const risk_factors=excelfile.Sheets['Risk Factors']
//
//     const res_general= XLSX.utils.sheet_to_json(general)
//     const res_test= XLSX.utils.sheet_to_json(test)
//     const res_riskFactors= XLSX.utils.sheet_to_json(risk_factors)
//
//     const excel_info= {
//         res_general,
//         res_test,
//         res_riskFactors
//     }
//
//     res.send(excel_info)
//
// });


