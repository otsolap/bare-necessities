import React, { useRef } from 'react';
import { useDispatch, useWorkouts } from '../../contexts/workouts.context';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import '../../styles/Workouts.css'

export default function ExerciseForm({ show, handleClose, WorkoutId, WorkoutDay }) {
    const { dispatchExercise } = useDispatch()
    const { postNewExercise } = useWorkouts()
    const moveRef = useRef()
    const repsRef = useRef()
    const imgRef = useRef()
    const linkRef = useRef()
    const workoutIdRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newExercise = {
            move: moveRef.current.value,
            reps: repsRef.current.value,
            image: imgRef.current.value,
            link: linkRef.current.value,
            workoutId: workoutIdRef.current.value
        }

        postNewExercise(newExercise).then(res => {
            dispatchExercise({
                type: "ADD_EXERCISE",
                move: moveRef.current.value,
                reps: repsRef.current.value,
                image: imgRef.current.value,
                link: linkRef.current.value,
                workoutId: workoutIdRef.current.value
            })
        }).catch(error => {
            console.log(error)
        })
        handleClose()
    }

    return (
        <Modal
            fullscreen={'md-down'}
            className="modal-background"
            show={show}
        >
            <Modal.Header className="mb-1 brand">
                <Modal.Title className="header-title" >Add Exercise</Modal.Title>
                <CloseButton onClick={handleClose} variant="white" aria-label="Hide" />
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}   >
                    <Form.Group controlId="move">
                        <Form.Label>
                            Move
                        </Form.Label>
                        <Form.Control
                            required
                            name="move"
                            ref={moveRef}
                            className='mb-1'
                        />
                    </Form.Group>
                    <Form.Group controlId="reps">
                        <Form.Label>
                            Rep range
                        </Form.Label>
                        <Form.Control
                            required
                            name="reps"
                            ref={repsRef}
                            className="mb-1"
                        />
                    </Form.Group>
                    <Form.Group controlId="exerciseImg">
                        <Form.Label>
                            Image
                        </Form.Label>
                        <Form.Control
                            name="exerciseImg"
                            ref={imgRef}
                            className="mb-1"
                        />
                    </Form.Group>
                    <Form.Group controlId="exerciseLink">
                        <Form.Label>
                            Link
                        </Form.Label>
                        <Form.Control
                            name="exerciseLink"
                            ref={linkRef}
                            className="mb-1"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Workout Day</Form.Label>
                        <Form.Select
                            defaultValue={WorkoutId}
                            ref={workoutIdRef}
                        >
                            <option key={WorkoutId} value={WorkoutId}>
                                {WorkoutDay}
                            </option>
                        </Form.Select>
                    </Form.Group>
                    <Button
                        variant="outline-success"
                        className="mt-3 mb-3"
                        type="submit"
                    >
                        Add Exercise
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
