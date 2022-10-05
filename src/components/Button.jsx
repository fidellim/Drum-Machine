import React, { useRef, useEffect } from 'react'

const Button = ({ bank }) => {
    const { keyCode, keyTrigger, id, url } = bank

    const sound = useRef()
    const buttonRef = useRef()

    const buttonHandle = () => {
        sound.current = new Audio(url)
        sound.current.play()
    }

    const onKeyDownHandle = (e) => {
        if (e.keyCode === keyCode) {
            sound.current = new Audio(url)
            sound.current.play()
            buttonRef.current.classList.add('bg-black')
            buttonRef.current.classList.remove('bg-lime-800')
        }
    }

    const onKeyUpHandle = (e) => {
        if (e.keyCode === keyCode) {
            buttonRef.current.classList.add('bg-lime-800')
            buttonRef.current.classList.remove('bg-lime-800bg-black')
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onKeyDownHandle)
        window.addEventListener('keyup', onKeyUpHandle)
        return () => {
            window.removeEventListener('keydown', onKeyDownHandle)
            window.removeEventListener('keyup', onKeyUpHandle)
        }
    }, [])

    return (
        <button
            onClick={buttonHandle}
            ref={buttonRef}
            className="active:bg-black bg-lime-800 text-zinc-50 shadow-[rgba(0,0,0,0.15)_3px_3px_0px_0px] w-[50px] h-[50px] rounded-sm"
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
