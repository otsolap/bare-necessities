import React, { useContext, memo } from 'react';
import { WorkoutsContext, DispatchContext } from '../../contexts/workouts.context';
import Exercise from './Exercise'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


function Workout({ id, completed, workoutType, workoutDay }) {
    const exercises = useContext(WorkoutsContext)
    const dispatch = useContext(DispatchContext)

    const exerciseList = exercises.map(exercise => {
        return (
            <Exercise
                {...exercise}
                key={exercise.id}
            />
        )
    })


    return (
        <Col md={12}>
            <em>Day:</em><p>{workoutDay}</p>
            <em>Type:</em><p>{workoutType}</p>
            <div>

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