
import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState'
import { DispatchContext } from '../contexts/workouts.context';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function WorkoutForm() {
    const [value, handleChange, reset] = useInputState("")
    const dispatch = useContext(DispatchContext)

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "ADD",
            workoutDay: value,
            workoutType: value
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
                    <Form.Group>
                        <Form.Label>
                            Day
                        </Form.Label>
                        <Form.Control
                            required
                            controlId="workoutDay"
                            name="workoutDay"
                            value={value}
                            onChange={handleChange}
                            className='mb-1'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Workout type
                        </Form.Label>
                        <Form.Control
                            controlId="workoutType"
                            required
                            name="workoutType"
                            value={value}
                            onChange={handleChange}
                            className="mb-1"
                        />
                    </Form.Group>
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
