const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.MONGODB_URI || "mongodb://localhost/exercises";

const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

const mongooseOptions = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "html");

// routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

mongoose.connect(DB_URI, mongooseOptions);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
