const express = require('express');
const router = express.Router();

const controller = require('../controllers/api.users')

router.get('/', controller.allUsers)
router.post('/', controller.registerLocalUser);
router.post('/login', controller.loginUser);
router.put('/:id', controller.editUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;