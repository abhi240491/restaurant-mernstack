const mongoose = require('mongoose');

const connectDB = async () => {
    try{
    //(username:password@database cluserr link)
      await mongoose.connect('mongodb+srv://webstore-user:webstore-testing123@webstore2.c70xi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser:true,
            useUnifiedTopology: true,
        });
        console.log('Database connection success'); 
    }catch(err){
        console.log(err);
    }
};

module.exports = connectDB