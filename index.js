import express, { json } from 'express';
import errorHandler from './middleware/errorHandler';
import connectDb from './config/dbConnection.js';
const dotenv = require('dotenv').config()
import cors from "cors";
connectDb();
const app = express();
const port = process.env.PORT || 5001;
app.use(json())
app.use(cors());
app.use('/api/contacts', require('./routes/contactRoutes.js').default)
app.use('/api/users', require('./routes/usersRoutes.js'))
app.use(errorHandler)
app.listen(port, () => {
    console.log(`server running on the port ${port}`)
})