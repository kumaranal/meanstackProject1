const express=require("express");
const app=express();
const bookroute=express.Router();
let book=require("../model/book");
const multer=require('multer');
 const hookf= require( "../controller/controlling");
//  var MongoClient = require('mongodb').MongoClient;

//image
// var storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'./uploads')
//     },
//     filename:function(req,file,cb){
//         cb(null,file.filename+"_"+Date.now()+"_"+file.originalname);
//     }
// });

// var uploads=multer({
//     storage:storage,
// }).single('image');

//rouuting
//create api
bookroute.post ('/add-book',hookf.postfn);

//get all data
bookroute.get('/',hookf.getfn);

//get book by id
bookroute.get('/find-book/:id',hookf.findfn);

// update
bookroute.put('/update-book/:id',hookf.updatefn);

//delete
bookroute.delete('/delete-book/:id',hookf.deletefn);

//delete using name
// bookroute.delete('/delete-book-name',hookf.deletefn1);


module.exports=bookroute;