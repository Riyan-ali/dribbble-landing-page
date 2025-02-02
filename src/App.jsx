import { useState } from "react"
import NavBar from "../components/NavBar/Main"
import styles from "./App.module.css"
import MobileSearch from "../components/NavBar/MobileSearch"
import Heading from "../components/Heading/Main"
import VideoFrame from "../components/VideoFrame/Mian"
import Profile from "../components/Profile/Main"
import Cards from "../components/Cards/Main"
import Footer from "../components/Footer/Main"

const App = () => {

  const [menu, setMenu] = useState(false)

  return (
    <>
    <NavBar setMenu={setMenu} menu={menu} />
    <div className={styles.search}><MobileSearch /></div>
    <Heading />
    <VideoFrame />
    <Profile />
    <Cards />
    <Footer />
    </>
  )
}

export default App
