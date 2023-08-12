import styles from "./PillStates.module.css";

//TODO: UPDATE STYLES AS PER FIGMA
//TODO: UPDATE STYLES AS PER FIGMA

const PillStates = ({ status, setOpenAcceptModal }) => {
  const getStatusStyle = () => {
    switch (status) {
      case "matching":
        return styles.matching;
      case "matched":
        return styles.matched;
      case "accept":
        return styles.accept;
      default:
        return "";
    }
  };

  return (
    <button
      className={`${styles.pillButton} ${getStatusStyle()}`}
      onClick={status === "accept" ? () => setOpenAcceptModal(true) : undefined}
    >
      {status === "matching" && "Matching..."}
      {status === "matched" && "Matched"}
      {status === "accept" && "Accept (SHOWING FOR TESTING)"}
    </button>
  );
};
export default PillStates;
