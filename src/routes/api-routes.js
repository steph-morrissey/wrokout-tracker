const router = require("express").Router();
const db = require("../models");
const mongoose = require("mongoose");

router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: [req.body] } }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/workouts/", (req, res) => {
  db.Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
