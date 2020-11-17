const mongoose = require('mongoose');

const TestsSchema=  new mongoose.Schema({
    sportsmenID: {
        type:mongoose.ObjectId,
        default: '5fb16536a38c9e10bc95ffd7',
        ref: 'Sportsman',
        required: [true,'Please add sportsmen id']
    },

    'Date of test': {
        type: String
        // ,required:[true,'Please add date of test']
    },
    'Lab Analysis Type':{
        type:String
        //,required:[true,'Please add lab analysis type']
    },
    'Sample type':{
        type:String
        // required:[true,'Please add sample type']
    },
    'Testing Authority':{
        type:String,
        // required:[true,'Please add testing authority']
    },
    'Test type':{
        type:String,
    //  ,required:[true,'Please add test type']
    },
    'Dilute Sample':{
        type:String
    },
    'Haemotological Passport recommendation':{
        type:String
    },
    'Steroidal Passport recommendation':{
        type:String
    },
    'Street': {type:String},

    'City':{type:String},

    'TUE':String
});

module.exports=mongoose.model('Tests',TestsSchema);
