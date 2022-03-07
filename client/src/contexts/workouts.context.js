import React, { createContext, useContext } from 'react'
import workoutReducer from '../reducer/workout.reducer'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'
import axios from 'axios'

const defaultWorkouts = [{ id: "1", workoutDay: "Monday", workoutType: "Legs", workoutDone: false }]
const defaultExercises = [{ workoutId: "1", id: 11, move: "Pushups", reps: "3x10-15", link: "https://www.youtube.com/watch?v=Ee1YkE1jlyo", image: "https://i.ytimg.com/vi/Ee1YkE1jlyo/hqdefault.jpg", completed: false, }]
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

    function getWorkouts() {
        return axios.get('api/workouts')
    }

    function postNewWorkout(workout) {
        return axios.post('api/workouts', workout)
    }

    function postNewExercise(exercise) {
        return axios.post('api/exercises', exercise)
    }

    function getWorkoutExercises(WorkoutId) {
        return axios.get(`api/workouts/exercises/${WorkoutId}`, WorkoutId)
    }


    return (
        <WorkoutsContext.Provider value={{
            workouts,
            exercises,
            getWorkouts,
            postNewWorkout,
            postNewExercise,
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