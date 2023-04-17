import { Link } from "react-router-dom";
import StyledButton from "../StyledButton";
import styles from "./CTA.module.css";

//Reusable  CTA component for use on 'GetStarted' sections
//Used in FAQ and About page

const CTA = ({ description, buttonText }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Whatever work you have in mind, <br />
        we're the team that gets you there.
      </p>
      {description ? (
        <span className={styles.description}>{description}</span>
      ) : null}
      <div>
        <Link to="/signup">
          <StyledButton color="yellow" hover>
            {buttonText}
          </StyledButton>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
