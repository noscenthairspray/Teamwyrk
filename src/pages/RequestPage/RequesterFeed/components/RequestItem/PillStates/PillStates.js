import { useState } from "react";
import InsiderAcceptModal from "../InsiderAcceptModal";
import styles from "./PillStates.module.css";

//TODO: UPDATE STYLES AS PER FIGMA
//TODO: UPDATE STYLES AS PER FIGMA

const PillStates = ({ status, requestData, setRequestStatus }) => {
  const [openAcceptModal, setOpenAcceptModal] = useState(false);

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
    <>
      <button
        className={`${styles.pillButton} ${getStatusStyle()}`}
        onClick={
          status === "accept" ? () => setOpenAcceptModal(true) : undefined
        }
      >
        {status === "matching" && "Matching..."}
        {status === "matched" && "Matched"}
        {status === "accept" && "Accept Your Insider ↗"}
      </button>
      {openAcceptModal && (
        <InsiderAcceptModal
          setOpenAcceptModal={setOpenAcceptModal}
          insiderID={requestData.insider}
          requestData={requestData}
          setRequestStatus={setRequestStatus}
        />
      )}
    </>
  );
};
export default PillStates;
