import React, { useState, useContext } from 'react'
import { Context } from '../App'

const RangeSlider = () => {
    const { volume, setVolume } = useContext(Context)

    const handleChange = (e) => {
        console.log(e.target.value)
        setVolume(e.target.value)
    }

    return (
        <div>
            <input
                id="default-range"
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleChange}
            />
        </div>
    )
}

export default RangeSlider
