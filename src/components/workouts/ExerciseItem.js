import React, { memo } from 'react';
import { useDispatch } from '../../contexts/workouts.context'
import useToggle from '../../hooks/useToggleState';
import '../../styles/Workouts.css';
import EditExerciseFormModal from '../forms/EditExerciseFormModal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function Exercise({ id, move, reps, image, link, completed }) {
    const { dispatchExercise } = useDispatch()
    const [isEditing, toggle] = useToggle(false)

    function toggleExercise(e) {
        e.stopPropagation()
        dispatchExercise({
            type: "TOGGLE_EXERCISE",
            id: id
        })
        console.log(id)
    }

    return (

        <Col
            className="exercise-column mb-2"
            key={id}
            sm={12}
        >
            {isEditing ? (
                <EditExerciseFormModal
                    move={move}
                    reps={reps}
                    link={link}
                    image={image}
                    id={id}
                    toggleEditForm={toggle}
                />) : (
                <>
                    <div>
                        {image ? <div className="image-container"><Image fluid src={image} alt={move} /> </div> : ""}
                        <em>Move: </em> {link ? <a href={link} rel="noopener noreferrer" target="_blank">{move} </a> : <span>{move} </span>}
                        <p><em>Reps: </em>{reps}</p>
                    </div>
                    <Form>
                        <Form.Check.Label>
                            Exercise Done
                        </Form.Check.Label>
                        <Form.Check
                            className="mb-1"
                            type="switch"
                            id={id}
                            checked={completed}
                            onClick={toggleExercise}
                        />
                    </Form>
                    <Button
                        onClick={toggle}
                    >
                        Edit Exercise
                    </Button>
                </>
            )}
        </Col>
    );
}

export default memo(Exercise)