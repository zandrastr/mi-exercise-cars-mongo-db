var express = require('express');
var router = express.Router();

//GET cars listing
router.get('/', function(req, res, next) {

  //Retrieve documents from the "cars" collection in the MongoDB database and return them as an array
  //Use querys to filter on specified car year (less than or equal to 1991)
  //Limit to 20 results
  //Sort based on car year in descending order
  req.app.locals.db.collection("cars").find({"carYear": {$lte: 1991}}).limit(20).sort({"carYear": -1}).toArray()

  .then(results => {
    console.log(results);

    let printCars = "<h1>Cars</h1> <ul>"

    //Loop the results
    for (car in results) {
      printCars += "<li>" 
      + results[car].carMake + " - "
      + results[car].carModel + " - " 
      + results[car].carMake + " - "
      + results[car].carYear + " - "
      + results[car].carColor 
      + "</li>"
    }

    printCars += "</ul>"

    res.send(printCars);
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
