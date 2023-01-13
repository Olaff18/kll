const express = require('express')
const router = express.Router()

const europcentr = require('../controllers/europecontr')


router.get('/unews', europcentr.ukrHTML)

module.exports = router