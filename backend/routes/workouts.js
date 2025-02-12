const express = require('express')

const {
    createWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all workouts' })
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a single workout' })
})

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a workout' })
})

// UPDATE a workout
router.patch('/:ID', (req, res) => {
    res.json({ mssg: 'UPDATE a workout' })
})

module.exports = router