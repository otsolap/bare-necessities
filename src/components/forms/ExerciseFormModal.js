import React, { useRef } from 'react';
import { useWorkouts, useDispatch } from '../../contexts/workouts.context';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import '../../styles/Workouts.css'

export default function ExerciseForm({ show, handleClose, defaultWorkoutId }) {
    const { workouts } = useWorkouts()
    const { dispatchExercise } = useDispatch()
    const moveRef = useRef()
    const repsRef = useRef()
    const imgRef = useRef()
    const linkRef = useRef()
    const workoutIdRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        dispatchExercise({
            type: "ADD_EXERCISE",
            move: moveRef.current.value,
            reps: repsRef.current.value,
            image: imgRef.current.value,
            link: linkRef.current.value,
            workoutId: workoutIdRef.current.value
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
                <Form
                    onSubmit={handleSubmit}>
                    <Form.Group controlId="move">
                        <Form.Label>
                            Move
                        </Form.Label>
                        <Form.Control
                            required
                            controlId="move"
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
                            controlId="reps"
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
                            controlId="exerciseImg"
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
                            controlId="exerciseLink"
                            name="exerciseLink"
                            ref={linkRef}
                            className="mb-1"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Workout</Form.Label>
                        <Form.Select
                            defaultValue={defaultWorkoutId}
                            required
                            ref={workoutIdRef}
                        >
                            {
                                workouts.map(workout => (
                                    <option key={workout.id} value={workout.id}>
                                        {workout.workoutDay}
                                    </option>
                                ))
                            }
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
