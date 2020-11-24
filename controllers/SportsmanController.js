const Sportsman=require('../models/Sportsman')
const Tests=require('../models/Tests')
const RiskFactors=require('../models/RiskFactors')
const XLSX = require('xlsx')
const asyncHandler=require('../middleware/async')
const ErrorResponse=require('../utils/errorResponse')


//@desc      Read excel file and add 'General' data to database
//@route     POST /general
//@access    Private
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


//@desc     Read excel file and add 'Tests' data to database
//@route    POST /tests
//@access   Private
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

//@desc     Read excel file and add 'Risk Factors' data to database
//@route    POST /riskFactors
//@access   Private
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


//@desc     Update sportsmen table
//@route    PUT /excel/general/:id
//@access   Private
exports.updateGeneral=asyncHandler(async (req,res,next)=>{
    req.body.user=req.user.id;

    let sportsmen=await Sportsman.findById(req.params.id);

    if (!sportsmen){
       return  next(new ErrorResponse(`Sportsmen not found with id of ${req.params.id}`,404));
    }

    //Make sure user has role 'admin'
    if (req.user.role!=='admin'){
        return next(new ErrorResponse(`User ${req.user.id} is not authorized to update this bootcamp`, 401));
    }

    sportsmen=await Sportsman.findOneAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });

    res.status(200).json({
        success: true,
        data: sportsmen
    });

});




