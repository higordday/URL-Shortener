
const router = require('express').Router();
const statistics_controller = require('./../../controllers/urls/statistics.js');

router.get('/url/statistics', statistics_controller.statistics);

module.exports = router;