import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from 'uuid'

export default initialWorkouts => {
    const [workouts, setWorkouts] = useLocalStorageState("workouts", initialWorkouts)
    return {
        workouts,
        addWorkout: newWorkout => {
            setWorkouts([...workouts, {
                id: uuidv4(),
                workoutDay: newWorkout.workoutDay,
                workoutType: newWorkout.workoutType,
                // exercises. How do add them here?
                workoutDone: false,
            }])
        },
        toggleWorkout: workoutId => {
            const updatedWorkouts = workouts.map(workout =>
                workout.id === workoutId ? { ...workout, workoutDone: !workout.workoutDone } : workout
            );
            setWorkouts(updatedWorkouts)
        },
    }
}
