const express = require('express');
const router = express.Router();

const { 
    getBootcamps, getBootcamp, createBootcamp, 
    updateBootCamp, deleteBootCamp 
} = require('../controllers/bootcamps')

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootCamp).delete(deleteBootCamp);

module.exports = router;