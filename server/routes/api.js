const express = require('express');

const router = express.Router();
const formController = require('../controllers/formController.js');

router.post('/user-validation', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
