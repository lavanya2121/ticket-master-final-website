const mongoose=require('mongoose')
const validator=require('validator')

const Schema=mongoose.Schema

//Customer Schema
const customerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        //custom validation
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    user : {
        type : Schema.Types.ObjectId,
        //required : true,
        ref : 'User'
    }

})

//customer model
const Customer=mongoose.model('Customer',customerSchema)

module.exports=Customer

//5e9ec6abe914171828e60505
//5e9ec778e914171828e60506
//5e9ec8dde914171828e60507