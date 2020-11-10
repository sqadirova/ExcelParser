const express=require('express')
const multer = require('multer')

const router=express.Router()

const {
    getAllInfo
    ,getGeneral
    ,getTests
    ,getRiskFactory
} =require('../controllers/parserController')


const upload = multer({dest: './uploads/'});

router.route('/')
    .post(upload.single('avatar'),getAllInfo);

router.route('/general')
    .post(upload.single('avatar'),getGeneral);

router.route('/tests')
    .post(upload.single('avatar'),getTests);

router.route('/riskFactors')
    .post(upload.single('avatar'),getRiskFactory);


module.exports=router;


