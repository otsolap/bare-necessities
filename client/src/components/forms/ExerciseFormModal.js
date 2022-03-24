import React, { useRef } from 'react';
import { useDispatch, useWorkouts } from '../../contexts/workouts.context';
import '../../styles/Workouts.css'

export default function ExerciseForm({ show, handleClose, WorkoutId, WorkoutDay, id }) {
    const { dispatchExercise } = useDispatch()
    const { postNewExercise } = useWorkouts()
    const moveRef = useRef()
    const repsRef = useRef()
    const imgRef = useRef()
    const linkRef = useRef()
    const workoutIdRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newExercise = {
            move: moveRef.current.value,
            reps: repsRef.current.value,
            image: imgRef.current.value,
            link: linkRef.current.value,
            workoutId: workoutIdRef.current.value
        }

        postNewExercise(newExercise).then(res => {
            dispatchExercise({
                type: "ADD_EXERCISE",
                move: moveRef.current.value,
                reps: repsRef.current.value,
                image: imgRef.current.value,
                link: linkRef.current.value,
                workoutId: workoutIdRef.current.value
            })
        }).catch(error => {
            console.log(error)
        })
        handleClose()
    }

    return (
        <>
            {show ? (
                <>
                    <div
                        id={id}
                        tabIndex="-1"
                        aria-hidden="true"
                        aria-labelledby={id}
                        className="modal"
                    >
                        <header className="modal-header mb-1 brand">
                            <button className="btn-close" onClick={handleClose} aria-label="hide">X</button>
                            <h4 className="header-title" >Add Exercise for {WorkoutDay}</h4>
                        </header>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}   >
                                <div className="container">
                                    <label className="mb-1" for="move">
                                        Move
                                    </label>
                                    <input
                                        className="mb-1 form-input"
                                        required
                                        id="move"
                                        name="move"
                                        ref={moveRef}
                                    />
                                </div>
                                <div className="container">
                                    <label className="mb-1" for="reps">
                                        Rep range
                                    </label>
                                    <input
                                        className="mb-1 form-input"
                                        required
                                        id="reps"
                                        name="reps"
                                        ref={repsRef}
                                    />
                                </div>
                                <div className="container">
                                    <label className="mb-1" for="exerciseImg">
                                        Image
                                    </label>
                                    <input
                                        className="mb-1 form-input"
                                        id="exerciseImg"
                                        name="exerciseImg"
                                        ref={imgRef}
                                    />
                                </div>
                                <div className="container">
                                    <label className="mb-1" for="exerciseLink">
                                        Link
                                    </label>
                                    <input
                                        className="mb-1 form-input"
                                        name="exerciseLink"
                                        ref={linkRef}
                                    />
                                </div>
                                <div className="container">
                                    <label className="mb-1" for="workoutDay">
                                        Workout Day
                                    </label>
                                    <select
                                        id="workoutDay"
                                        defaultValue={WorkoutId}
                                        ref={workoutIdRef}
                                        className="mb-1 form-input"
                                    >
                                        <option key={WorkoutId} value={WorkoutId}>
                                            {WorkoutDay}
                                        </option>
                                    </select>
                                </div>
                                <div className="container">
                                    <button
                                        className="btn-inverse mt-3 mb-3"
                                        type="submit"
                                    >
                                        Add Exercise
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : null}
        </>

    );
}
