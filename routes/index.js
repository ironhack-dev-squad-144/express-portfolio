const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/maxence', (req, res, next) => {
  res.render('users/maxence');
});

module.exports = router;
