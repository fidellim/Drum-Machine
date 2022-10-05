import { useContext } from 'react'
import { Context } from '../App'
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'

const RangeSlider = () => {
    const { volume, setVolume } = useContext(Context)

    const handleChange = (e) => {
        // console.log(e.target.value)
        setVolume(e.target.value)
    }

    return (
        <div className=" flex items-center gap-2">
            {volume > 0 ? (
                <SpeakerWaveIcon className="h-10 text-darkBlue" />
            ) : (
                <SpeakerXMarkIcon className="h-10 text-darkBlue" />
            )}
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
