import React, { useContext, memo } from 'react';
import { DispatchContext } from '../contexts/workouts.context';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function Exercise({ id, complete, move, reps, link, image }) {
    const dispatch = useContext(DispatchContext)
    return (
        <Col md={12}>
            {image.length ? <img src={image} alt={move} /> : ""}
            {link ?
                <a href={link}><p><em>Move:</em>{move}</p></a>
                : <p><em>Move:</em>{move}</p>
            }
            <p><em>Reps:</em>{reps}</p>
            <Form>
                <Form.Check
                    type="switch"
                    id={id}
                    label="Exercise Done"
                    checked={complete}
                    onClick={() => dispatch({ type: "TOGGLE_EXERCISE", id: id })}
                />
            </Form>
        </Col>
    );
}

export default memo(Exercise);