import React, { useContext, useRef } from 'react';
import useInputState from '../hooks/useInputState'
import { DispatchContext } from '../contexts/workouts.context';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function ExerciseForm({ defaultWorkoutId }) {
    const [handleChange, reset] = useInputState("")
    const dispatch = useContext(DispatchContext)
    const { moveRef, repsRef, imgRef, linkRef, workoutId } = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_EXERCISE",
            //  workoutId: workoutId.current.value,
            move: moveRef.current.value,
            reps: repsRef.current.value,
            image: imgRef.current.value,
            link: linkRef.current.value,
        })
        reset();
    }

    return (
        <Container>
            <Row>
                <Form onSubmit={handleSubmit}>
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
                    <Button
                        variant="success"
                        className="mt-1"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}
