import React, { createContext } from 'react'
import workoutReducer from '../reducer/workout.reducer'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'

const initialWorkouts = [
    {
        id: 1,
        workoutDay: "Monday",
        workoutType: "Legs",
        exercises: [{
            id: 11,
            move: "Squat",
            reps: "3 x 10-15",
            link: "",
            image: "",
            completed: false
        }],
        workoutDone: false
    }
]

export const WorkoutsContext = createContext();
export const DispatchContext = createContext();

export function WorkoutsProvider(props) {
    const [workouts, dispatch] = useLocalStorageReducer("workouts", initialWorkouts, workoutReducer)
    return (
        <WorkoutsContext.Provider value={workouts}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </WorkoutsContext.Provider>
    )
}