let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);

//This model is not necessary, unless password is required.