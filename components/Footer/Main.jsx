import styles from "./main.module.css";
import logo from "../../public/images/logo.png";
import { FaTwitter, FaInstagram, FaFacebook, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  const menu = [
    "For designers",
    "Hire talent",
    "Inspiration",
    "Advertising",
    "Blog",
    "About",
    "Careers",
    "Support",
  ];

  const bottomMenu = ["Jobs","Designers","Freelancers","Tags","Places","Resources"]

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <img src={logo} alt="Dribbble Logo" />
          </div>
          <div className={styles.menus}>
            {
                menu.map((data, index) => (
                    <span key={index}>{data}</span>
                ))
            }
          </div>
          <div className={styles.socials}>
            <span><FaTwitter /></span>
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
            <span><FaPinterestP /></span>
          </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.terms}>
                <span>© 2025 Dribbble</span>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Cookies</span>
            </div>
            <div className={styles.bottomMenu}>
                {
                    bottomMenu.map((data, index) => (
                        <span key={index}>{data}</span>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
