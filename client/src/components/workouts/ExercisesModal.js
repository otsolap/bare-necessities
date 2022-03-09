import React, { useState, useEffect } from 'react';
import '../../styles/Workouts.css';
import { useWorkouts } from '../../contexts/workouts.context'
import ExerciseItem from './ExerciseItem';
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"
import CloseButton from 'react-bootstrap/CloseButton'


function ExerciseModal({ show, handleClose, WorkoutDay, WorkoutId }) {
    const { getWorkoutExercises } = useWorkouts()
    const [exerciseItems, setExerciseItems] = useState([])

    useEffect(() => {
        const loadExecises = async () => {
            await getWorkoutExercises(WorkoutId).then(res => {
                console.log(res)
                setExerciseItems(res.data)
                console.log(res.data)
            }).catch(error => {
                console.log(error)
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        //   if (show === true) {
        loadExecises()
        //  }
    }, [WorkoutId])



    return (
        <Modal
            fullscreen={'md-down'}
            className="modal-background"
            show={show}
        >
            <Modal.Header className="mb-1 brand">
                <Modal.Title className="header-title">Exercises - {WorkoutDay}</Modal.Title>
                <CloseButton onClick={handleClose} variant="white" aria-label="Hide" />
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        {exerciseItems.map((exercise, i) => (
                            <React.Fragment key={i}>
                                <ExerciseItem
                                    {...exercise}
                                    key={exercise._id}
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