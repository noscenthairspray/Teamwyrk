import { SubHeader } from "../../../../../components/Typography";
import styles from "./BulletPoints.module.css";

const BulletPoints = ({ comparisonData, title }) => {
  const bulletImgUrl =
    title === "TeamWyrk"
      ? "/images/about_page/checkmark.svg"
      : "/images/about_page/cancel.svg";

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SubHeader color="darkBlue">{title}</SubHeader>
      </div>
      <ul className={styles.bulletPoints}>
        <div>
          {comparisonData.slice(0, 3).map((text) => (
            <li key={text} style={{ backgroundImage: `url(${bulletImgUrl})` }}>
              {text}
            </li>
          ))}
        </div>
        <div>
          {comparisonData.slice(3).map((text) => (
            <li key={text} style={{ backgroundImage: `url(${bulletImgUrl})` }}>
              {text}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default BulletPoints;
