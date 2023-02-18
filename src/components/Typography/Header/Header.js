import styles from "./Header.module.css";

const Header = ({ color, children }) => {
  return (
    <h1 className={`${styles.header} ${styles[`${color}`]}`}>{children}</h1>
  );
};

export default Header;
