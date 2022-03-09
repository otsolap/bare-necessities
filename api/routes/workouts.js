const router = require('express').Router()
const Workout = require('../models/Workout')
const Exercise = require('../models/Exercise')

// create Workout
router.post('/', async (req, res) => {
    const newWorkout = new Workout(req.body)
    try {
        const savedWorkout = await newWorkout.save()
        res.status(200).json(savedWorkout)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get a Workout
router.get('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id)
        res.status(200).json(workout)
    } catch (err) {
        res.status(500).json(err)
    }
})

// update Workout
router.put('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id)
        if (workout.id === req.body.id) {
            await workout.updateOne({ $set: req.body }),
                res.status(200).json('Workout has been updated')
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// delete workout
router.delete('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id)
        if (workout.id === req.body.id) {
            await workout.deleteOne()
            res.status(200).json('Workout has been deleted')
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// get all Workouts
router.get('/', async (req, res) => {
    try {
        const workout = await Workout.find()
        res.status(200).json(workout)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get all Exercises of the Workout
router.get('/exercises/:id', async (req, res) => {
    try {
        const workout = await Workout.findOne({ id: req.params.id })
        if (workout.id === req.params.id) {
            const exercises = await Exercise.find({ workoutId: workout.id })
            res.status(200).json(exercises)
        } else {
            res.status(404).json('Exercises not found')
        }

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router