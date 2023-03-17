var express = require('express');
var router = express.Router();

//GET cars listing
router.get('/', function(req, res, next) {

  req.app.locals.db.collection("cars").find().toArray()
  .then(results => {
    console.log(results);
    res.send(results);
  })

});

module.exports = router;
