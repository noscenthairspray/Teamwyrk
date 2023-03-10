import { Link } from "react-router-dom";
import StyledButton from "../../../../../../components/StyledButton";
import { Header } from "../../../../../../components/Typography";
import styles from "./RequestHeader.module.css";

const RequestHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Header color="darkBlue">Requests</Header>
      </div>
      <Link to="/request/form">
        <StyledButton color="yellow">Submit a request</StyledButton>
      </Link>
    </div>
  );
};

export default RequestHeader;
