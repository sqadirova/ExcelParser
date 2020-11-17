const mongoose = require('mongoose');

const RiskFactorsSchema=new mongoose.Schema({
    sportsmenID: {
        type:mongoose.ObjectId,
        default: '5fb16536a38c9e10bc95ffd7',
        ref: 'Sportsman',
        required: [true,'Please add sportsmen id']
    },

    'Last min Whereabouts changes':{
        type:String
    },

    'Whereabouts failure':{
        type:String
    },

    'ADRV':{
        type:String
    },

    'APMU recommendation':{
        type:String
    },

    'Suspicious training location':{
        type:String
    },

    'Withdrawal from competition':{
        type:String
    },

    'Injury':{
        type:String
    },

    'Suspicious behavior':{
        type:String
    },

    'Significant performance improvement':{
        type:String
    }
});


module.exports=mongoose.model('RiskFactors',RiskFactorsSchema);





