import React, { createContext } from 'react'
import exerciseReducer from '../reducer/exercises.reducer'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'

export const ExercisesContext = createContext();
export const DispatchContext = createContext();

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

export function ExercisesProvider(props) {
    const [exercises, dispatch] = useLocalStorageReducer(
        "exercises",
        defaultExercises,
        exerciseReducer
    )

    return (
        <ExercisesContext.Provider value={exercises}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </ExercisesContext.Provider>
    )
}