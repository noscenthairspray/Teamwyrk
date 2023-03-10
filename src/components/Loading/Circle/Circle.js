import { CircularProgress } from "@mui/material";
import styles from "./Circle.module.css";

const Circle = () => {
  return (
    <div className={styles.loadingContainer}>
      <CircularProgress size={100} />
    </div>
  );
};

export default Circle;
