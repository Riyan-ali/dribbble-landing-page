import Card from "./Card";
import styles from "./main.module.css";
import more1 from "../../public/images/more1.png"
import more2 from "../../public/images/more2.png"
import more3 from "../../public/images/more3.png"
import more4 from "../../public/images/more4.png"

const Cards = () => {

  const cardData = [
    {
        name: "EqtyLab - AI Platform",
        image: more1
    },
    {
        name: "AI Platform's Onboarding",
        image: more2
    },
    {
        name: "GCore AI Platform",
        image: more3
    },
    {
        name: "Core AI - Branding for AI Platform",
        image: more4
    }
]

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.more}>More by Riyan Ali</span>
          <span className={styles.profile}>View Profile</span>
        </div>
        <div className={styles.cardWrapper}>
        {cardData.map((value, index) => (
          <Card key={index} data={value} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
