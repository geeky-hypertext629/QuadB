const express = require('express');
const router = express.Router();
const getData = require('./../controller/statController');


router.route('/').get(getData);


module.exports = router;