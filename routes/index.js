const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/mariana', (req, res, next) => {
  res.render('users/mariana');
});


router.get('/maxence', (req, res, next) => {
  res.render('users/maxence');
});

router.get('/carlos', (req, res, next) => {
  res.render('users/carlos');
});

router.get('/antonio', (req, res, next) => {
  res.render('users/antonio');
});


module.exports = router;
