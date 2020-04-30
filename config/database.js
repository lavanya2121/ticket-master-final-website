const mongoose=require('mongoose')
const setupDB=()=>{
    mongoose.connect('mongodb://localhost:27017/ticket-master-app-new2121')
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log('DB Connection Error',err)
    })
}
module.exports=setupDB