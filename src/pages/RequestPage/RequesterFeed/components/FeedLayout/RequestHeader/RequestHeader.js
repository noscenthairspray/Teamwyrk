import { Link } from "react-router-dom";
import StyledButton from "../../../../../../components/StyledButton";
import { Header } from "../../../../../../components/Typography";
import styles from "./RequestHeader.module.css";

const RequestHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Header color="darkBlue">All Requests</Header>
      </div>
      <Link to="/request/form">
        <StyledButton className={styles.styledButton} color="yellow" hover>
          Submit a request
        </StyledButton>
      </Link>
    </div>
  );
};

export default RequestHeader;
