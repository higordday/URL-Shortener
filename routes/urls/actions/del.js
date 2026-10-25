
const router = require('express').Router();
const delete_url_controller = require('./../../../controllers/urls/actions/del.js');

router.delete('/urls/delete', delete_url_controller.delete);

module.exports = router;