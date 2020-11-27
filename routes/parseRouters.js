const express=require('express')
const multer = require('multer')

const router=express.Router()

const {
    postGeneral,
    postTests,
    postRiskFactors,
    updateSportsmen,
    addSportsmen
} =require('../controllers/SportsmanController')

const{ protect,authorize }=require('../middleware/auth');

const upload = multer({dest: './uploads/'});

router.route('/general')
    .post( protect,authorize('admin','user'),upload.single("excel"),postGeneral );

router.route('/tests')
    .post(protect,authorize('admin','user'),upload.single("excel"),postTests);

router.route('/riskFactors')
    .post(protect,authorize('admin','user'),upload.single("excel"),postRiskFactors);

router.route('/general/:id')
    .put(protect,authorize('admin','user'),updateSportsmen);

router.route('/general/addSportsmen')
    .post( protect,authorize('admin','user'),addSportsmen );

module.exports=router;


