const router = require('express').Router()
const Exercise = require('../models/Exercise')

// create Exercise
router.post('/', async (req, res) => {
    const newExercise = new Exercise(req.body)
    try {
        const savedExercise = await newExercise.save()
        res.status(200).json(savedExercise)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get a Exercise
router.get('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)
        res.status(200).json(exercise)
    } catch (err) {
        res.status(500).json(err)
    }
})

// update a Exercise
router.put('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)
        if (exercise.id === req.body.id) {
            await exercise.updateOne({ $set: req.body }),
                res.status(200).json('Exercise has been updated')
        }
    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router