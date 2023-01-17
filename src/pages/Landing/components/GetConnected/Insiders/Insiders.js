import styles from "./Insiders.module.css";

const Insiders = ({ insider, position }) => {
  const { name, company, role, image } = insider;

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="insiders"></img>
      </div>
      <div className={styles.wrapperText}>
        <div className={styles.name}>
          <p>{name}</p>
        </div>
        <div className={styles.company}>
          <p>{company}</p>
        </div>
        <div className={styles.role}>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Insiders;
