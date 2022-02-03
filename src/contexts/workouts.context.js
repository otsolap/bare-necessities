import React, { createContext, useContext } from 'react'
import workoutReducer from '../reducer/workout.reducer'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'

const defaultWorkouts = [
    {
        id: 1,
        workoutDay: "Monday",
        workoutType: "Legs",
        workoutDone: false
    }
]

const defaultExercises = [
    {
        workoutId: 1,
        id: 11,
        move: "Pushups",
        reps: "3x10-15",
        link: "",
        image: "",
        completed: false,
    }
]

export const WorkoutsContext = createContext();
export const DispatchContext = createContext();

export function useWorkouts() {
    return useContext(WorkoutsContext)
}

export function useDispatch() {
    return useContext(DispatchContext)
}

export function WorkoutsProvider(props) {
    const [workouts, dispatchWorkout] = useLocalStorageReducer("workouts", defaultWorkouts, workoutReducer)
    const [exercises, dispatchExercise] = useLocalStorageReducer("exercises", defaultExercises, workoutReducer)

    return (
        <WorkoutsContext.Provider value={{
            workouts,
            exercises
        }}>
            <DispatchContext.Provider value={{
                dispatchWorkout,
                dispatchExercise
            }}>
                {props.children}
            </DispatchContext.Provider>
        </WorkoutsContext.Provider>
    )
}