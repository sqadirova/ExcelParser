const express=require('express')
const multer = require('multer')

const router=express.Router()

const {  postGeneral,
         postTests,
         postRiskFactors
} =require('../controllers/SportsmanController')


const upload = multer({dest: './uploads/'});

router.route('/general')
    .post(upload.single("excel"),postGeneral);

router.route('/tests')
    .post(upload.single("excel"),postTests);

router.route('/riskFactors')
    .post(upload.single("excel"),postRiskFactors);

module.exports=router;


