"use client"
import { useState } from "react"
import ShoppingItem from "./ShoppingItem"
import styles from "../page.module.css"

const Form = () => {
  const [item, setItem] = useState({
    name: "",
    brand: "",
    quantity: 0,
    price: 0,
  })
  const [items, setItems] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setItem((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? Number.parseFloat(value) : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!item.name || !item.brand || item.quantity <= 0 || item.price <= 0) {
      alert("Por favor, complete todos los campos correctamente")
      return
    }
    setItems([...items, item])
    setItem({ name: "", brand: "", quantity: 0, price: 0 })
  }

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          placeholder="Nombre del producto"
          className={styles.input}
        />
        <input
          type="text"
          name="brand"
          value={item.brand}
          onChange={handleChange}
          placeholder="Marca"
          className={styles.input}
        />
        <input
          type="number"
          name="quantity"
          value={item.quantity || ""}
          onChange={handleChange}
          placeholder="Cantidad"
          className={styles.input}
        />
        <input
          type="number"
          name="price"
          value={item.price || ""}
          onChange={handleChange}
          placeholder="Precio"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Agregar
        </button>
      </form>
      <div className={styles.shoppingList}>
        {items.map((value, index) => (
          <ShoppingItem key={index} item={value} index={index} deleteItem={deleteItem} />
        ))}
      </div>
      <div className={styles.total}>
        <h3>Total de la compra: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default Form

