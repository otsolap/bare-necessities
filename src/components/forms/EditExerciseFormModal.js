import React, { useRef } from "react";
import useInputState from '../../hooks/useInputState'
import { useDispatch } from '../../contexts/workouts.context';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function EditExerciseFormModal({ id, move, reps, image, link, toggleEditForm }) {
    const { dispatchExercise } = useDispatch()
    const [handleChange] = useInputState("");
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

    console.log(moveRef.current)

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="newMove">
                <Form.Label>
                    Move
                </Form.Label>
                <Form.Control
                    controlId="newMove"
                    name="newMove"
                    ref={moveRef}
                    placeholder={move}
                    onChange={handleChange}
                    className='mb-1'
                />
            </Form.Group>
            <Form.Group controlId="newReps">
                <Form.Label>
                    Rep range
                </Form.Label>
                <Form.Control
                    controlId="newReps"
                    name="newReps"
                    ref={repsRef}
                    placeholder={reps}
                    onChange={handleChange}
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="newExerciseImg">
                <Form.Label>
                    Image
                </Form.Label>
                <Form.Control
                    controlId="newExerciseImg"
                    name="newExerciseImg"
                    ref={imgRef}
                    placeholder={image}
                    onChange={handleChange}
                    className="mb-1"
                />
            </Form.Group>
            <Form.Group controlId="newExerciseLink">
                <Form.Label>
                    Link
                </Form.Label>
                <Form.Control
                    controlId="newExerciseLink"
                    name="newExerciseLink"
                    ref={linkRef}
                    placeholder={link}
                    onChange={handleChange}
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