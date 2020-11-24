const express=require('express')
const multer = require('multer')

const router=express.Router()

const {  postGeneral,
         postTests,
         postRiskFactors,
         updateGeneral,
    deleteGeneral
} =require('../controllers/SportsmanController')

const{ protect,authorize }=require('../middleware/auth');

const upload = multer({dest: './uploads/'});

router.route('/general')
    .post( protect,authorize('publisher','admin'),upload.single("excel"),postGeneral );

router.route('/general/:id')
.put(protect,authorize('publisher','admin'),updateGeneral)
    .delete(protect,authorize('publisher','admin'),deleteGeneral);

router.route('/tests')
    .post(protect,authorize('publisher','admin'),upload.single("excel"),postTests);

router.route('/riskFactors')
    .post(protect,authorize('publisher','admin'),upload.single("excel"),postRiskFactors);

module.exports=router;


