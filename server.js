const express = require('express');
const connectDB = require('./src/common/config/dbConnection');
const errorHandler = require('./src/common/middleware/errorHandler');
const dotenv = require('dotenv').config();

connectDB();
const app = express();

app.use(express.json());
app.use("/api/contacts", require("./src/routes/contactRouter"));
app.use(errorHandler);

const port = process.env.PORT | 5000;
app.listen(port, () => {
    console.log(`server smarted on port ${port}.`);
})

