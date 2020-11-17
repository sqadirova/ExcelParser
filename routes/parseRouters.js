const express=require('express')
const multer = require('multer')

const router=express.Router()

const {  postGeneral,
         postTests
} =require('../controllers/SportsmanController')


const upload = multer({dest: './uploads/'});

router.route('/general')
    .post(upload.single("avatar"),postGeneral);

router.route('/tests')
    .post(upload.single("avatar"),postTests);

module.exports=router;


