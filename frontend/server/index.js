const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const appRoute = require("./routes/appRoute");
const notificationRoute = require("./routes/notification");
const otpRoute = require("./routes/resetPasswordRoute");

require("dotenv").config();
const app = express();


app.use(express.json());
app.use(cors());
require('dotenv').config();
app.use("/user", userRoute);
app.use("/laundry", appRoute);
app.use("/notification", notificationRoute);
app.use("/otp", otpRoute);

app.get("/", (req, res) => {
  res.send("Welcome to laundry");
});
const {PORT}=process.env
app.listen(PORT, async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("server is running on", PORT);
});
