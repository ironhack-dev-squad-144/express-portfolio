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

router.get('/carlos', (req, res, next) => {
  res.render('users/carlos');
});

<<<<<<< HEAD

=======
>>>>>>> 5f22bac769118e8d28cec891206dfd683735235c

module.exports = router;
