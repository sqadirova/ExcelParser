const express=require('express')
const{ register,
    login,
    getMe,
    forgotPassword }=require('../controllers/AuthController');

const { protect,authorize }=require('../middleware/auth');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(protect,authorize('admin','user'),getMe);
router.route('/forgotPassword').post(forgotPassword);


module.exports=router;



