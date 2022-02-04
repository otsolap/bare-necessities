import React, { memo } from 'react';
import { useDispatch } from '../../contexts/workouts.context';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Workout({ id, completed, workoutType, workoutDay, onViewExercisesClick, onAddExercisesClick }) {
    const { dispatchWorkout } = useDispatch()

    function toggleWorkout(e) {
        e.stopPropagation()
        dispatchWorkout({
            type: "TOGGLE_WORKOUT",
            id: id
        })
    }

    return (
        <Col md={12}>
            <em>Day:</em><p>{workoutDay}</p>
            <em>Type:</em><p>{workoutType}</p>
            <div>
                <Button onClick={onViewExercisesClick}>
                    View Exercises
                </Button>
                <Button onClick={onAddExercisesClick}>
                    Add Exercise
                </Button>
            </div>
            <Form>
                <Form.Check
                    type="switch"
                    id={id}
                    label="Workout Done"
                    checked={completed}
                    onClick={toggleWorkout}
                />
            </Form>
        </Col>
    );
}

export default memo(Workout);