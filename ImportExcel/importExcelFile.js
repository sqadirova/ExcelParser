// const fs = require('fs');
//
// let MongoClient = require('mongodb').MongoClient;
// let url = "mongodb://localhost:27017/";
//
// const excelToJson = require('convert-excel-to-json');
//
//
// // -> Import General Excel File to MongoDB database
// exports.importGeneralData2MongoDB=(filePath)=>{
//     // -> Read Excel File to Json Data
//     const excelData = excelToJson({
//         sourceFile: filePath,
//         sheets:[{
//             // Excel Sheet Name
//             name: 'General',
//
//             // Header Row -> be skipped and will not be present at our result object.
//             header:{
//                 rows: 1
//             },
//
//             // Mapping columns to keys
//             columnToKey: {
//                 A: 'First Name',
//                 B: 'Last Name',
//                 C: 'Gender',
//                 D: 'Date of Birth',
//                 E: 'Pool',
//                 F: 'Sport',
//                 G:'Discipline',
//                 H:'Phone',
//                 I: 'Email',
//                 J:'Passport Custodian',
//                 K:'Risk of Sport'
//             }
//         }]
//     });
//
//     // -> Log Excel Data to Console
//     console.log(excelData);
//
//     // Insert Json-Object to MongoDB
//     MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
//         if (err) throw err;
//         let dbo = db.db("testExcel");
//         dbo.collection("sportsmen").insertMany(excelData.General, (err, res) => {
//             if (err) throw err;
//             console.log("Number of documents inserted: " + res.insertedCount);
//             db.close();
//         });
//     });
//
//     fs.unlinkSync(filePath);
// }
//
//
// // -> Import Risk Factors Excel File to MongoDB database
// exports.importRiskFactoryData2MongoDB=(filePath)=>{
//     // -> Read Excel File to Json Data
//     const excelData = excelToJson({
//         sourceFile: filePath,
//         sheets:[{
//             // Excel Sheet Name
//             name: 'Risk Factors',
//
//             // Header Row -> be skipped and will not be present at our result object.
//             header:{
//                 rows: 1
//             },
//
//             // Mapping columns to keys
//             columnToKey: {
//                 A: 'First Name',
//                 B: 'Last Name',
//                 C: 'Gender',
//                 D: 'Date of Birth',
//                 E: 'Last min Whereabouts changes',
//                 F: 'Whereabouts failure',
//                 G:'ADRV',
//                 H:'APMU recommendation',
//                 I: 'Suspicious training location',
//                 J:'Withdrawal from competition',
//                 K:'Injury',
//                 L:'Suspicious behavior',
//                 M:'Significant performance improvement'
//             }
//         }]
//     });
//
//     // -> Log Excel Data to Console
//     console.log(excelData);
//
//     // Insert Json-Object to MongoDB
//     MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
//         if (err) throw err;
//         let dbo = db.db("testExcel");
//         dbo.collection("riskFactors").insertMany(excelData['Risk Factors'], (err, res) => {
//             if (err) throw err;
//             console.log("Number of documents inserted: " + res.insertedCount);
//             db.close();
//         });
//     });
//
//     fs.unlinkSync(filePath);
// }
//
// // -> Import Tests Excel File to MongoDB database
// exports.importTestsData2MongoDB=(filePath)=>{
//     // -> Read Excel File to Json Data
//     const excelData = excelToJson({
//         sourceFile: filePath,
//         sheets:[{
//             // Excel Sheet Name
//             name: 'Tests',
//
//             // Header Row -> be skipped and will not be present at our result object.
//             header:{
//                 rows: 1
//             },
//
//             // Mapping columns to keys
//             columnToKey: {
//                 A: 'First Name',
//                 B: 'Last Name',
//                 C: 'Gender',
//                 D: 'Date of Birth',
//                 E: 'Date of test',
//                 F: 'Lab Analysis Type',
//                 G:'Sample type',
//                 H:'Testing Authority',
//                 I: 'Test type',
//                 J:'Dilute Sample',
//                 K:'Haemotological Passport recommendation',
//                 L:'Steroidal Passport recommendation',
//                 M:'Street',
//                 N:'City',
//                 O:'TUE'
//             }
//         }]
//     });
//
//
//
//     // -> Log Excel Data to Console
//     console.log(excelData);
//
//     // Insert Json-Object to MongoDB
//     MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
//         if (err) throw err;
//         let dbo = db.db("testExcel");
//         const collection=dbo.collection("Tests");
//          collection.insertMany(excelData.Tests, (err, res) => {
//             if (err) throw err;
//             console.log("Number of documents inserted: " + res.insertedCount);
//             db.close();
//         });
//     });
//
//     fs.unlinkSync(filePath);
// }