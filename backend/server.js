const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const workout = require("./routes/workouts");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workout);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log("connect to db and listining on port", process.env.PORT)
    );
  })
  .catch((err) => console.log(err));
