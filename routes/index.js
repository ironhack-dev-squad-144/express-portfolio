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

<<<<<<< HEAD
router.get('/anja', (req, res, next) => {
  res.render('users/anja');
});

=======
router.get('/carlos', (req, res, next) => {
  res.render('users/carlos');
});

router.get('/sonia', (req, res, next) => {
  res.render('users/sonia');
});

>>>>>>> eee44508643166319671c8613fea26d6ae6d2f3e
module.exports = router;
