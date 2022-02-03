
import React, { useContext, useRef } from 'react';
import useInputState from '../../hooks/useInputState'
import { DispatchContext } from '../../contexts/workouts.context';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Days, Types } from '../../util/defaultOptions'


export default function WorkoutForm({ show, handleClose }) {
    const [handleChange] = useInputState("")
    const dispatch = useContext(DispatchContext)
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

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({
            type: "ADD_WORKOUT",
            workoutDay: dayRef.current.value,
            workoutType: typeRef.current.value
        })
        // refactor this to not do handleclose if nothing is dispatched.
        // like there is no new state. Right now it closes even if you can't add new workout
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form id="workout-form" onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Workout</Modal.Title>
                </Modal.Header>
                <Form.Group controlId="workoutDay">
                    <Form.Label>
                        Day
                    </Form.Label>
                    <Form.Select
                        required
                        controlId="workoutDay"
                        name="workoutDay"
                        ref={dayRef}
                        onChange={handleChange}
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
                        controlId="workoutType"
                        name="workoutType"
                        ref={typeRef}
                        onChange={handleChange}
                        className="mb-1"
                    >
                        <option hidden>Choose Type</option>
                        {workoutTypes}
                    </Form.Select>
                </Form.Group>
            </Form>
            <div>
                <Button
                    form="workout-form"
                    variant="success"
                    className="mt-1"
                    type="submit"
                >
                    Submit
                </Button>
            </div>
        </Modal>
    );
}
