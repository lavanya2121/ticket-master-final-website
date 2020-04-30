const mongoose=require('mongoose')
const Schema=mongoose.Schema
const validator=require('validator')

//Customer Schema
const employeeSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(email){
                return validator.isEmail(email)
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
    department:{
        type: Schema.Types.ObjectId,
        //required: true,
        ref: 'Department'
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
const Employee=mongoose.model('Employee',employeeSchema)

module.exports=Employee