import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('Click to start counting!')

    const handleIncrement = () => {
        setCount(count + 1)
        if (count + 1 === 10) {
            setMessage('You reached 10!')
        }
    }

    const handleReset = () => {
        setCount(0)
        setMessage('Click to start counting!')
    }

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">
                Let's Take An Intentional Pause!
            </h2>
            <p className="text-gray-600 mb-4">{message}</p>
            <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-500 mb-4">{count}</p>
                <button
                    onClick={handleIncrement}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Increment
                </button>
                <button
                    onClick={handleReset}
                    className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter
