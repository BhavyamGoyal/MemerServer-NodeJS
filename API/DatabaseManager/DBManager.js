var mysql = require('mysql');
var Settings = require('../ServerConstants/ServerSettings');

var con = mysql.createConnection({
    password : Settings.password,
    user : Settings.user,
    host : Settings.host
});

var SetupSqlDatabase = function SetupSqlDatabase(){
    con.connect(function(error){
        if (error) throw error;
        console.log("Connected");

        var sql = "CREATE DATABASE IF NOT EXISTS MemeDatabase";
        con.query(sql , function(err, result){
        if(err) throw err;
            CreateTable();
            console.log("Database Created:" + JSON.stringify(result));
        });
    });
}

var CreateTable = function CreateTable(){
    // con.connect(function(err){
    //     if (err) throw err;
    //     console.log("Connected");
    // });

    var sql = "CREATE TABLE memes (memeUrl VARCHAR(255), memeDescription VARCHAR(255), pageUrl VARCHAR(255), postDate VARCHAR(255))";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table Created:" + JSON.stringify(result));
    });
}

SetupSqlDatabase();
