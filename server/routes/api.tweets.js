const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/api.tweets')

// ROUTING
router.get('/', controller.getDatas)
router.post('/', controller.postData)
router.get('/:id', controller.getData)
router.delete('/:id', controller.deleteData)
// router.put('/tweets/:id', controller.updateData)

module.exports = router
