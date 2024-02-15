const express = require('express');
const errorHandler = require('./middleware/errorhandler.js');
const connectDb = require('./config/dbConnection.js');
const dotenv = require('dotenv').config()

connectDb();
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json())

app.use('/api/contacts', require('./routes/contactRoutes.js'))
app.use('/api/users', require('./routes/usersRoutes.js'))
app.use(errorHandler)
app.listen(port, () => {
    console.log(`server running on the port ${port}`)
})