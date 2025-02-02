import { useState } from "react";
import styles from "./main.module.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";

const Card = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={styles.card} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <img src={data.image} alt={data.name} className={styles.cardImage} />
      
      <div className={`${styles.overlay} ${hover ? styles.show : ""}`}>
        <span className={styles.cardName}>{data.name}</span>
        <div className={styles.icons}>
            <span><IoMdHeartEmpty /></span>
            <span><CiBookmark /></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
