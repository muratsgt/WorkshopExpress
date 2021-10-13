var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


/**
 * www.mysite.com
 * .../about
 * .../contact
 * 
 * .../products
 * .../products/add
 * .../products/:id
 * .../products/:id/update
 * .../products/:id/delete
 * 
 * .../categories
 * .../categories/add
 * .../categories/:id
 * .../categories/:id/update
 * .../categories/:id/delete
 * 
 * .../employees
 * .../employees/add
 * .../employees/:id
 * .../employees/:id/update
 * .../employees/:id/delete
 */