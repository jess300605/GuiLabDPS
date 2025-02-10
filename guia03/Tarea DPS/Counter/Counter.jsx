"use client"
//SS233210
import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Contador</h2>
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          aria-label="Decrementar"
        >
          -
        </button>
        <span className="text-4xl font-bold" aria-live="polite" aria-atomic="true">
          {count}
        </span>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Incrementar"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter

