const Sportsman=require('../models/Sportsman')
const Tests=require('../models/Tests')
const RiskFactors=require('../models/RiskFactors')
const XLSX = require('xlsx')
const asyncHandler=require('../middleware/async')
const ErrorResponse=require('../utils/errorResponse')


//@desc Create new sportsmen
//@route POST /general
exports.postGeneral=asyncHandler(async (req,res,next)=>{

        let excelFile = XLSX.readFile(__dirname + '/../uploads/'+req.file.filename, {
            cellDates:true
        });

        if (!excelFile){
            return next(new ErrorResponse('File not found!!!',404));
        }

        const general = excelFile.Sheets['General'];
        const res_general= XLSX.utils.sheet_to_json(general);

        const tableGeneral=await Sportsman.create(res_general);

        res.status(201).json({
            success: true,
            data: tableGeneral
        });

});


//@desc Create new test for sportsmen
//@route POST /tests
exports.postTests=asyncHandler(async (req,res,next)=>{

        let excelFile = XLSX.readFile(__dirname + '/../uploads/'+req.file.filename, {
            cellDates:true
        });

        if (!excelFile){
            return next(new ErrorResponse('File not found!!!',404));
        }

        const tests = excelFile.Sheets['Tests'];
        const res_tests= XLSX.utils.sheet_to_json(tests);

        console.log(res_tests);

        const tableTests=await Tests.create(res_tests);

        res.status(201).json({
            success: true,
            data: tableTests
        });
});

//@desc Create risk factors for sportsmen
//@route POST /riskFactors
exports.postRiskFactors=asyncHandler(async (req,res,next)=>{

        let excelFile = XLSX.readFile(__dirname + '/../uploads/'+req.file.filename, {
            cellDates:true
        });

        if (!excelFile){
            return next(new ErrorResponse('File not found!!!',404));
        }

        const riskFactors = excelFile.Sheets['Risk Factors'];
        const res_riskFactors= XLSX.utils.sheet_to_json(riskFactors);

        console.log(res_riskFactors);

        const tableRiskFactors=await RiskFactors.create(res_riskFactors);

        res.status(201).json({
            success: true,
            data: tableRiskFactors
        });
});

//@desc Update sportsmen
//@route PUT /general/:id
exports.updateGeneral=asyncHandler(async (req,res,next)=>{

    let sportsmen=await Sportsman.findByIdAndUpdate(req.params.id,{'First Name':'Siddiqa'}, {
        new:true,
        runValidators:true
    });

    if (!sportsmen){
       return  next(new ErrorResponse(`Sportsmen not found with id of ${req.params.id}`,404));
    }

    res.status(200).json({
        success: true,
        data: sportsmen
    });

});

//@desc Delete sportsmen
//@route DELETE /general/:id
exports.deleteGeneral=asyncHandler(async (req,res,next)=>{

    let sportsmen=await Sportsman.findByIdAndDelete(req.params.id);

    if (!sportsmen){
        return  next(new ErrorResponse(`Sportsmen not found with id of ${req.params.id}`,404));
    }

    res.status(200).json({
        success: true,
        data: sportsmen
    });

});



