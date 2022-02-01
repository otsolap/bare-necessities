
import React, { useContext, useRef } from 'react';
import useInputState from '../../hooks/useInputState'
import { DispatchContext } from '../../contexts/workouts.context';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function WorkoutForm() {
    const [handleChange, reset] = useInputState("")
    const dispatch = useContext(DispatchContext)
    const dayRef = useRef();
    const typeRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_WORKOUT",
            workoutDay: dayRef.current.value,
            workoutType: typeRef.current.value
        })
        reset();
    }

    return (
        <Modal>
            <Form id="workout-form" onSubmit={handleSubmit}>
                <Modal.Header>
                    <Modal.Title>Add Workout</Modal.Title>
                </Modal.Header>
                <Form.Group controlId="workoutDay">
                    <Form.Label>
                        Day
                    </Form.Label>
                    <Form.Control
                        required
                        controlId="workoutDay"
                        name="workoutDay"
                        ref={dayRef}
                        onChange={handleChange}
                        className='mb-1'
                    />
                </Form.Group>
                <Form.Group controlId="workoutType">
                    <Form.Label>
                        Workout type
                    </Form.Label>
                    <Form.Control
                        controlId="workoutType"
                        required
                        name="workoutType"
                        ref={typeRef}
                        onChange={handleChange}
                        className="mb-1"
                    />
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
