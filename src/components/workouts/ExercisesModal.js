import React, { memo } from 'react';
import { useWorkouts, useDispatch } from '../../contexts/workouts.context';
import Modal from 'react-bootstrap/Modal'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import CloseButton from 'react-bootstrap/CloseButton'
import Image from 'react-bootstrap/Image'
import '../../styles/Workouts.css'

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
        <Modal
            fullscreen={'md-down'}
            className="modal-background"
            show={workoutId != null}>
            <Modal.Header className="mb-1 brand">
                <Modal.Title className="header-title">Exercises - {workout.workoutDay}</Modal.Title>
                <CloseButton onClick={handleClose} variant="white" aria-label="Hide" />
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        {exercises.map(exercise => (
                            <Col
                                className="exercise-column mb-2"
                                key={exercise.id}
                                sm={12}>
                                {exercise.image ? <div className="image-container"><Image fluid src={exercise.image} alt={exercise.move} /> </div> : ""}
                                <em>Move: </em> {exercise.link ? <a href={exercise.link}>{exercise.move} </a> : <span>{exercise.move} </span>}
                                <p><em>Reps: </em>{exercise.reps}</p>
                                <Form>
                                    <Form.Check.Label>
                                        Exercise Done
                                    </Form.Check.Label>
                                    <Form.Check
                                        className="mb-1"
                                        type="switch"
                                        id={exercise.id}
                                        checked={exercise.complete}
                                        onClick={toggleExercise}
                                    />
                                </Form>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Modal.Body>

        </Modal>
    );
}

export default memo(Exercise);