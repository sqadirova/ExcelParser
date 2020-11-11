const XLSX = require('xlsx')

exports.getAllInfo=(req,res)=>{
    try{
        let excelFile = XLSX.readFile(__dirname + '/../uploads/'+req.file.filename, {
            cellDates:true
        })

        const sheetNames = excelFile.SheetNames;
        console.log(sheetNames);

        const general = excelFile.Sheets['General']
        const test=excelFile.Sheets['Tests']
        const risk_factors=excelFile.Sheets['Risk Factors']

        const res_general= XLSX.utils.sheet_to_json(general)
        const res_test= XLSX.utils.sheet_to_json(test)
        const res_riskFactors= XLSX.utils.sheet_to_json(risk_factors)

        const excel_info= {
            res_general,
            res_test,
            res_riskFactors
        }

        res.send(excel_info)
    }catch (err) {
        res.status(404).json({ error: err.toString(),
                                     message: 'File not found'})
    }
};


exports.getGeneral=(req,res)=>{
    let excelFile = XLSX.readFile(__dirname + '/../uploads/'+req.file.filename, {
        cellDates:true
    });

    const general = excelFile.Sheets['General'];
    const res_general= XLSX.utils.sheet_to_json(general);

    res.send(res_general);
};


exports.getTests=(req,res)=>{
    let excelfile = XLSX.readFile(__dirname + '/../uploads/'+req.file.filename, {
        cellDates:true
    });

    const test=excelfile.Sheets['Tests']
    const res_tests= XLSX.utils.sheet_to_json(test)

    res.send(res_tests);
};


exports.getRiskFactory=(req,res)=>{
    let excelfile = XLSX.readFile(__dirname + '/../uploads/'+req.file.filename, {
        cellDates:true
    });

    const risk_factors=excelfile.Sheets['Risk Factors']
    const res_riskFactors= XLSX.utils.sheet_to_json(risk_factors)

    res.send(res_riskFactors);
};
