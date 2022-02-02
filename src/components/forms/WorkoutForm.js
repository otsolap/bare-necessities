
import React, { useContext, useRef } from 'react';
import useInputState from '../../hooks/useInputState'
import { DispatchContext } from '../../contexts/workouts.context';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Dates, Types } from '../../util/defaultOptions'


export default function WorkoutForm({ show, handleClose }) {
    const [handleChange, reset] = useInputState("")
    const dispatch = useContext(DispatchContext)
    const dayRef = useRef();
    const typeRef = useRef();

    const dateOptions = Dates.map((date) => {
        return (
            <option key={date} value={date}>
                {date}
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
        e.preventDefault();
        dispatch({
            type: "ADD_WORKOUT",
            workoutDay: dayRef.current.value,
            workoutType: typeRef.current.value
        })
        reset();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form id="workout-form" onSubmit={handleSubmit}>
                <Modal.Header closebutton>
                    <Modal.Title>Add Workout</Modal.Title>
                </Modal.Header>
                <Form.Group controlId="workoutDay">
                    <Form.Label>
                        Day
                    </Form.Label>
                    <Form.Control
                        as="select"
                        custom
                        required
                        controlId="workoutDay"
                        name="workoutDay"
                        ref={dayRef}
                        onChange={handleChange}
                        className='mb-1'
                    />
                    {dateOptions}
                </Form.Group>
                <Form.Group controlId="workoutType">
                    <Form.Label>
                        Workout type
                    </Form.Label>
                    <Form.Control
                        as="select"
                        custom
                        controlId="workoutType"
                        required
                        name="workoutType"
                        ref={typeRef}
                        onChange={handleChange}
                        className="mb-1"
                    />
                    {workoutTypes}
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
