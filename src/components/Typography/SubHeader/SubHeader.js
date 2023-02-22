import styles from "./SubHeader.module.css";

const SubHeader = ({ color, children }) => {
  return (
    <h2 className={`${styles.subHeader} ${styles[`${color}`]}`}>{children}</h2>
  );
};

export default SubHeader;
