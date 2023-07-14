import styles from "./UpsellWindow.module.css";

const UpsellWindow = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
};

export default UpsellWindow;