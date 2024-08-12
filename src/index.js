const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const router = require('./router');


const App = express();
const port = process.env.PORT || 9000;



//middleware
App.use(express.json());
App.use('/api', router);

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB")).catch((error) => console.log(error ))

App.listen(port, () => console.log("Server listening on port " + port));
