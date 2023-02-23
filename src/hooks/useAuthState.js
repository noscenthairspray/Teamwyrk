import { useContext } from "react";
import { AuthContext } from "../stores/context/AuthContext";

//custom hook to return the Firebase auth user object from AuthContext
export const useAuthState = () => {
  const auth = useContext(AuthContext);
  //user is null when the user is not logged in - see AuthContext.js
  return { ...auth, isAuthenticated: auth.user != null };
};
