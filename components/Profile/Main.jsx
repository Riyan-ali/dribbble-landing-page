import styles from "./main.module.css";
import profileImage from "../../public/images/profile.png";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <hr className={styles.line} />
          <div className={styles.image}>
            <img src="/images/profile.png" alt="Profile Image" />
          </div>
          <hr className={styles.line} />
        </div>
        <div className={styles.info}>
          <h2>Riyan Ali</h2>
          <p>- We Design Products, Interfaces and Brands</p>
          <button>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
