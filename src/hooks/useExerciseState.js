import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from 'uuid'

export default initialExercises => {
    const [exercises, setExercises] = useLocalStorageState("exercises", initialExercises)

    return {
        exercises,
        addExercise: newExercise => {
            setExercises([...exercises, {
                id: uuidv4(),
                move: newExercise.move,
                reps: newExercise.reps,
                link: newExercise.link,
                image: newExercise.image,
                completed: false,
                workoutId: newExercise.workoutId
            }])
        },

        getWorkoutExercises: workoutId => {
            return exercises.filter(exercise => exercise.workoutId === workoutId)
        },

        toggleExercise: exerciseId => {
            const updatedExercises = exercises.map(exercise =>
                exercise.id === exerciseId ? { ...exercise, completed: !exercise.completed } : exercise
            );
            setExercises(updatedExercises)
        },
    }
}
