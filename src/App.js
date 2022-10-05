import Button from './components/Button'
import RangeSlider from './components/RangeSlider'
import { bankOne, bankTwo } from './constants'
import { createContext, useEffect, useState } from 'react'
import ToggleSwitch from './components/ToggleSwitch'

const Context = createContext()

const App = () => {
    const [volume, setVolume] = useState(50)
    const [togglePower, setTogglePower] = useState(true)
    const [toggleBank, setToggleBank] = useState(false)
    const [arrOfMusic, setArrayOfMusic] = useState()
    const [name, setName] = useState('')

    useEffect(() => {
        if (!toggleBank) {
            setArrayOfMusic(bankOne)
        } else {
            setArrayOfMusic(bankTwo)
        }
    }, [toggleBank])

    return (
        <>
            <Context.Provider
                value={{
                    volume,
                    setVolume,
                    togglePower,
                    toggleBank,
                    arrOfMusic,
                    setName,
                }}
            >
                <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-darkGreen">
                    <h1 className="font-serif text-4xl py-4 text-darkBlue text-center ">
                        Drum Machine
                    </h1>
                    <main id="drum-machine">
                        <div className="py-4 px-5 rounded-md border-4 border-darkBlue flex flex-col justify-center items-center">
                            <div>
                                <RangeSlider />
                                <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 gap-3">
                                    {arrOfMusic &&
                                        arrOfMusic.map((bank) => (
                                            <Button bank={bank} key={bank.id} />
                                        ))}
                                </div>
                            </div>

                            <div className="flex flex-col  sm:flex-row gap-3 sm:gap-0 w-full h-full justify-center items-center pt-4">
                                <h2
                                    id="display"
                                    className="flex-1 w-full h-full text-center text-lg text-darkBlue"
                                >
                                    {name}
                                </h2>
                                <div className="flex-1 w-full h-full flex flex-col gap-2 justify-center items-end">
                                    <ToggleSwitch
                                        name="Power"
                                        state={togglePower}
                                        setState={setTogglePower}
                                    />
                                    <ToggleSwitch
                                        name="Bank"
                                        state={toggleBank}
                                        setState={setToggleBank}
                                    />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </Context.Provider>
        </>
    )
}

export default App

export { Context }
