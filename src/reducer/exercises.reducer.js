import { v4 as uuidv4 } from 'uuid'

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXERCISE":
            return [...state, {
                id: uuidv4(),
                workoutId: action.workoutId,
                move: action.move,
                reps: action.reps,
                link: action.link,
                image: action.image,
                completed: false,
            }]

        case "TOGGLE_EXERCISE":
            return state.map(exercise =>
                exercise.id === action.id ? { ...exercise, completed: !exercise.completed } : exercise)

        default:
            return state
    }
}

export default reducer;