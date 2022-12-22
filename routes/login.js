//js
const express = require('express');
const {registerView, loginView } = require('../controllers/loginController');
const router = express.Router();

router.get('/cadastro', registerView);
router.get('/login', loginView);

module.exports = router;