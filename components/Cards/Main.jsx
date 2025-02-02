import Card from "./Card";
import styles from "./main.module.css";
import data from "./cardData.json";

const Cards = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.more}>More by Riyan Ali</span>
          <span className={styles.profile}>View Profile</span>
        </div>
        <div className={styles.cardWrapper}>
        {data.map((value, index) => (
          <Card key={index} data={value} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
