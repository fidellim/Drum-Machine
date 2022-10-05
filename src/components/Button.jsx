import { useRef, useEffect, useContext } from 'react'
import { Context } from '../App'

const Button = ({ bank }) => {
    const { volume, togglePower, toggleBank, arrOfMusic, setName } =
        useContext(Context)
    const { keyCode, keyTrigger, id, url } = bank

    const sound = useRef()
    const buttonRef = useRef()

    const buttonHandle = () => {
        console.log(togglePower)
        if (togglePower) {
            sound.current = new Audio(url)
            sound.current.volume = volume / 100
            sound.current.play()
            setName(id)
        }
    }

    const onKeyDownHandle = (e) => {
        console.log(e.keyCode)
        if (e.keyCode === keyCode && togglePower) {
            sound.current = new Audio(url)
            sound.current.volume = volume / 100
            sound.current.play()
            buttonRef.current.classList.add('bg-lightBlue')
            buttonRef.current.classList.remove('bg-darkBlue')
            setName(id)
        }
    }

    const onKeyUpHandle = (e) => {
        if (e.keyCode === keyCode) {
            buttonRef.current.classList.add('bg-darkBlue')
            buttonRef.current.classList.remove('bg-lightBlue')
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onKeyDownHandle)
        window.addEventListener('keyup', onKeyUpHandle)
        return () => {
            window.removeEventListener('keydown', onKeyDownHandle)
            window.removeEventListener('keyup', onKeyUpHandle)
        }
    }, [volume, togglePower, toggleBank, arrOfMusic])

    return (
        <button
            onClick={buttonHandle}
            ref={buttonRef}
            className="active:bg-lightBlue bg-darkBlue shadow-[rgba(0,0,0,0.15)_3px_3px_0px_0px] w-[75px] h-[75px] rounded-md"
        >
            <div>
                {keyTrigger} <audio src={url} />
            </div>
        </button>
    )
}

export default Button

// keyCode: 81,
// keyTrigger: 'Q',
// id: 'Heater-1',
// url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
