import React, { useContext } from 'react';
import { WorkoutsContext } from '../contexts/workouts.context';
import Workout from './Workout';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"


export default function WorkoutList() {
    const workouts = useContext(WorkoutsContext)
    if (workouts.length)
        return (
            <Container>
                <Row>
                    {workouts.map(workout => (
                        <Workout
                            {...workout}
                            key={workout.id}
                        />
                    ))}
                </Row>
            </Container>
        );
    return null;
}
