import React, { useContext, useRef } from 'react';
import useInputState from '../../hooks/useInputState'
import { WorkoutsContext, DispatchContext } from '../../contexts/workouts.context';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function ExerciseForm() {
    const workouts = useContext(WorkoutsContext)
    const [handleChange, reset] = useInputState("")
    const dispatch = useContext(DispatchContext)
    const moveRef = useRef()
    const repsRef = useRef()
    const imgRef = useRef()
    const linkRef = useRef()
    const workoutIdRef = useRef()

    function handleSubmit(e) {
        //   e.stopPropagation()
        e.preventDefault();
        dispatch({
            type: "ADD_EXERCISE",
            move: moveRef.current.value,
            reps: repsRef.current.value,
            image: imgRef.current.value,
            link: linkRef.current.value,
            workoutId: workoutIdRef.current.value
        })
        reset();
    }

    return (
        <Container>
            <Row>
                <Form
                    onSubmit={handleSubmit}>
                    <Form.Label>
                        Add Exercise
                    </Form.Label>
                    <Form.Group controlId="move">
                        <Form.Label>
                            Move
                        </Form.Label>
                        <Form.Control
                            required
                            controlId="move"
                            name="move"
                            ref={moveRef}
                            onChange={handleChange}
                            className='mb-1'
                        />
                    </Form.Group>
                    <Form.Group controlId="reps">
                        <Form.Label>
                            Rep range
                        </Form.Label>
                        <Form.Control
                            required
                            controlId="reps"
                            name="reps"
                            ref={repsRef}
                            onChange={handleChange}
                            className="mb-1"
                        />
                    </Form.Group>
                    <Form.Group controlId="exerciseImg">
                        <Form.Label>
                            Image
                        </Form.Label>
                        <Form.Control
                            controlId="exerciseImg"
                            name="exerciseImg"
                            ref={imgRef}
                            onChange={handleChange}
                            className="mb-1"
                        />
                    </Form.Group>
                    <Form.Group controlId="exerciseLink">
                        <Form.Label>
                            Link
                        </Form.Label>
                        <Form.Control
                            controlId="exerciseLink"
                            name="exerciseLink"
                            ref={linkRef}
                            onChange={handleChange}
                            className="mb-1"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Workout</Form.Label>
                        <Form.Select
                            ref={workoutIdRef}
                        >
                            {
                                workouts.map(workout => (
                                    <option key={workout.id} value={workout.id}>
                                        {workout.workoutDay}
                                    </option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                    <Button
                        variant="secondary"
                        className="mt-1 mb-3"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}
