import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  where,
  doc,
  deleteDoc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { FeedLayout, RequestItem, EmptyFeed } from "./components";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../../../hooks/useAuthState";
import InsiderAcceptModal from "./components/RequestItem/InsiderAcceptModal";

//TODO: Set up logic to bring all request items with status="accept" to top
//TODO: Set up logic to bring all request items with status="accept" to top

//TODO: UPDATE BACKGROUND STYLE WITH CSS WHEN MODAL IS OPEN
//TODO: UPDATE BACKGROUND STYLE WITH CSS WHEN MODAL IS OPEN

/** RequesterFeed is a React component that allows Requesters
 * to see and delete their current requests,
 * shows whether or not they are matched to an Insider,
 * and opens the InsiderAcceptModaL
 */
const RequesterFeed = () => {
  // State to authenticate user
  const { isAuthenticated, user } = useAuthState();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openAcceptModal, setOpenAcceptModal] = useState(false);

  /** Effect hook to grab the data based on the user's ID
   * and set requests state
   */
  useEffect(() => {
    const fetchRequests = async () => {
      const q = query(
        collection(db, "request"),
        where("uid", "==", user.uid), // Filter by logged-in user's uid
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const requestsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRequests(requestsData);
      if (requestsData) {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  /** Function to delete the request when clicked on 'Delete' button */
  const deleteRequest = async (requestId) => {
    try {
      await deleteDoc(doc(db, "request", requestId));
      // Update the user's document by removing the request ID from field request_id array
      if (user && user.uid) {
        const userDocRef = doc(db, "user", user.uid);
        await updateDoc(userDocRef, {
          request_id: arrayRemove(requestId),
        });
      }
      // Remove the deleted request from the local state
      setRequests(requests.filter((request) => request.id !== requestId));
    } catch (error) {
      console.error("Error deleting the request:", error);
    }
  };

  // Checks for authentication. Redirects to homepage if not
  if (!isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  // Return EmptyFeed component if loading is true and requests is empty
  if (!loading && !requests.length) {
    return <EmptyFeed />;
  }

  return (
    <>
      {/* ADD TOAST COMPONENT HERE FOR DECLINE BUTTON  */}
      {/* ADD TOAST COMPONENT HERE FOR DECLINE BUTTON  */}

      <FeedLayout>
        {requests.map((request, id) => (
          <>
            <RequestItem
              key={request.id}
              requestData={request}
              deleteRequest={deleteRequest}
              setOpenAcceptModal={setOpenAcceptModal}
            />
            {openAcceptModal && (
              <InsiderAcceptModal
                setOpenAcceptModal={setOpenAcceptModal}
                insiderID={request.insider}
                requestInfo={request}
              />
            )}
          </>
        ))}
      </FeedLayout>
    </>
  );
};

export default RequesterFeed;
