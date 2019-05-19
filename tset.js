var mongoose = require ("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/mydb',function(err){

    if(err) throw err;
    console.log('Succesfully Connected eiei');
});

var userSchema = mongoose.Schema({
    name:{
    firstName: String,
    lastName: String    
    },
    age: Number
});

var user = mongoose.model('user', userSchema);
var aicque = new user({
    name:{
        firstName: 'Wuttithat',
        lastName: 'Krongyot'
    },
    age: 19
});
aicque.save(function(err){
    if(err) console.log('Save error')
    console.log('Save success');
});

module.exports = user;
