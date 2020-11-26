const express=require('express');
const User=require('../models/User');
const { getUsers,
        getUser,
        createUser,
        updateUser,
        deleteUser  }=require('../controllers/AdminController')

const router=express.Router({ mergeParams:true });

const { protect,authorize }=require('../middleware/auth');

router.use(protect);
router.use(authorize('admin'));

router.route('/').get(getUsers)
                       .post(createUser);

router.route('/:id').get(getUser)
                          .put(updateUser)
                          .delete(deleteUser);

module.exports=router;

