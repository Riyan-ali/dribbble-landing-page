import styles from "../../public/styles/navbar.module.css";
import MobileNav from "../MobileNav/Main";
import Left from "./Left";
import Right from "./Right";

const NavBar = ({setMenu, menu}) => {
  return (
    <>
    <div className={styles.main}>
      <Left setMenu={setMenu} menu={menu} />
      <Right />
    </div>
    {menu && <MobileNav menu={menu} setMenu={setMenu} />}
    </>
  );
};

export default NavBar;
