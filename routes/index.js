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
router.get('/carlos', (req, res, next) => {
  res.render('users/carlos');
});

=======
>>>>>>> b21a1fe37df61beabafbdb35d2e233ef59f61a9a


module.exports = router;
