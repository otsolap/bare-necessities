import React, { memo } from 'react';
import { useDispatch } from '../../contexts/workouts.context'
import useToggle from '../../hooks/useToggleState';
import '../../styles/Workouts.css';
import EditExerciseFormModal from '../forms/EditExerciseFormModal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Exercise({ _id, move, reps, image, link, completed }) {
    const { dispatchExercise } = useDispatch()
    const [isEditing, toggle] = useToggle(false)

    function toggleExercise(e) {
        e.stopPropagation()
        dispatchExercise({
            type: "TOGGLE_EXERCISE",
            id: _id
        })
    }

    return (

        <Col
            className="exercise-column mb-2"
            key={_id}
            sm={12}
        >
            {isEditing ? (
                <EditExerciseFormModal
                    move={move}
                    reps={reps}
                    link={link}
                    image={image}
                    id={_id}
                    toggleEditForm={toggle}
                />) : (
                <>
                    <Card className="exerciseCard">
                        <Card.Header>
                            {image ? <div className="image-container"><Image fluid src={image} alt={move} /> </div> : ""}
                            <Card.Text><em>Move: </em> {link ? <a href={link} rel="noopener noreferrer" target="_blank">{move} </a> : <span>{move} </span>}</Card.Text>
                            <Card.Text><em>Reps: </em>{reps}</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Check.Label>
                                    Exercise Done
                                </Form.Check.Label>
                                <Form.Check
                                    className="mb-1"
                                    type="switch"
                                    id={_id}
                                    checked={completed}
                                    onClick={toggleExercise}
                                />
                            </Form>
                            <Button
                                onClick={toggle}
                            >
                                Edit Exercise
                            </Button>
                        </Card.Body>
                    </Card>
                </>
            )}
        </Col>
    );
}

export default memo(Exercise)