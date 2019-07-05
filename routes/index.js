const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/andre', (req, res, next) => {
  res.render('users/andre');
});

router.get('/maxence', (req, res, next) => {
  res.render('users/maxence');
});

router.get('/seb', (req, res, next) => {
  res.render('users/seb');
})

router.get('/carlos', (req, res, next) => {
  res.render('users/carlos');
});

router.get('/giulia', (req, res, next) => {
  res.render('users/giulia');
});

router.get('/sonia', (req, res, next) => {
  res.render('users/sonia');
});

module.exports = router;
