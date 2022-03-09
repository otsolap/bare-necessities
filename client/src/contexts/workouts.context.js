import React, { createContext, useContext } from 'react'
import workoutReducer from '../reducer/workout.reducer'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'
import { getWorkouts, getWorkoutExercises, editExercise, postNewExercise, postNewWorkout } from '../util/apiCalls'

const defaultWorkouts = [{ _id: "1", workoutDay: "Monday", workoutType: "Legs", workoutDone: false }]
const defaultExercises = [{ workoutId: "1", _id: 11, move: "Pushups", reps: "3x10-15", link: "https://www.youtube.com/watch?v=Ee1YkE1jlyo", image: "https://i.ytimg.com/vi/Ee1YkE1jlyo/hqdefault.jpg", completed: false, }]
const WorkoutsContext = createContext();
const DispatchContext = createContext();

export function useWorkouts() {
    return useContext(WorkoutsContext)
}

export function useDispatch() {
    return useContext(DispatchContext)
}

export function WorkoutsProvider({ children }) {
    const [workouts, dispatchWorkout] = useLocalStorageReducer("workouts", defaultWorkouts, workoutReducer)
    const [exercises, dispatchExercise] = useLocalStorageReducer("exercises", defaultExercises, workoutReducer)

    return (
        <WorkoutsContext.Provider value={{
            workouts,
            exercises,
            getWorkouts,
            postNewWorkout,
            postNewExercise,
            editExercise,
            getWorkoutExercises
        }}>
            <DispatchContext.Provider value={{
                dispatchWorkout,
                dispatchExercise
            }}>
                {children}
            </DispatchContext.Provider>
        </WorkoutsContext.Provider>
    )
}