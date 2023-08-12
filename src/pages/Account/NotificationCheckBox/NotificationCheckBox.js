import { useState } from "react";
import styles from "./NotificationCheckBox.module.css";
import StyledButton from "../../../components/StyledButton";

const NotificationCheckBox = () => {
  const [checkedItems, setCheckedItems] = useState({
    requests: true,
    reminders: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({ ...prevState, [name]: checked }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Coming Soon</div>
      <div className={styles.subTitle}>Receive a notification when:</div>
      <div className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          name="requests"
          id="requests"
          checked={checkedItems.requests}
          onChange={handleChange}
        />
        <label htmlFor="reminders">
          I receive email notifications about new requests
        </label>
      </div>
      <div className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          name="reminders"
          id="reminders"
          checked={checkedItems.reminders}
          onChange={handleChange}
        />
        <label htmlFor="reminders">Receive reminder emails from TeamWyrk</label>
      </div>
      <StyledButton type="submit" disabled>
        Update Settings
      </StyledButton>
    </div>
  );
};

export default NotificationCheckBox;
