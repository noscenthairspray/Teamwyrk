import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import Circle from "../../components/Loading/Circle";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        // User is signed in, see docs for a list of available properties
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
    //unsubscribe from this event when the component is unmounted
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      // set cookie with httpOnly flag
      document.cookie = `authUser=${JSON.stringify(user)}; path=/; HttpOnly`;
    } else {
      // remove cookie
      document.cookie =
        "authUser=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  }, [user]);

  if (loading) {
    return (
      <div>
        <Circle />
      </div>
    );
  }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
