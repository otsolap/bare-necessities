import React, { memo } from 'react';
import { useDispatch } from '../../contexts/workouts.context';
import SwitchToggle from '../../util/SwitchToggle';
import '../../styles/Workouts.css'


function Workout({ _id, completed, workoutType, workoutDay, onViewExercisesClick, onAddExercisesClick }) {
    const { dispatchWorkout } = useDispatch()

    function toggleWorkout(e) {
        e.stopPropagation()
        dispatchWorkout({
            type: "TOGGLE_WORKOUT",
            id: _id
        })
    }

    return (
        <div className="columns-1 my-3">
            <article
                className="card-item bg-primary border border-white text-center">
                <header className="card-item-header">
                    <p><em>Day:</em>{workoutDay}</p>
                    <p> <em>Type:</em>{workoutType}</p>
                </header>
                <div className='card-item-body'>
                    <div className="flex flex-col my-2">
                        <button className="btn my-1" onClick={onViewExercisesClick}>
                            View Exercises
                        </button>
                        <button className="btn my-1" onClick={onAddExercisesClick}>
                            Add Exercise
                        </button>
                    </div>
                    <form>
                        <label>
                            Workout Done
                        </label>
                        <SwitchToggle
                            id={_id}
                            checked={completed}
                            onClick={toggleWorkout}
                        />
                    </form>
                </div>
            </article>
        </div>
    );
}

export default memo(Workout);