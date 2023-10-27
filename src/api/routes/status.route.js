const express = require('express')
const controller = require('../controllers/status.controller')

const router = express.Router()

router.route('/init').get(controller.init)
router.route('/webhook').get(controller.webhook)

module.exports = router