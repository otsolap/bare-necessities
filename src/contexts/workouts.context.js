import React, { createContext } from 'react'
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

export const WorkoutsContext = createContext();
export const DispatchContext = createContext();

export function WorkoutsProvider(props) {
    const [workouts, dispatch] = useLocalStorageReducer(
        "workouts",
        defaultWorkouts,
        workoutReducer
    )

    return (
        <WorkoutsContext.Provider value={workouts}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </WorkoutsContext.Provider>
    )
}