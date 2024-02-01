import { useState } from "react";
import InsiderAcceptModal from "../InsiderAcceptModal";
import styles from "./PillStates.module.css";

//TODO: UPDATE STYLES AS PER FIGMA
//TODO: UPDATE STYLES AS PER FIGMA

const PillStates = ({ requestData, setRequestStatus, requestStatus }) => {
  const [openAcceptModal, setOpenAcceptModal] = useState(false);

  const getStatusStyle = () => {
    switch (requestStatus) {
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
          requestStatus === "accept"
            ? () => setOpenAcceptModal(true)
            : undefined
        }
        disabled={requestStatus!=="accept"?true:false}
        id="PillState"
      >
        {requestStatus === "matching" && "Matching..."}
        {requestStatus === "matched" && "Matched"}
        {requestStatus === "accept" && <div style={{display:"flex",gap:"4px"}}> <div>Accept Your Insider</div><img src="icons/Vector.svg" alt="vector"/></div>}
      </button>
      {openAcceptModal && (
        <InsiderAcceptModal
          setOpenAcceptModal={setOpenAcceptModal}
          insiderID={requestData.insider}
          requestData={requestData}
          setRequestStatus={setRequestStatus}
          requestStatus={requestStatus}
        />
      )}
    </>
  );
};
export default PillStates;


