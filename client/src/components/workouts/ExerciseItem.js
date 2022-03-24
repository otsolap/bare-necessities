import React, { memo } from 'react';
import { useDispatch } from '../../contexts/workouts.context'
import useToggle from '../../hooks/useToggleState';
import '../../styles/Workouts.css';
import EditExerciseFormModal from '../forms/EditExerciseFormModal'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import SwitchToggle from '../../util/SwitchToggle';


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
        <div
            className="columns-1 border-b border-white mb-2"
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
                    <article className="exercise-item bg-primary">
                        <header className="exercise-item-header">
                            {image ? <div className="border border-white"><Image fluid src={image} alt={move} /> </div> : ""}
                            <p><em>Move: </em> {link ? <a href={link} rel="noopener noreferrer" target="_blank">{move} </a> : <span>{move} </span>}</p>
                            <p><em>Reps: </em>{reps}</p>
                        </header>
                        <div className="exercise-item-body">
                            <form>
                                <label>
                                    Exercise Done
                                </label>
                                <SwitchToggle
                                    id={_id}
                                    checked={completed}
                                    onClick={toggleExercise}
                                />
                            </form>
                            <div className="container">
                            </div>
                            <button onClick={toggle}> Edit Exercise </button>
                        </div>
                    </article>
                </>
            )}
        </div>
    );
}

export default memo(Exercise)