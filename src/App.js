import Button from './components/Button'
import RangeSlider from './components/RangeSlider'
import { bankOne, bankTwo } from './constants'
import { createContext, useEffect, useState } from 'react'
import ToggleSwitch from './components/ToggleSwitch'

const Context = createContext()

const App = () => {
    const [volume, setVolume] = useState(50)
    const [togglePower, setTogglePower] = useState(false)
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
                <div className="w-screen h-screen flex flex-col items-center justify-center">
                    <h1 className="font-serif text-4xl py-4">Drum Machine</h1>
                    <main>
                        <div className="py-4 px-5 border-4 border-violet-900 flex flex-col justify-center items-center">
                            <div className="flex gap-3">
                                {arrOfMusic &&
                                    arrOfMusic.map((bank) => (
                                        <Button bank={bank} key={bank.id} />
                                    ))}
                            </div>

                            <h2>{name}</h2>

                            <RangeSlider />
                            <ToggleSwitch
                                name="Power"
                                // setState={() => setTogglePower(!togglePower)}
                                setState={setTogglePower}
                            />
                            <br></br>
                            <ToggleSwitch
                                name="Bank"
                                setState={setToggleBank}
                            />
                        </div>
                    </main>
                </div>
            </Context.Provider>
        </>
    )
}

export default App

export { Context }
