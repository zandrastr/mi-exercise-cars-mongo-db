var express = require('express');
var router = express.Router();

//GET cars listing
router.get('/', function(req, res, next) {

  //Retrieve all documents from the "cars" collection in the MongoDB database and return them as an array
  req.app.locals.db.collection("cars").find().toArray()

  .then(results => {
    console.log(results);
    res.send(results);
  })
});

//POST to database
router.post("/add", function(req, res) {

  req.app.locals.db.collection("cars").insertMany(req.body)

  .then(result => {
    console.log(result);
  })
})

module.exports = router;
