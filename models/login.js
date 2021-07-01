const mongoose = require("mongoose")



const loginSchema = new mongoose.Schema({
    userId:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});



const Login = mongoose.model('Users', loginSchema);
module.exports = Login;