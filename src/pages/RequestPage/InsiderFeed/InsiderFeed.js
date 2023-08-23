import React, { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../../hooks/useAuthState";
import {
  InsiderFeedLayout,
  RequestFeedItem,
  GetMatchedModal,
} from "./components";
import Snackbar from "../../../components/Alerts/Snackbar";

const InsiderFeed = () => {
  const { isAuthenticated } = useAuthState();

  const [requests, setRequests] = useState([]);
  const [tab, setTab] = useState("feed");
  const [open, setOpenModal] = React.useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleClickGetMatched = (contacts) => {
    setSelectedRequest(contacts);
    setOpenModal(true);
  };

  const handleSnackbarToggle = () => {
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 10000);
  };

  useEffect(() => {
    //TODO: when insider switches tab to "in-progress", filter FirebaseDB to only fetch the insider's request items
    //fetch from Firebase DB on mount (Default Feed items)
    const fetchRequests = async () => {
      const q = query(collection(db, "request"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const requestsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRequests(requestsData);
    };

    fetchRequests();
  }, []);

  return (
    <>
      <InsiderFeedLayout tab={tab} setTab={setTab}>
        {showSnackbar && (
          <Snackbar
            text="Your action was successful!"
            onClose={() => setShowSnackbar(false)}
          />
        )}
        {tab === "feed" ? (
          <div className="itemsContainer">
            {requests.map((request) => (
              <RequestFeedItem
                key={request.id}
                requestData={request}
                handleClickGetMatched={handleClickGetMatched}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          ></div>
        )}
        {selectedRequest && (
          <GetMatchedModal
            open={open}
            setOpenModal={setOpenModal}
            userContacts={selectedRequest}
            handleSnackbarToggle={handleSnackbarToggle}
          />
        )}
      </InsiderFeedLayout>
    </>
  );
};

export default InsiderFeed;
