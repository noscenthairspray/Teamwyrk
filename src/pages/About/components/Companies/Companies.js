import styles from "./Companies.module.css";

const Companies = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h2>Get connected to top companies</h2>
        <p>
          Below are some of the tech companies you can get resume reviewed for
        </p>
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
