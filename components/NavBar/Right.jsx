import styles from "../../public/styles/navbar.module.css"

const Right = () => {
  return (
    <div className={styles.right}>
      <button className={styles.signup}>Sign up</button>
      <button className={styles.login}>Log in</button>
    </div>
  )
}

export default Right