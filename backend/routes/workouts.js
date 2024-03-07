const express = require("express");
const workout = require("../models/WorkoutModel");
const { createWorkout } = require("../controllers/workoutController");
const router = express.Router();

//Get all workout
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// Get single
router.get("/:id", (req, res) => {
  res.json({ msg: "Get a single workout" });
});

router.post("/", createWorkout);

router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});
module.exports = router;
