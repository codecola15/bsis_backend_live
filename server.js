require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8006;
const cors = require('cors');
const pool = require('./config/db');
// Declarition of all routes
const userRoute = require('./routes/userRoute');
const studentRoute = require('./routes/studentRoute');

const app = express();


//Middleware
app.use(express.json());
// app.use(cors({
//     origin: 'https://cruz-jerwin15-countries-v2-api.vercel.app/',
// }));
app.use(cors());


//Routes
app.use('/api/users',userRoute);
app.use('/api/students',studentRoute);
// app.use('/api/departments',userRoute);

app.listen(PORT,()=>{
   app.listen(PORT, async () => {
    try {
        await pool.getConnection(); // 👈 test if DB is reachable
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
    console.log(`Server is running on port ${PORT}`);
});
})
