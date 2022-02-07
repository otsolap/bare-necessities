import React from 'react';
import '../../styles/Workouts.css';
import { useWorkouts } from '../../contexts/workouts.context'
import ExerciseItem from './ExerciseItem';
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"
import CloseButton from 'react-bootstrap/CloseButton'

function ExerciseModal({ id, workoutId, handleClose }) {
    const { workouts, getWorkoutExercises } = useWorkouts()
    const exercises = getWorkoutExercises(workoutId)
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
                        {exercises.map((exercise, i) => (
                            <React.Fragment key={i}>
                                <ExerciseItem
                                    {...exercise}
                                    key={exercise.id}
                                />
                            </React.Fragment>
                        ))}
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default ExerciseModal;