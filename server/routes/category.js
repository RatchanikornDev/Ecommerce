const express = require('express')
const router = express.Router()
const { create, list, remove } = require('../controllers/concategory')


// @ENDPOINT http://localhost:5500/api/category
router.post('/category',create)
router.get('/category',list)
router.delete('/category/:id',remove)





module.exports = router