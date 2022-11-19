const mongoose=require('mongoose')
const schema=mongoose.Schema;

let book=new schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    }
},
    {
        collection:"books"
    }
)
module.exports=mongoose.model("Book",book)