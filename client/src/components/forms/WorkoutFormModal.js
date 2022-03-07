
import React, { useRef } from 'react';
import { useDispatch, useWorkouts } from '../../contexts/workouts.context';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import { Days, Types } from '../../util/defaultOptions'
import '../../styles/Workouts.css'


export default function WorkoutForm({ show, handleClose }) {
    const { dispatchWorkout } = useDispatch()
    const { postNewWorkout } = useWorkouts()
    const dayRef = useRef();
    const typeRef = useRef();

    const dayOptions = Days.map((day) => {
        return (
            <option key={day} value={day}>
                {day}
            </option>
        )
    })

    const workoutTypes = Types.map((type) => {
        return (
            <option key={type} value={type}>
                {type}
            </option>
        )
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newWorkout = {
            workoutDay: dayRef.current.value,
            workoutType: typeRef.current.value
        }

        postNewWorkout(newWorkout).then(res => {
            dispatchWorkout({
                type: "ADD_WORKOUT",
                workoutDay: dayRef.current.value,
                workoutType: typeRef.current.value
            })
        }).catch(error => {
            console.log(error)
        })
        // refactor this to not do handleclose if nothing is dispatched.
        // like there is no new state. Right now it closes even if you can't add new workout
        handleClose()
        // I use this to refresh the page when new Workout has been added.
        window.location.reload()
    }

    return (
        <Modal
            fullscreen={'md-down'}
            className="modal-background"
            show={show}>
            <Modal.Header className="brand">
                <Modal.Title className="header-title">Add Workout</Modal.Title>
                <CloseButton onClick={handleClose} variant="white" aria-label="Hide" />
            </Modal.Header>
            <Modal.Body>
                <Form id="workout-form" onSubmit={handleSubmit}>
                    <Form.Group controlId="workoutDay">
                        <Form.Label>
                            Day
                        </Form.Label>
                        <Form.Select
                            required
                            name="workoutDay"
                            ref={dayRef}
                            className='mb-1'
                        >
                            <option hidden>Choose Day</option>
                            {dayOptions}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="workoutType">
                        <Form.Label>
                            Workout type
                        </Form.Label>
                        <Form.Select
                            name="workoutType"
                            ref={typeRef}
                            className="mb-1"
                        >
                            <option hidden>Choose Type</option>
                            {workoutTypes}
                        </Form.Select>
                    </Form.Group>
                </Form>
                <Button
                    form="workout-form"
                    variant="success"
                    className="mt-3 mb-3"
                    type="submit"
                >
                    Add Workout
                </Button>
            </Modal.Body>

        </Modal>
    );
}
