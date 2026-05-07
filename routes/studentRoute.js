const express = require('express');
const router = express.Router();

const {
    getAllStudentController,
    addStudentController,
    getSingleStudentByIdController
} = require('../controllers/studentController')

router.get('/',getAllStudentController);
router.post('/',addStudentController);
router.get('/:id',getSingleStudentByIdController);

module.exports = router;