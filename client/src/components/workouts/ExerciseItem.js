import React, { memo } from 'react';
import { useDispatch } from '../../contexts/workouts.context'
import useToggle from '../../hooks/useToggleState';
import EditExerciseFormModal from '../forms/EditExerciseFormModal'
import SwitchToggle from '../../util/SwitchToggle';
import '../../styles/Workouts.css';


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
                    <article className="card-item bg-primary">
                        <header className="card-item-header">
                            {image ? <div className="border border-white"><img className="object-cover  w-full" fluid src={image} alt={move} /> </div> : ""}
                            <p><em>Move: </em> {link ? <a href={link} rel="noopener noreferrer" target="_blank">{move} </a> : <span>{move} </span>}</p>
                            <p><em>Reps: </em>{reps}</p>
                        </header>
                        <div className="card-item-body">
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
                                <button className="btn-inverse" onClick={toggle}> Edit Exercise </button>
                            </div>
                        </div>
                    </article>
                </>
            )}
        </div>
    );
}

export default memo(Exercise)