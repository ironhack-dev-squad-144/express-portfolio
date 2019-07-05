const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

<<<<<<< HEAD
router.get('/mariana', (req, res, next) => {
  res.render('users/mariana');
});


=======
router.get('/andre', (req, res, next) => {
  res.render('users/andre');
});

>>>>>>> 672b8b69a66c42613f3d1ccce89a05e72d05aa30
router.get('/maxence', (req, res, next) => {
  res.render('users/maxence');
});

router.get('/carlos', (req, res, next) => {
  res.render('users/carlos');
});

<<<<<<< HEAD
router.get('/antonio', (req, res, next) => {
  res.render('users/antonio');
});

=======
router.get('/giulia', (req, res, next) => {
  res.render('users/giulia');
});

router.get('/sonia', (req, res, next) => {
  res.render('users/sonia');
});
>>>>>>> 671920a12aa5c08f5d1a31eeb819c86b92900dd8

module.exports = router;
