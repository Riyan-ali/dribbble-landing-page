import styles from "./main.module.css"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import profileImage from "../../public/images/profile.png"

const Heading = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2>Landing Page for AI hardware provider</h2>
                <div className={styles.contact}>
                    <div className={styles.profile}>
                        <div className={styles.image}>
                            <img src={profileImage} alt="Profile" />
                        </div>
                        <div className={styles.info}>
                           <p>Riyan Ali</p>
                           <span className={styles.work}>Available for work</span>
                           <span title="Follow Riyan Ali" className={styles.follow}>Follow</span>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <span><IoMdHeartEmpty /></span>
                        <span><CiBookmark /></span>
                        <span className={styles.mail}><IoMailOutline /></span>
                        <button>Get in touch</button>
                    </div>
                </div>
                <div className={styles.extras}>
                    <h2>We're open for new projects! | Bring your ideas to life 👇️️️️️️</h2>
                    <div>
                        <span>www.riyan.com | info@riyan.com | Telegram</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading