const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const connect = async() => {
        try{
            await mongoose.connect(process.env.db_url)
            console.log('connected to db');
        }
        catch(err){
            console.log(err.message);
        }
}

module.exports = connect;
