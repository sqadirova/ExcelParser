const Sportsman=require('../models/Sportsman')
const Tests=require('../models/Tests')
const RiskFactors=require('../models/RiskFactors')
const XLSX = require('xlsx')


//@desc Create new sportsmen
//@route POST /general
exports.postGeneral=async (req,res,next)=>{
    try {
        let excelFile = XLSX.readFile(__dirname + '/../uploads/'+req.file.filename, {
            cellDates:true
        });

        const general = excelFile.Sheets['General'];
        const res_general= XLSX.utils.sheet_to_json(general);

        const tableGeneral=await Sportsman.create(res_general);

        res.status(201).json({
            success: true,
            data: tableGeneral
        });
    }catch (err) {
        res.status(400).json({success:false,
                                    error: err.toString()});
    }
}


//@desc Create new test for sportsmen
//@route POST /tests
exports.postTests=async (req,res,next)=>{
    try {
        let excelFile = XLSX.readFile(__dirname + '/../uploads/'+req.file.filename, {
            cellDates:true
        });

        const tests = excelFile.Sheets['Tests'];
        const res_tests= XLSX.utils.sheet_to_json(tests);

        console.log(res_tests);

        const tableTests=await Tests.create(res_tests);

        res.status(201).json({
            success: true,
            data: tableTests
        });
    }catch (err) {
        res.status(400).json({success:false,
            error: err.toString()});
    }
}

//@desc Create risk factors for sportsmen
//@route POST /riskFactors
exports.postRiskFactors=async (req,res,next)=>{
    try {
        let excelFile = XLSX.readFile(__dirname + '/../uploads/'+req.file.filename, {
            cellDates:true
        });

        const riskFactors = excelFile.Sheets['Risk Factors'];
        const res_riskFactors= XLSX.utils.sheet_to_json(riskFactors);

        console.log(res_riskFactors);

        const tableRiskFactors=await RiskFactors.create(res_riskFactors);

        res.status(201).json({
            success: true,
            data: tableRiskFactors
        });
    }catch (err) {
        res.status(400).json({success:false,
            error: err.toString()});
    }

}













