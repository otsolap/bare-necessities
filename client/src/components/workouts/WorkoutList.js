import React, { useState, useEffect } from 'react';
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
    const [addExerciseModalWorkoutDay, setAddExerciseModalWorkoutDay] = useState()
    const { getWorkouts } = useWorkouts()
    const [workoutItems, setWorkoutItems] = useState([])


    function openAddExerciseModal(workout) {
        toggleShowExerciseForm(true)
        console.log(workout._id)
        setAddExerciseModalWorkoutId(workout._id)
        setAddExerciseModalWorkoutDay(workout.workoutDay)
    }

    useEffect(() => {
        getWorkouts().then(res => {
            setWorkoutItems(res.data)
        }).catch(error => {
            console.log(error)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Container>
                <Row>
                    {workoutItems.map((workout, i) => (
                        <React.Fragment key={i}>
                            <Workout
                                {...workout}
                                key={workout._id}
                                onAddExercisesClick={() => openAddExerciseModal(workout)}
                                onViewExercisesClick={() => setViewExerciseModalWorkoutId(workout._id)}
                            />
                            <ExerciseFormModal
                                key={`ExerciseForm-${workout._id}`}
                                show={showExerciseForm}
                                defaultWorkoutDay={addExerciseModalWorkoutDay}
                                defaultWorkoutId={addExerciseModalWorkoutId}
                                handleClose={() => toggleShowExerciseForm(false)}
                            />
                            <ExercisesModal
                                key={`ExerciseModal-${workout._id}`}
                                workoutId={viewExerciseModalWorkoutId}
                                handleClose={() => setViewExerciseModalWorkoutId()}
                            />
                        </React.Fragment>
                    ))}
                </Row>
            </Container>
        </>
    )
}
