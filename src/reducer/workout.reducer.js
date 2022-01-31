import { v4 as uuidv4 } from 'uuid'


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_WORKOUT":
            return [...state, { id: uuidv4(), workoutDay: action.workoutDay, workoutType: action.workoutType, workoutDone: false }];

        case "TOGGLE_WORKOUT":
            return state.map(workout =>
                workout.id === action.id ? { ...workout, workoutDone: !workout.workoutDone } : workout)

        /* TODO: Workout edit, remove. */

        case "ADD_EXERCISE":
            return [...state, {
                // id: workoutID,
                exercises: [{
                    id: uuidv4(),
                    move: action.move,
                    reps: action.reps,
                    video: action.video,
                    image: action.image,
                    completed: false,
                }]
            }]

        case "TOGGLE_WORKOUT":
            return state.map(exercise =>
                exercise.id === action.id ? { ...exercise, completed: !exercise.completed } : exercise)

        default:
            return state
    }
}

export default reducer;