import React, { useRef } from "react";
import { useWorkouts, useDispatch } from '../../contexts/workouts.context';


function EditExerciseFormModal({ id, move, reps, image, link, toggleEditForm }) {
    const { dispatchExercise } = useDispatch()
    const { editExercise } = useWorkouts()
    const moveRef = useRef()
    const repsRef = useRef()
    const imgRef = useRef()
    const linkRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();

        const updatedExercise = {
            id: id,
            move: moveRef.current.value,
            reps: repsRef.current.value,
            image: imgRef.current.value,
            link: linkRef.current.value,
        }

        editExercise(id, updatedExercise).then(res => {
            dispatchExercise({
                type: "EDIT_EXERCISE",
                _id: id,
                newMove: moveRef.current.value,
                newReps: repsRef.current.value,
                newImage: imgRef.current.value,
                newLink: linkRef.current.value,
            })
        }).catch(error => {
            console.log(error)
        })

        toggleEditForm();
    }

    return (
        <form
            onSubmit={handleSubmit}>
            <div className="container">
                <label className="mb-1" for="newMove">
                    Move
                </label>
                <input
                    id="newMove"
                    name="newMove"
                    ref={moveRef}
                    defaultValue={move}
                    className='mb-1 form-input'
                />
            </div>
            <div className="container">
                <label className="mb-1" for="newReps">
                    Rep range
                </label>
                <input
                    id="newReps"
                    name="newReps"
                    ref={repsRef}
                    defaultValue={reps}
                    className="mb-1 form-input"
                />
            </div>
            <div className="container">
                <label className="mb-1" for="newExerciseImg">
                    Image
                </label>
                <input
                    id="newExerciseImg"
                    name="newExerciseImg"
                    ref={imgRef}
                    defaultValue={image}
                    className="mb-1 form-input"
                />
            </div>
            <div className="container">
                <label className="mb-1" for="newExerciseLink">
                    Link
                </label>
                <input
                    id="newExerciseLink"
                    name="newExerciseLink"
                    ref={linkRef}
                    defaultValue={link}
                    className="mb-1 form-input"
                />
            </div>
            <div className="container">
                <button
                    variant="outline-success"
                    className="btn mt-3 mb-3"
                    type="submit"
                >
                    Update Exercise
                </button>
            </div>
        </form>
    );
}


export default EditExerciseFormModal;