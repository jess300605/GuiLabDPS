"use client"
import styles from "../page.module.css"

const ShoppingItem = ({ item, index, deleteItem }) => {
  return (
    <div className={styles.shoppingItem}>
      <div className={styles.itemInfo}>
        <h3>{item.name}</h3>
        <p>Marca: {item.brand}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio: ${item.price.toFixed(2)}</p>
        <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
      </div>
      <button className={styles.deleteButton} onClick={() => deleteItem(index)}>
        Eliminar
      </button>
    </div>
  )
}

export default ShoppingItem

