const express = require('express');
const router = express.Router();

const {
    getAllUsersController,
    addUserController,
    getUserByIdController,
    updateUserController,
    deleteUserController
} = require('../controllers/userController')

router.get('/',getAllUsersController);
router.post('/',addUserController);
router.get('/:id',getUserByIdController);
router.put('/:id',updateUserController);
router.delete('/:id',deleteUserController);

module.exports = router;