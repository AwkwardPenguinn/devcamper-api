const express = require('express');
const router = express.Router({ mergeParams: true });

const { 
    getBootcamps, getBootcamp, createBootcamp, 
    updateBootCamp, deleteBootCamp,
    getBootcampsInRadius,
    bootcampPhotoUpload 
} = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');

const advancedResults = require('../middleware/advancedResults');

// Include other resource routers
const courseRouter = require('./courses');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/').get(advancedResults(Bootcamp, 'courses'), getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootCamp).delete(deleteBootCamp);
router.route('/:id/photo').put(bootcampPhotoUpload);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

module.exports = router;