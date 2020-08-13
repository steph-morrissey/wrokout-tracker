const express = require("express");
const path = require("path");

const router = express.Router();

const statsPath = (req, res) => {
  const filePath = path.join(__dirname, "../public/stats.html");
  res.sendFile(filePath);
};

const exercisePath = (req, res) => {
  const filePath = path.join(__dirname, "../public/exercise.html");
  res.sendFile(filePath);
};

// router.get("/", (res, req) => {
//   const filePath = path.join(__dirname, "../public");
//   res.sendFile("/index.html", filePath);
// });
router.get("/exercise", exercisePath);
router.get("/stats", statsPath);

module.exports = router;
