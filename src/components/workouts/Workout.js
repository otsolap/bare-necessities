import React, { useContext, memo } from 'react';
import { WorkoutsContext, DispatchContext } from '../../contexts/workouts.context';
import Exercise from './Exercise'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


function Workout({ id, completed, workoutType, workoutDay }) {
    const exercises = useContext(WorkoutsContext)
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
                {exercises.map(exercise => (
                    <Exercise
                        {...exercise}
                        key={exercise.id}
                    />
                )
                )}
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