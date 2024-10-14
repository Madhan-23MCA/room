const mongoose = require('mongoose');
require('dotenv').config(); // Ensure you have dotenv installed

// Correct the connection URI and use process.env.MONGO_URI
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the database");
})
.catch((err) => {
    console.error("Error connecting to the database:", err);
});