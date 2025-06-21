const express = require('express');
const connectDB = require('./config/connectDB'); 
const userRoutes= require('./routes/userRoutes');
const bodyParser = require('body-parser');
const User= require('./models/userModel');
const dotenv = require('dotenv');
const server = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
connectDB();


server.use(express.json());

server.use('/api/users', userRoutes);   


server.get('/', (req, res) => {
  res.send("CRUD API is running...");
});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));