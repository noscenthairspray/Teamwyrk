import styles from "./Account.module.css";
import { Header } from "../../components/Typography";
import CredentialsInput from "./CredentialsInput";
import { Divider } from "@mui/material";
import Profile from "./Profile";
import { useAuthState } from "../../hooks/useAuthState";
import { Navigate } from "react-router-dom";
import NotificationCheckBox from "./NotificationCheckBox";
import Deactivate from "./Deactivate";

const Account = () => {
  //custom firebase react-hook returns user object (logged in user's info) +
  //isAuthenticated which returns true if user is logged in
  const { user, isAuthenticated } = useAuthState();

  //if user is not logged in and tries to access this page reroute to home
  if (!isAuthenticated) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Header color="darkBlue">Settings</Header>
      </div>
      <div className={styles.contentContainer}>
        <Profile userData={user} />
        <CredentialsInput />
        {/* Divider is from material-ui library */}
        <Divider sx={{ my: "40px" }} />
        <NotificationCheckBox />
        <Deactivate />
      </div>
    </div>
  );
};

export default Account;
