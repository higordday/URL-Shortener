
const router = require('express').Router();
const create_url_controller = require('./../../../controllers/urls/actions/create.js');

router.post('/urls/create', create_url_controller.create);

module.exports = router;