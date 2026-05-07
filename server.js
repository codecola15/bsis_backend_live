require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8006;
// Declarition of all routes
const userRoute = require('./routes/userRoute');
const studentRoute = require('./routes/studentRoute');

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use('/api/users',userRoute);
app.use('/api/students',studentRoute);
// app.use('/api/departments',userRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
