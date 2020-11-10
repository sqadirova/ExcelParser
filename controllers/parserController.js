const multer = require('multer')
const XLSX = require('xlsx')

const upload = multer({dest: 'uploads/'});

exports.getAllInfo=(req,res)=>{
    console.log(req.file);
    let excelfile = XLSX.readFile(__dirname + '/uploads/'+req.file.filename, {
        cellDates:true
    })

    const sheetNames = excelfile.SheetNames;
    console.log(sheetNames);

    const general = excelfile.Sheets['General']
    const test=excelfile.Sheets['Tests']
    const risk_factors=excelfile.Sheets['Risk Factors']

    const res_general= XLSX.utils.sheet_to_json(general)
    const res_test= XLSX.utils.sheet_to_json(test)
    const res_riskFactors= XLSX.utils.sheet_to_json(risk_factors)

    const excel_info= {
        res_general,
        res_test,
        res_riskFactors
    }

    res.send(excel_info)
};

//
// exports.getGeneral=(req,res)=>{
//     let excelfile = XLSX.readFile(__dirname + '/uploads/'+req.file.filename, {
//         cellDates:true
//     });
//
//     const general = excelfile.Sheets['General'];
//     const res_general= XLSX.utils.sheet_to_json(general);
//
//     res.send(res_general);
// };
//
//
// exports.getTests=(req,res)=>{
//     let excelfile = XLSX.readFile(__dirname + '/uploads/'+req.file.filename, {
//         cellDates:true
//     });
//
//     const test=excelfile.Sheets['Tests']
//     const res_tests= XLSX.utils.sheet_to_json(test)
//
//     res.send(res_tests);
// };
//
//
// exports.getRiskFactory=(req,res)=>{
//     let excelfile = XLSX.readFile(__dirname + '/uploads/'+req.file.filename, {
//         cellDates:true
//     });
//
//     const risk_factors=excelfile.Sheets['Risk Factors']
//     const res_riskFactors= XLSX.utils.sheet_to_json(risk_factors)
//
//     res.send(res_riskFactors);
// };
