const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')
const userShema=new mongoose.Schema({
    name:{type:String},
    email:{type:String, require: true},
    password:{type:String, require: true},
    createdAt: { type: Date, default: Date.now }
});
userShema.plugin(AutoIncrement,{inc_field:'user_id'});
const User = mongoose.model('User',userShema);
module.expport=User;