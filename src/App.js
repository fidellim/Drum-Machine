import Button from './components/Button'
import RangeSlider from './components/RangeSlider'
import { bankOne } from './constants'

const App = () => {
    return (
        <>
            <main className="w-screen h-screen flex justify-center items-center">
                <div className="flex gap-3">
                    {bankOne.map((bank) => (
                        <Button bank={bank} key={bank.id} />
                    ))}
                </div>

                <RangeSlider />
            </main>
        </>
    )
}

export default App
