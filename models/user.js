const mongoose = require("mongoose");

const userSchema = new mongoose.model('User', {
    email: {type : String},
    first_name: {type : String},
    last_name: {type : String},
    avatar: {type : String}
});

exports.User = mongoose.model('User', userSchema);
// exports.userSchema = userSchema;
