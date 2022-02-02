import React, { useContext, memo } from 'react';
import { DispatchContext } from '../../contexts/workouts.context';
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function Exercise({ workoutId, id, complete, move, reps, link, image }) {
    const workouts = useContext(WorkoutsContext)
    const dispatch = useContext(DispatchContext)

    const workout =
        workouts.find(w => w.id === workoutId)

    function toggleExercise(e) {
        e.stopPropagation()
        dispatch({ type: "TOGGLE_EXERCISE", id: id })
    }

    return (
        <Modal show={workoutId != null}>
            <Modal.Header closebutton>
                Exercises - {workout.workoutDay}
            </Modal.Header>
            {exercises.map(exercise => (
                <Col md={12}>
                    {exercise.image ? <img src={exercise.image} alt={exercise.move} /> : ""}
                    {link ?
                        <a href={exercise.link}><p><em>Move:</em>{exercise.move}</p></a>
                        : <p><em>Move:</em>{exercise.move}</p>
                    }
                    <p><em>Reps:</em>{exercise.reps}</p>
                    <Form>
                        <Form.Check
                            type="switch"
                            id={exercise.id}
                            label="Exercise Done"
                            checked={exercise.complete}
                            onClick={toggleExercise}
                        />
                    </Form>
                </Col>
            ))}
        </Modal>
    );
}

export default memo(Exercise);