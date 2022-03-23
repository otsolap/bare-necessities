import axios from 'axios'

export function getWorkouts() {
    return axios.get('/api/workouts')
}

export function postNewWorkout(workout) {
    return axios.post('/api/workouts', workout)
}

export function postNewExercise(exercise) {
    return axios.post('/api/exercises', exercise)
}

export function editExercise(id, exercise) {
    return axios.put(`/api/exercises/${id}`, exercise)
}

export function getWorkoutExercises(WorkoutId) {
    return axios.get(`/api/workouts/exercises/${WorkoutId}`)
}