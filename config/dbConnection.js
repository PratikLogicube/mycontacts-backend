const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb