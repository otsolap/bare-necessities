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
        <div className="columns-1 md:columns-4 my-3">
            <article
                className="card-item bg-primary border border-white text-center">
                <header className="card-item-header">
                    <p><em>Day:</em>{workoutDay}</p>
                    <p> <em>Type:</em>{workoutType}</p>
                </header>
                <div className='card-item-body'>
                    <button className="btn" onClick={onViewExercisesClick}>
                        View Exercises
                    </button>
                    <button className="btn" onClick={onAddExercisesClick}>
                        Add Exercise
                    </button>
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