import React, { useState, useEffect } from 'react';
import '../../styles/Workouts.css';
import { useWorkouts } from '../../contexts/workouts.context'
import ExerciseItem from './ExerciseItem';
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import CloseButton from 'react-bootstrap/CloseButton'
import Spinner from 'react-bootstrap/Spinner'


function ExerciseModal({ show, handleClose, WorkoutDay, WorkoutId }) {
    const { getWorkoutExercises } = useWorkouts()
    const [exerciseItems, setExerciseItems] = useState([])

    useEffect(() => {
        const loadExecises = async () => {
            await getWorkoutExercises(WorkoutId).then(res => {
                setExerciseItems(res.data)
            }).catch(error => {
                console.log(error)
            })
        }

        if (show) {
            loadExecises()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [WorkoutId])

    return (
        <Modal
            fullscreen={'md-down'}
            className="modal-background"
            show={show}
        >
            <Modal.Header className="mb-1 brand">
                <h4 className="header-title">Exercises - {WorkoutDay}</h4>
                <button className="btn-close" onClick={handleClose} aria-label="Hide">X</button>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <Row>
                        {exerciseItems.length <= 1 && <Spinner animation="border" variant="warning" />}
                        {exerciseItems.map((exercise, i) => (
                            <React.Fragment key={i}>
                                <ExerciseItem
                                    {...exercise}
                                    key={exercise._id}
                                />
                            </React.Fragment>
                        ))}
                    </Row>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ExerciseModal;