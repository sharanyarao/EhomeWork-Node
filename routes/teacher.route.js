const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const teacher_controller = require('../controllers/teacher.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', teacher_controller.test);
module.exports = router;