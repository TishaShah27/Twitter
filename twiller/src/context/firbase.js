
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1Jo6_9iN0u3ehNd8wdXk8f6pEI2Tyayk",
  authDomain: "twiller-949b0.firebaseapp.com",
  projectId: "twiller-949b0",
  storageBucket: "twiller-949b0.firebasestorage.app",
  messagingSenderId: "919475812352",
  appId: "1:919475812352:web:ad4e728ee4ea6578b500e5"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
// const analytics = getAnalytics(app); 
