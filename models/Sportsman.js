const mongoose = require('mongoose');

const SportsmanSchema=new mongoose.Schema({
    'First Name': {
        type: String,
        required: [true,'Please add a name'],
        maxLength:[50,'Name can not be more than 50 characters']
    },

    'Last Name':{
        type: String,
        required: [true,'Please add a last name'],
        maxLength:[50,'Name can not be more than 50 characters']
    },

    Gender:{
        type: String,
        required: [true,'Please add a gender']
    },

    'Date of Birth':{
        type:String,
        required: [true,'Please add a date of birth']
    },

    Pool: String,

    Sport:{
        type:String,
        required:[true,'Please add a sport type']
    },

    Discipline:{
        type:String,
        required:[true,'Please add a discipline']
    },

    Phone: {
        type: String,
        required:[true,'Please add a phone number']
    },

    Email: {
        type: String,
        required:[true,'Please add a e-mail']
    },

    'Passport Custodian': String,

    'Risk of Sport':{
        default:0
    }

});

module.exports=mongoose.model('Sportsman',SportsmanSchema);

