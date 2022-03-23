import React, { useState, useEffect } from 'react';
import useToggle from '../../hooks/useToggleState'
import ExercisesModal from './ExercisesModal'
import ExerciseFormModal from '../forms/ExerciseFormModal'
import { useWorkouts } from '../../contexts/workouts.context';
import Workout from './Workout';
import Row from "react-bootstrap/Row"

export default function WorkoutList() {
    const [showExerciseForm, toggleShowExerciseForm] = useToggle(false)
    const [showExercises, toggleShowExercises] = useToggle(false)
    const [addExerciseModalWorkoutId, setAddExerciseModalWorkoutId] = useState()
    const [addExerciseModalWorkoutDay, setAddExerciseModalWorkoutDay] = useState()
    const { getWorkouts } = useWorkouts()
    const [workoutItems, setWorkoutItems] = useState([])


    function openAddExerciseModal(workout) {
        toggleShowExerciseForm(true)
        setAddExerciseModalWorkoutId(workout._id)
        setAddExerciseModalWorkoutDay(workout.workoutDay)
    }

    function openViewExerciseModal(workout) {
        toggleShowExercises(true)
        setAddExerciseModalWorkoutId(workout._id)
        setAddExerciseModalWorkoutDay(workout.workoutDay)
    }


    useEffect(() => {
        const loadWorkouts = async () => {
            await getWorkouts().then(res => {
                setWorkoutItems(res.data)
            }).catch(error => {
                console.log(error)
            })
        }

        loadWorkouts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="container">
                <Row>
                    {workoutItems.map((workout, i) => (
                        <React.Fragment key={i}>
                            <Workout
                                {...workout}
                                key={workout._id}
                                onAddExercisesClick={() => openAddExerciseModal(workout)}
                                onViewExercisesClick={() => openViewExerciseModal(workout)}
                            />
                            <ExerciseFormModal
                                key={`ExerciseForm-${workout._id}`}
                                id={`ExerciseForm-${workout._id}`}
                                show={showExerciseForm}
                                WorkoutDay={addExerciseModalWorkoutDay}
                                WorkoutId={addExerciseModalWorkoutId}
                                handleClose={() => toggleShowExerciseForm(false)}
                            />
                            <ExercisesModal
                                show={showExercises}
                                key={`ExerciseModal-${workout._id}`}
                                WorkoutDay={addExerciseModalWorkoutDay}
                                WorkoutId={addExerciseModalWorkoutId}
                                handleClose={() => toggleShowExercises(false)}
                            />
                        </React.Fragment>
                    ))}
                </Row>
            </div>
        </>
    )
}
