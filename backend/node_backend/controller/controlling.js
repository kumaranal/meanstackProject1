const express=require("express");
const app=express();
const bookroute=express.Router();
let book=require("../model/book");
const multer=require('multer');



 const getpost= async(req,res)=>{

    try{
        const post=req.body;
        const newpost=new postMessage(post);
        await newpost.save();     
          res.status(200).json({message:"Success"});
            }
            catch(err){
                res.status(404).json({message: err.message});
        
            }     
        }

const postfn=(req,res,next)=>{
  book.create(req.body,(error,data)=>{
      if(error){
          return next (error)
      }else{
          res.status(200).json({msg:"Success"});
          console.log("post");
      }
  });
}

const getfn=(req,res)=>{
  let datas="vns";
  book.find((error,data)=>{
      if(error){
          return next (error)
      }else{
          res.status(200).json(data)
      }
  });
};


const findfn=(req,res)=>{
    console.log("find");
  book.findById(req.params.id,(error,data)=>{
      if(error){
          return next (error)
      }else{
          res.status(200).json(data)
      }
  });
};

const findfn1=(req,res)=>{
    console.log("find");
  book.findById(req.params.id,(error,data)=>{
      if(error){
          return next (error)
      }else{
          res.json(data)
      }
  });
};

const updatefn=(req,res,next)=>{
    console.log("update");
    // console.log("update req",req);
  book.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true},(error,data)=>{
      if(error){
        console.log(error);
          return next (error)
      }else{
          res.status(200).json(data)
          console.log("update success");
      }
  });
};

const deletefn=(req,res,next)=>{
  book.findByIdAndRemove(req.params.id,(error,data)=>{
      if(error){
          return next (error)
      }else{
          res.status(200).json({msg:data})
          console.log("delete success");
      }
  });
};

const deletefn1=(req,res,next)=>{
  book.posts.deleteOne(req.params.name,(error,data)=>{
      if(error){
          return next (error)
      }else{
          res.status(200).json({msg:data})
          console.log("delete success");
      }
  });
};
     

module.exports={postfn,getfn,findfn,updatefn,deletefn};