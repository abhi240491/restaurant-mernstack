const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./database/db');
app.use(cors)


connectDB();
port  = process.env.PORT||5000;
app.listen(port,()=> console.log('listening to port 5000'))
