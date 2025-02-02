import styles from "./main.module.css"
import { IoMdHeartEmpty } from "react-icons/io";
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
                        <button>Get in touch</button>
                    </div>
                </div>
                <div className={styles.extras}>
                    <h2>We're open for new projects! | Bring your ideas to life 👇️️️️️️</h2>
                    <div>
                    <span>www.riyan.com</span>
                    <span>|</span>
                    <span> info@riyan.com</span>
                    <span>|</span>
                    <span>Telegram</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading