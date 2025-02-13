import styles from "./page.module.css"
import Form from "./components/Form"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.app}>
        <h1 className={styles.title}>Lista de Compras</h1>
        <Form />
      </div>
    </main>
  )
}

