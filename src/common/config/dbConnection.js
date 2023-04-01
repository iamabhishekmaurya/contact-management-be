const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(`Database connected: ${connect.connection.host}, database name: ${connect.connection.name}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;