
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_WORKOUT":
            if (state.find(workout => workout.workoutDay === action.workoutDay)) {
                return state
            }

            return [...state, {
                workoutDay: action.workoutDay,
                workoutType: action.workoutType,
                workoutDone: false
            }]

        case "TOGGLE_WORKOUT":
            return state.map(workout =>
                workout.id === action.id ? { ...workout, workoutDone: !workout.workoutDone } : workout)

        case "ADD_EXERCISE":
            return [...state, {
                workoutId: action.workoutId,
                move: action.move,
                reps: action.reps,
                link: action.link,
                image: action.image,
                completed: false,
            }]

        case "EDIT_EXERCISE":
            return state.map(exercise =>
                exercise._id === action._id ? {
                    ...exercise,
                    move: action.newMove,
                    reps: action.newReps,
                    link: action.newLink,
                    image: action.newImage,
                } : exercise);

        case "TOGGLE_EXERCISE":
            return state.map(exercise =>
                exercise._id === action._id ? { ...exercise, completed: !exercise.completed } : exercise)


        default:
            return state
    }
}

export default reducer;