import { useState } from "react"
import NavBar from "../components/NavBar/Main"
import styles from "./App.module.css"
import MobileSearch from "../components/NavBar/MobileSearch"

const App = () => {

  const [menu, setMenu] = useState(false)

  return (
    <>
    <NavBar setMenu={setMenu} menu={menu} />
    <div className={styles.search}><MobileSearch /></div>
    </>
  )
}

export default App
