var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Employee.find({}, function(err, employees) {
  if (err) return next(err);
  res.render('index', { title: 'Express', employees: employees });
});
});

module.exports = router;
