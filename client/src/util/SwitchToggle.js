import React from 'react'

const SwitchToggle = ({ id, checked, toggleExercise }) => {
    return (
        <div className="flex justify-center mb-1">
            <div className="form-check form-switch">
                <input
                    className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain  focus:outline-none cursor-pointer"
                    type="checkbox"
                    role="switch"
                    id={id}
                    checked={checked}
                    onClick={toggleExercise}
                />
                <label
                    className="form-check-label inline-block text-black"
                    for="flexSwitchCheckDefault">
                </label>
            </div>
        </div>
    )
}

export default SwitchToggle