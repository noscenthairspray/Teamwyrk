import styles from "./CTA.module.css";

//Reusable  CTA component for use on 'Join the wait list' section
//Used in FAQ and About page
//Hashies - you can use this component on the landing page if you'd like since it's the same

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
        <a
          href="https://airtable.com/shrDiI6bJ3SaDJE5V"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.secondaryButton}>{buttonText}</button>
        </a>
      </div>
    </div>
  );
};

export default CTA;
