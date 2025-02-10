"use client"
//SS233210
import { useState, useEffect } from "react"

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState("")
  const [showCredentials, setShowCredentials] = useState(true)

  const validCredentials = {
    username: "SS233210",
    password: "SS233210",
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCredentials(false)
    }, 5000) // Oculta las credenciales después de 5 segundos

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === validCredentials.username && password === validCredentials.password) {
      setIsLoggedIn(true)
      setError("")
    } else {
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.")
    }
  }

  if (isLoggedIn) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">¡Bienvenido, {username}!</h2>
        <p className="text-center">Has iniciado sesión correctamente.</p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
      {showCredentials && (
        <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-sm text-center">
            <strong>Credenciales de prueba:</strong>
            <br />
            Usuario: {validCredentials.username}
            <br />
            Contraseña: {validCredentials.password}
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1 font-medium">
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default LoginForm

