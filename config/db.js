const mongoose = require('mongoose');

var url ='mongodb://localhost:27017/booksDB'; //declaro la url donde quiero que este el localhost

const connection = mongoose.createConnection(url); //creo la conexion en esa url

module.exports=connection;
