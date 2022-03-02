import React, { useState } from 'react';
import useToggle from '../../hooks/useToggleState'
import ExercisesModal from './ExercisesModal'
import ExerciseFormModal from '../forms/ExerciseFormModal'
import { useWorkouts } from '../../contexts/workouts.context';
import Workout from './Workout';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

export default function WorkoutList() {
    const [showExerciseForm, toggleShowExerciseForm] = useToggle(false)
    const [viewExerciseModalWorkoutId, setViewExerciseModalWorkoutId] = useState()
    const [addExerciseModalWorkoutId, setAddExerciseModalWorkoutId] = useState()
    const { workouts } = useWorkouts()

    function openAddExerciseModal(workoutId) {
        toggleShowExerciseForm(true)
        setAddExerciseModalWorkoutId(workoutId)
    }

    return (
        <>
            <Container>
                <Row>
                    {workouts.map((workout, i) => (
                        <React.Fragment key={i}>
                            <Workout
                                {...workout}
                                key={workout.id}
                                onAddExercisesClick={() => openAddExerciseModal(workout.id)}
                                onViewExercisesClick={() => setViewExerciseModalWorkoutId(workout.id)}
                            />
                        </React.Fragment>
                    ))}
                </Row>
            </Container>
            <ExerciseFormModal
                show={showExerciseForm}
                defaultWorkoutId={addExerciseModalWorkoutId}
                handleClose={() => toggleShowExerciseForm(false)}
            />
            <ExercisesModal
                workoutId={viewExerciseModalWorkoutId}
                handleClose={() => setViewExerciseModalWorkoutId()}
            />
        </>
    )
}
