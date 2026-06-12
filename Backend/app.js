// Dotenv
require("dotenv").config();
// express
const express = require("express");
const mongoose=require("mongoose")
const morgan = require("morgan");
const cors = require("cors");

const errorMiddleware=require("./middlewares/erroMiddleware")
//user auth
const authRoute=require("./routes/authRoute")
//candidate
const CanProfileRoute=require("./routes/candidateProfile.route")

const app = express();

//cros to link with axios
app.use(cors({
    origin: process.env.AXIOS
}))

// middleware json
app.use(express.json());

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

//connections
const dbConnection=async()=>{
    const connection=await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo database is connected  (o_o) ");
}
dbConnection();

app.use("/",authRoute)
app.use("/",CanProfileRoute)

CanProfileRoute
app.use(errorMiddleware)
app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is listening on port ${process.env.PORT}`);
} );