import React, { useState } from 'react'

const RangeSlider = () => {
    const [range, setRange] = useState(50)

    const handleChange = (e) => {
        console.log(e.target.value)
        setRange(e.target.value)
    }

    return (
        <div>
            <input
                id="default-range"
                type="range"
                min="0"
                max="100"
                value={range}
                onChange={handleChange}
            />
        </div>
    )
}

export default RangeSlider
