
const router = require('express').Router();
const home_controller = require('./../controllers/home.js');

router.get('/', home_controller.home);

module.exports = router;