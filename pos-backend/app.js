require("dotenv").config();
const express = require("express");
const connectDB = require("./config/databse.js");
const config = require("./config/config.js");
const globalErrorHandler = require("./middlewares/globalErrorHandler.js");
const cookieParser = require("cookie-parser");

const app = express();
connectDB();

// Middlewares
app.use(express.json()); // parse incoming request in json format
app.use(cookieParser())

const PORT = config.port;

// Root Endpoint
app.get("/", (req,res) => {

    res.json({message : "Hellow from POS Server!"});
})

// other endpoints
app.use("/api/user", require("./routes/userRoute.js"));
app.use("/api/order", require("./routes/orderRoute.js"));
app.use("/api/table", require("./routes/tableRoute.js"))

// Global Error Handler

app.use(globalErrorHandler);


// Server
app.listen(PORT, () => {
    console.log(`POS Server is listening on port ${PORT}`)
})