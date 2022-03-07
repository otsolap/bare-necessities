import React, { memo } from 'react';
import { useDispatch } from '../../contexts/workouts.context';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/Workouts.css'


function Workout({ _id, completed, workoutType, workoutDay, onViewExercisesClick, onAddExercisesClick }) {
    const { dispatchWorkout } = useDispatch()

    function toggleWorkout(e) {
        e.stopPropagation()
        dispatchWorkout({
            type: "TOGGLE_WORKOUT",
            id: _id
        })
    }

    return (
        <Col sm={12} md={4} className="my-3">
            <Card
                className="workout-card text-center">
                <Card.Header>
                    <Card.Text><em>Day:</em>{workoutDay}</Card.Text>
                    <Card.Text> <em>Type:</em>{workoutType}</Card.Text>
                </Card.Header>
                <Card.Body>
                    <Button variant="light" onClick={onViewExercisesClick}>
                        View Exercises
                    </Button>
                    <Button variant="outline-light" onClick={onAddExercisesClick}>
                        Add Exercise
                    </Button>
                    <Form>
                        <Form.Check.Label>
                            Workout Done
                        </Form.Check.Label>
                        <Form.Check
                            type="switch"
                            id={_id}
                            checked={completed}
                            onClick={toggleWorkout}
                        />
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default memo(Workout);