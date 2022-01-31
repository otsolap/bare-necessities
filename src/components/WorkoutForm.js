
import React, { useContext, useRef } from 'react';
import ExerciseForm from './ExerciseForm';
import useInputState from '../hooks/useInputState'
import { DispatchContext } from '../contexts/workouts.context';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function WorkoutForm() {
    const [handleChange, reset] = useInputState("")
    const dispatch = useContext(DispatchContext)
    const { dayRef, typeRef } = useRef();

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
        <Container>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>
                        Add Workout
                    </Form.Label>
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
                    <ExerciseForm />
                    <Button
                        variant="success"
                        className="mt-1"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}
