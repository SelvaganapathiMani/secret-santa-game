const express = require('express');
const santaController = require('../controllers/santaController');
const multer = require('multer');
const storage = require('../helpers/storage')


const upload = multer({ storage: storage });


const router = express.Router();

router.post('/secret-santa', upload.fields([{ name: 'employees' }, { name: 'previous' }]), santaController.handleSecretSanta);

module.exports = router;
