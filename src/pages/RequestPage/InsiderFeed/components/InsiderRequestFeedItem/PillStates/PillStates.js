import { useState } from "react";
import styles from "./PillStates.module.css";

const PillStates = ({ requestStatus }) => {

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
        <button
        className={`${styles.pillButton} ${getStatusStyle()}`}
        id="PillState"
        disabled
        >
            {/* accept is Pending Acceptance, matched is Matched */}
            {/* todo: handle decline status */}
            {requestStatus === "matched" && "Matched"}
            {requestStatus === "accept" && "Pending Acceptance"}
        </button>
    );
};
export default PillStates;
