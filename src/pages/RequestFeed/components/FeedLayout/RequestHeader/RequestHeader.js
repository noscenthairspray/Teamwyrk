import { Link } from "react-router-dom";
import Button from "../../../../../components/Button";
import { Header } from "../../../../../components/Typography";
import styles from "./RequestHeader.module.css";

const RequestHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Header color="darkBlue">Requests</Header>
      </div>
      <Link to="/request/form">
        <Button color="yellow">Submit a request</Button>
      </Link>
    </div>
  );
};

export default RequestHeader;
