import React, { useContext, memo } from 'react';
import { DispatchContext } from '../contexts/workouts.context';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function Workout({ id, completed, workoutType, workoutDay }) {
    const dispatch = useContext(DispatchContext)
    return (
        <Col md={12}>
            <p>{workoutDay}</p>
            <p>{workoutType}</p>
            <Form>
                <Form.Check
                    type="switch"
                    id={id}
                    label="Workout Done"
                    checked={completed}
                    onClick={() => dispatch({ type: "TOGGLE", id: id })}
                />
            </Form>
        </Col>
    );
}

export default memo(Workout);