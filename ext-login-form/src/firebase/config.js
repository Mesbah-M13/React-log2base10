import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRGcB9zI_BptLsSbNPqwKBUpQYEQ4ii3I",
  authDomain: "login-9a1b3.firebaseapp.com",
  projectId: "login-9a1b3",
  storageBucket: "login-9a1b3.firebasestorage.app",
  messagingSenderId: "495648553277",
  appId: "1:495648553277:web:745d399ae28fd942b5ad54",
  measurementId: "G-SD29M0G0K5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
