/**
 * Created by Devesh on 24-01-2015.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'youruser',
    password : 'yourpass'
});

module.exports = connection;
