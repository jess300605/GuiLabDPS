"use client"
//SS233210

import { useState } from "react"

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("")
  const [fromUnit, setFromUnit] = useState("celsius")
  const [result, setResult] = useState("")

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value)
  }

  const handleUnitChange = (e) => {
    setFromUnit(e.target.value)
  }

  const convertTemperature = () => {
    const temp = Number.parseFloat(temperature)
    if (isNaN(temp)) {
      setResult("Por favor, ingrese un número válido")
      return
    }

    let convertedTemp
    if (fromUnit === "celsius") {
      convertedTemp = (temp * 9) / 5 + 32
      setResult(`${temp}°C es igual a ${convertedTemp.toFixed(2)}°F`)
    } else {
      convertedTemp = ((temp - 32) * 5) / 9
      setResult(`${temp}°F es igual a ${convertedTemp.toFixed(2)}°C`)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Conversor de Temperatura</h2>
      <div className="mb-4">
        <input
          type="number"
          value={temperature}
          onChange={handleTemperatureChange}
          placeholder="Ingrese la temperatura"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <select value={fromUnit} onChange={handleUnitChange} className="w-full px-3 py-2 border rounded-md">
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <button
        onClick={convertTemperature}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Convertir
      </button>
      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md">
          <p className="text-center">{result}</p>
        </div>
      )}
    </div>
  )
}

export default TemperatureConverter

