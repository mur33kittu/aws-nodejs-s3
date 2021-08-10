'use strict';

const express = require('express');
const router = express.Router();

const pingRouter = require('./ping.router');

router.use('/ping', pingRouter.ping)

module.exports = router;