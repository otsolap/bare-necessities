import { v4 as uuidv4 } from 'uuid'

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_WORKOUT":
            if (state.find(workout => workout.workoutDay === action.workoutDay)) {
                return state
            }

            return [...state, {
                id: uuidv4(),
                workoutDay: action.workoutDay,
                workoutType: action.workoutType,
                workoutDone: false
            }]

        case "TOGGLE_WORKOUT":
            return state.map(workout =>
                workout.id === action.id ? { ...workout, workoutDone: !workout.workoutDone } : workout)

        default:
            return state
    }
}

export default reducer;