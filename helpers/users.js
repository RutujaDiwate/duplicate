var express = require('express');
var router = express.Router();
var db=require('mysql2');
// write here create & display data script
 
router.get('mysql2', function(req, res, next) {
      var UserId= req.params.id;
      var sql=`SELECT * FROM  `;
      db.query(sql, function (err, data) {
        if (err) throw err;
       
        res.render('users', { title: 'User', editData: data[0]});
      });
});
router.post('mysql2', function(req, res, next) {
  var id= req.params.id;
    var updateData=req.body;
    var sql = `UPDATE users SET ? WHERE id= ?`;
    db.query(sql, [updateData, id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
  });
  res.redirect('Node_project/users.js');
});
module.exports = router;

var usersRouter = require('/Node_project/users');
;
app.use('/users', usersRouter);



