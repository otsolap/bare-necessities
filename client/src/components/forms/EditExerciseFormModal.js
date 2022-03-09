import React, { useRef } from "react";
import { useDispatch } from '../../contexts/workouts.context';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function EditExerciseFormModal({ _id, move, reps, image, link, toggleEditForm }) {
    const { dispatchExercise } = useDispatch()
    const moveRef = useRef()
    const repsRef = useRef()
    const imgRef = useRef()
    const linkRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();
        dispatchExercise({
            type: "EDIT_EXERCISE",
            id: _id,
            newMove: moveRef.current.value,
            newReps: repsRef.current.value,
            newImage: imgRef.current.value,
            newLink: linkRef.current.value,
        })
        toggleEditForm();
    }

    return (
        <Form
            onSubmit={handleSubmit}>
            <Form.Group controlId="newMove">
                <Form.Label>
                    Move
                </Form.Label>
                <Form.Control
                    name="newMove"
                    ref={moveRef}
                    defaultValue={move}
                    className='mb-1'
                />
            </Form.Group>
            <Form.Group controlId="newReps">
                <Form.Label>
                    Rep range
                </Form.Label>
                <Form.Control
                    name="newReps"
                    ref={repsRef}
                    defaultValue={reps}
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="newExerciseImg">
                <Form.Label>
                    Image
                </Form.Label>
                <Form.Control
                    name="newExerciseImg"
                    ref={imgRef}
                    defaultValue={image}
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="newExerciseLink">
                <Form.Label>
                    Link
                </Form.Label>
                <Form.Control
                    name="newExerciseLink"
                    ref={linkRef}
                    defaultValue={link}
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