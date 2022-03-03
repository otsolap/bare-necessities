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


module.exports = router