const mongoose = require('mongoose');

const RiskFactorsSchema=new mongoose.Schema({
    sportsmenID:{
        type:mongoose.ObjectId  //?
    },
    




});


module.exports=mongoose.model('RiskFactors',RiskFactorsSchema);





