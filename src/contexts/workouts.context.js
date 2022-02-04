import React, { createContext, useContext } from 'react'
import workoutReducer from '../reducer/workout.reducer'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'

const defaultWorkouts = [{ id: 1, workoutDay: "Monday", workoutType: "Legs", workoutDone: false }]
const defaultExercises = [{ workoutId: 1, id: 11, move: "Pushups", reps: "3x10-15", link: "", image: "", completed: false, }]
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


    function getWorkoutExercises(workoutId) {
        return exercises.filter(exercise => exercise.workoutId === workoutId)
    }


    return (
        <WorkoutsContext.Provider value={{
            workouts,
            exercises,
            getWorkoutExercises,
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