import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase/config";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const hadndleLogout = () => {
    signOut(auth);
  };
  return (
    <div>
      <h1>React Firebase Auth</h1>
      {user ? (
        <>
          <p>Welcome , {user.email}</p>
          <button onClick={hadndleLogout}> Logout</button>
        </>
      ) : (
        <>
          <SignUp /> <hr />
          <Login />
        </>
      )}
    </div>
  );
};

export default App;
