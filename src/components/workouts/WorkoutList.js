import React from 'react';
import { useWorkouts } from '../../contexts/workouts.context';
import Workout from './Workout';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

export default function WorkoutList({ toggleShowExercises }) {
    const { workouts } = useWorkouts()

    if (workouts.length)
        return (
            <Container>
                <Row>
                    {workouts.map((workout, i) => (
                        <React.Fragment key={i}>
                            <Workout
                                {...workout}
                                key={workout.id}
                                toggleShowExercises={toggleShowExercises}
                            />
                        </React.Fragment>
                    ))}
                </Row>
            </Container>
        );
    return null;
}
