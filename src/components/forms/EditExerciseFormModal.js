import React, { useRef } from "react";
import { useDispatch } from '../../contexts/workouts.context';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function EditExerciseFormModal({ id, move, reps, image, link, toggleEditForm }) {
    const { dispatchExercise } = useDispatch()
    const moveRef = useRef()
    const repsRef = useRef()
    const imgRef = useRef()
    const linkRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();
        dispatchExercise({
            type: "EDIT_EXERCISE",
            id: id,
            newMove: moveRef.current.value,
            newReps: repsRef.current.value,
            newImage: imgRef.current.value,
            newLink: linkRef.current.value,
        })
        toggleEditForm();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="newMove">
                <Form.Label>
                    Move
                </Form.Label>
                <Form.Control
                    required
                    controlId="newMove"
                    name="newMove"
                    ref={moveRef}
                    placeholder={move}
                    className='mb-1'
                />
            </Form.Group>
            <Form.Group controlId="newReps">
                <Form.Label>
                    Rep range
                </Form.Label>
                <Form.Control
                    required
                    controlId="newReps"
                    name="newReps"
                    ref={repsRef}
                    placeholder={reps}
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="newExerciseImg">
                <Form.Label>
                    Image
                </Form.Label>
                <Form.Control
                    required
                    controlId="newExerciseImg"
                    name="newExerciseImg"
                    ref={imgRef}
                    placeholder={image}
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="newExerciseLink">
                <Form.Label>
                    Link
                </Form.Label>
                <Form.Control
                    required
                    controlId="newExerciseLink"
                    name="newExerciseLink"
                    ref={linkRef}
                    placeholder={link}
                    className="mb-1"
                />
            </Form.Group>
            <Button
                variant="outline-success"
                className="mt-3 mb-3"
                type="submit"
            >
                Update Exercise
            </Button>
        </Form>
    );
}


export default EditExerciseFormModal;