const express = require('express');

const router = express.Router();

const heroController = require('../controller/heroController');

router .get('/heroes', heroController.getHero)

module.exports = router;