import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import styles from "../../public/styles/navbar.module.css";
import logo from "../../public/images/logo.png";
import Search from "./Search";
import Menu from "./Menu";

const Left = ({setMenu, menu}) => {
  return (
    <div className={styles.left}>
      <div className={styles.logo}>
        {
          menu ? <RxCross2 onClick={() => setMenu(!menu)} /> : <HiOutlineMenuAlt2 onClick={() => setMenu(!menu)} />
        }
        
        <div className={styles.img}>
          <img src={logo} alt="Dribbble Logo" />
        </div>
      </div>
      <Search />
      <Menu />
    </div>
  );
};

export default Left;
