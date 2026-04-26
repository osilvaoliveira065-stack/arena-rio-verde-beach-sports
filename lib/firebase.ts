import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEAD8oRT3k7RWGFQGhcY9o4DZe9I3DA_g",
  authDomain: "arena-rio-verde-beach-sports.firebaseapp.com",
  projectId: "arena-rio-verde-beach-sports",
  storageBucket: "arena-rio-verde-beach-sports.firebasestorage.app",
  messagingSenderId: "982050184388",
  appId: "1:982050184388:web:efc6189042fda50127bd91",
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];

export default app;