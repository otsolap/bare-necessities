import { v4 as uuidv4 } from 'uuid'


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuidv4(), workoutDay: action.workoutDay, workoutType: action.workoutType, workoutDone: false }];

        case "TOGGLE":
            return state.map(workout =>
                workout.id === action.id ? { ...workout, workoutDone: !workout.workoutDone } : workout)

        default:
            return state
    }
}

export default reducer;