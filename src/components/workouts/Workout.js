import React, { useContext, memo } from 'react';
import { DispatchContext } from '../../contexts/workouts.context';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Workout({ id, completed, workoutType, workoutDay, viewExercises }) {
    const dispatch = useContext(DispatchContext)

    function toggleExercise(e) {
        e.stopPropagation()
        dispatch({ type: "TOGGLE_EXERCISE", id: id })
    }

    return (
        <Col md={12}>
            <em>Day:</em><p>{workoutDay}</p>
            <em>Type:</em><p>{workoutType}</p>
            <div>
                <Button onClick={viewExercises}>
                    View Workouts
                </Button>
            </div>
            <Form>
                <Form.Check
                    type="switch"
                    id={id}
                    label="Workout Done"
                    checked={completed}
                    onClick={toggleExercise}
                />
            </Form>
        </Col>
    );
}

export default memo(Workout);