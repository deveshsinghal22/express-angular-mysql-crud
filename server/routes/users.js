var express = require('express');
var router = express.Router();
var db_connection = require(".././config/db_connect");

/* GET users listing. */
router.get('/', function(req, res) {
  db_connection.query('SELECT * FROM students', function(err, rows){
    res.json(rows);
  });
});

router.post('/add', function(req, res) {
   db_connection.query('INSERT INTO students SET ?', req.body, function(err, result) {
    res.json({status: true});
  });
});

router.post('/getDetailById', function(req, res) {
  db_connection.query('SELECT * FROM students WHERE id = ?', [req.body.id], function(err, results) {
  res.json({student: results});
});
});

router.put('/updateDetails', function(req, res) {
  var query = "UPDATE students SET name ='"+req.body.name+"', marks = '"+req.body.marks+"' WHERE id= ? ";
  db_connection.query(query,  [req.body.id], function(err, results) {
    res.json({status: true});
  });
});

router.put('/removeStudent', function(req, res) {
  db_connection.query('DELETE FROM students WHERE id = ? ', [req.body.id], function (err, result) {
    res.json({status: true});
  })
});

module.exports = router;
