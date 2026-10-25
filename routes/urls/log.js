
const router = require('express').Router();
const log_controller = require('./../../controllers/log.js');

router.get('/:unique_code', log_controller.log);

module.exports = router;