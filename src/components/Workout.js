import React, { useContext, memo } from 'react';
import { DispatchContext } from '../contexts/workouts.context';
import Exercise from './Exercise'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


function Workout({ id, completed, workoutType, workoutDay, exercises }) {
    const dispatch = useContext(DispatchContext)
    return (
        <Col md={12}>
            <em>Day:</em><p>{workoutDay}</p>
            <em>Type:</em><p>{workoutType}</p>
            <div>
                {exercises.map(exercise => (
                    <Exercise
                        {...exercise}
                        key={exercise.id}
                    />
                ))}
            </div>
            <Form>
                <Form.Check
                    type="switch"
                    id={id}
                    label="Workout Done"
                    checked={completed}
                    onClick={() => dispatch({ type: "TOGGLE_EXERCISE", id: id })}
                />
            </Form>
        </Col>
    );
}

export default memo(Workout);