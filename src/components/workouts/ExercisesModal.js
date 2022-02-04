import React, { memo } from 'react';
import { useWorkouts, useDispatch } from '../../contexts/workouts.context';
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function Exercise({ id, workoutId, handleClose }) {
    const { workouts, getWorkoutExercises } = useWorkouts()
    const exercises = getWorkoutExercises(workoutId)
    const { dispatchExercise } = useDispatch()

    function toggleExercise(e) {
        e.stopPropagation()
        dispatchExercise({
            type: "TOGGLE_EXERCISE",
            id: id
        })
    }
    const workout = workoutId ? workouts.find(w => w.id === workoutId) : "Uncategorized"
    return (
        <Modal show={workoutId != null} onHide={handleClose}>
            <Modal.Header closeButton>
                Exercises - {workout.workoutDay}
            </Modal.Header>
            {exercises.map(exercise => (
                <Col key={exercise.id} md={12}>
                    {exercise.image ? <img src={exercise.image} alt={exercise.move} /> : ""}
                    {exercise.link ?
                        <a href={exercise.link}><p><em>Move:</em>{exercise.move}</p></a>
                        : <p><em>Move:</em>{exercise.move}</p>
                    }
                    <p><em>Reps:</em>{exercise.reps}</p>
                    <Form>
                        <Form.Check
                            type="switch"
                            id={exercise.id}
                            checked={exercise.complete}
                            onClick={toggleExercise}
                        />
                    </Form>
                </Col>
            ))}
        </Modal>
    );
}

export default memo(Exercise);