
import React, { useRef } from 'react';
import { useDispatch, useWorkouts } from '../../contexts/workouts.context';
import { Days, Types } from '../../util/defaultOptions'
import '../../styles/Workouts.scss'


export default function WorkoutForm({ show, handleClose }) {
    const { dispatchWorkout } = useDispatch()
    const { postNewWorkout } = useWorkouts()
    const dayRef = useRef();
    const typeRef = useRef();

    const dayOptions = Days.map((day) => {
        return (
            <option key={day} value={day}>
                {day}
            </option>
        )
    })

    const workoutTypes = Types.map((type) => {
        return (
            <option key={type} value={type}>
                {type}
            </option>
        )
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newWorkout = {
            workoutDay: dayRef.current.value,
            workoutType: typeRef.current.value
        }

        postNewWorkout(newWorkout).then(res => {
            dispatchWorkout({
                type: "ADD_WORKOUT",
                workoutDay: dayRef.current.value,
                workoutType: typeRef.current.value
            })
        }).catch(error => {
            console.log(error)
        })
        // refactor this to not do handleclose if nothing is dispatched.
        // like there is no new state. Right now it closes even if you can't add new workout
        handleClose()
        // I use this to refresh the page when new Workout has been added.
        window.location.reload()
    }

    return (
        <>
            {show ? (
                <>
                    <div
                        tabIndex="-1"
                        aria-hidden="true"
                        aria-labelledby="workoutModal"
                        className="modal"
                    >
                        <header className="modal-header brand">
                            <h4 className="header-title">Add Workout</h4>
                            <button className="btn-close" onClick={handleClose} aria-label="Hide">X</button>
                        </header>
                        <div className="modal-body">
                            <form id="workout-form" onSubmit={handleSubmit}>
                                <div className="container">
                                    <label for="workoutDay">
                                        Day
                                    </label>
                                    <select
                                        required
                                        id="workoutDay"
                                        name="workoutDay"
                                        ref={dayRef}
                                        className='mb-1 form-input'
                                    >
                                        <option hidden>Choose Day</option>
                                        {dayOptions}
                                    </select>
                                </div>
                                <div className="container">
                                    <label for="workoutType">
                                        Workout type
                                    </label>
                                    <select
                                        id="workoutType"
                                        name="workoutType"
                                        ref={typeRef}
                                        className="mb-1 form-input"
                                    >
                                        <option hidden>Choose Type</option>
                                        {workoutTypes}
                                    </select>
                                </div>
                                <div className="btn-container">
                                    <button
                                        form="workout-form"
                                        variant="success"
                                        className="btn my-4 mx-2"
                                        type="submit"
                                    >
                                        Add Workout
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
