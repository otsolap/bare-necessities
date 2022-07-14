import React, { useState, useEffect } from 'react';
import '../../styles/Workouts.scss';
import { useWorkouts } from '../../contexts/workouts.context'
import ExerciseItem from './ExerciseItem';
import Spinner from '../../util/Spinner'


function ExerciseModal({ show, handleClose, WorkoutDay, WorkoutId }) {
    const { getWorkoutExercises } = useWorkouts()
    const [exerciseItems, setExerciseItems] = useState([])

    useEffect(() => {
        const loadExecises = async () => {
            await getWorkoutExercises(WorkoutId).then(res => {
                setExerciseItems(res.data)
            }).catch(error => {
                console.log(error)
            })
        }

        if (show) {
            loadExecises()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [WorkoutId])

    return (
        <>
            {show ? (
                <>
                    <div
                        tabIndex="-1"
                        aria-hidden="true"
                        aria-labelledby={`${WorkoutId}-exercises`}
                        className="modal"
                    >
                        <header className="mb-1 brand">
                            <h4 className="header-title">Exercises - {WorkoutDay}</h4>
                            <button className="btn-close" onClick={handleClose} aria-label="Hide">X</button>
                        </header>
                        <div className="modal-body">
                            <div className="container">
                                <div className="grid-rows-1">
                                    {exerciseItems.length <= 1 && <Spinner />}
                                    {exerciseItems.map((exercise, i) => (
                                        <React.Fragment key={i}>
                                            <ExerciseItem
                                                {...exercise}
                                                key={exercise._id}
                                            />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default ExerciseModal;