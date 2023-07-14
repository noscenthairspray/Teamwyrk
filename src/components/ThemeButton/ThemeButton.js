import { Link } from "react-router-dom";
// import Insiders from "./Insiders";
import styles from "./ThemeButton.module.css";
// import { insiders } from "../../data";
// import { SubHeader } from "../../../../components/Typography";
import StyledButton from "../StyledButton"

const ThemeButton = ({buttonValue, link}) => {
  return (
    <div className={styles.container}>
        <Link to={link}>
          <StyledButton color="primary" hover>
            {buttonValue}
          </StyledButton>
        </Link>
      </div>
  );
};

export default ThemeButton;