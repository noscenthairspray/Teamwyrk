import { BodyTwo, Header } from "../../../../components/Typography";
import styles from "./Companies.module.css";

const Companies = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.title}>
          <Header color="primary">Get connected to top companies</Header>
        </div>
        <BodyTwo color="primary">
          Below are some of the tech companies you can get resume reviewed for
        </BodyTwo>
      </div>
      <div className={styles.companies}>
        <img src="/images/about_page/companies_list.png" alt="companies" />
        <img
          src="/images/about_page/companies_mobile.png"
          alt="companies-mobile"
        />
      </div>
    </div>
  );
};

export default Companies;
