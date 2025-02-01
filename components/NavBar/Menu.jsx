import styles from "./menu.module.css";
import { FaAngleDown, FaArrowTrendUp } from "react-icons/fa6";
import { RiGeminiLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { GrArticle } from "react-icons/gr";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

const Menu = () => {
  const exploreOptions = [
    "Product Design",
    "Web Design",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Typography",
    "Print",
  ];
  return (
    <nav className={styles.menu}>
      <div className={styles.menuItem}>
        <span className={styles.menuTitle}>
          Explore <FaAngleDown className={styles.icon} />
        </span>
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem}>
            <FaArrowTrendUp />
            Popular
          </div>
          <div className={styles.dropdownItem}>
            <RiGeminiLine />
            New and Noteworthy
          </div>
          <hr className={styles.separator} />
          {exploreOptions.map((value, index) => (
            <div key={index} className={styles.dropdownItem}>
              {value}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.menuItem}>
        <span className={styles.menuTitle}>
          Hire a Designer <FaAngleDown className={styles.icon} />
        </span>
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem}>
            <IoSearchOutline />
            Browse Designers
          </div>
          <div className={styles.dropdownItem}>
            <FiEdit />
            Submit a Project Brief
          </div>
          <div className={styles.dropdownItem}>
            <GrArticle />
            Post a Job
          </div>
          <div className={styles.dropdownItem}>
            <HiOutlineExclamationCircle />
            Hire on Dribbble
          </div>
        </div>
      </div>

      <div className={styles.menuItem}>Find Jobs</div>
      <div className={styles.menuItem}>Blog</div>

    </nav>
  );
};

export default Menu;
