import styles from "./BulletPoints.module.css";

const BulletPoints = ({ comparisonData, title }) => {
  const bulletImgUrl =
    title === "TeamWyrk"
      ? "/images/about_page/checkmark.svg"
      : "/images/about_page/cancel.svg";

  return (
    <div>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.bulletContainer}>
        <ul className={styles.bulletPoints}>
          {comparisonData.map((text) => (
            <li key={text} style={{ backgroundImage: `url(${bulletImgUrl})` }}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BulletPoints;
