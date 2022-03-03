const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema(
    {
        workoutDay: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            required: true
        },
        workoutType: {
            type: String,
            enum: [
                'Arms',
                'Back',
                'Back + Arms',
                'Chest',
                'Chest + Shoulders',
                'Chest + Shoulders + Arms',
                'Legs',
                'Shoudlers'],
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Workout', WorkoutSchema)