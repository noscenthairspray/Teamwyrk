import React, { useEffect, useState, useMemo } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FeedLayout, RequestItem, RequestModal,EmptyFeed } from "./components";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../../hooks/useAuthState";

//TODO - add pagination / infinite scroll
const Feed = () => {
  const { isAuthenticated } = useAuthState();

  const [requests, setRequests] = useState([]);
  const [open, setOpenModal] = React.useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleClickRequest = (contacts) => {
    setSelectedRequest(contacts);
    setOpenModal(true);
  };

  useEffect(() => {
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

  const oneDayInMillis = 24 * 60 * 60 * 1000;
  const oneDayAgo = Date.now() - oneDayInMillis;

  const oneDayOldRequests = useMemo(() => {
    return requests.filter((request) => {
      const createdAt = request.createdAt?.toDate()?.getTime();
      return createdAt && createdAt > oneDayAgo;
    });
  }, [requests]);

  if (!isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      {requests.length > 0 ? (
        <>
          <FeedLayout newRequestCount={oneDayOldRequests.length}>
            {requests.map((request) => (
              <RequestItem
                key={request.id}
                requestData={request}
                handleClickRequest={handleClickRequest}
              />
            ))}
          </FeedLayout>
          {selectedRequest && (
            <RequestModal
              open={open}
              setOpenModal={setOpenModal}
              contacts={selectedRequest}
            />
          )}
        </>
      ) : (
        <EmptyFeed />
      )}
    </>
  );
};

export default Feed;
