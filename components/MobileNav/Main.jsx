import { useEffect, useState } from "react";
import styles from "../../public/styles/mobileNav.module.css";
import { FaAngleDown, FaAngleUp, FaArrowTrendUp } from "react-icons/fa6";
import { RiGeminiLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { GrArticle } from "react-icons/gr";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

const MobileNav = ({menu, setMenu}) => {
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

  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isHireOpen, setIsHireOpen] = useState(false);

  useEffect(() => {
    if(!menu) {
        setIsExploreOpen(false);
        setIsHireOpen(false);
    }
  }, [menu])

  const handleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
    setIsHireOpen(false)
  }

  const handleHire = () => {
    setIsHireOpen(!isHireOpen);
    setIsExploreOpen(false)
  }

  return (
    <div className={styles.mobile}>
      <div className={styles.main}>
        <ul>
          <li onClick={handleExplore}>
            Explore{!isExploreOpen ? <FaAngleDown /> : <FaAngleUp />}
          </li>
          {isExploreOpen && (
            <span className={styles.options}>
              <ul>
                <li>
                  <FaArrowTrendUp />
                  Popular
                </li>
                <li>
                  <RiGeminiLine />
                  New and Noteworthy
                </li>
                <hr />
                {exploreOptions.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </span>
          )}
          <li onClick={handleHire}>
            Hire a Designer{!isHireOpen ? <FaAngleDown /> : <FaAngleUp />}
          </li>
          {isHireOpen && (
            <span className={styles.options}>
              <ul>
                <li>
                  <IoSearchOutline />
                  Browse Designers
                </li>
                <li>
                  <FiEdit />
                  Submit a Project Brief
                </li>
                <li>
                  <GrArticle />
                  Post a Job
                </li>
                <li>
                  <HiOutlineExclamationCircle />
                  Hire on Dribbble
                </li>
              </ul>
            </span>
          )}
          <li>Find Jobs</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className={styles.backdrop} onClick={() => setMenu(!menu)} ></div>
    </div>
  );
};

export default MobileNav;
