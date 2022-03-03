const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema(
    {
        workoutId: {
            type: String,
            required: true
        },
        move: {
            type: String
        },
        reps: {
            type: String
        },
        link: {
            type: String,
        },
        image: {
            type: String
        },
        exerciseDone: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Exercise', ExerciseSchema)