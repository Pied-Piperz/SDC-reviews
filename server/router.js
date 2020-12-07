const router = require('express').Router();
const controllers = require('../postgres/controller.js');

router.get('/range/:start/:end', controllers.getRange);
router.get('/one/:id', controllers.getOne);

module.exports = router;