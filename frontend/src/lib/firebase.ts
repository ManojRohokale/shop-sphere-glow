import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB4SsvuXkPtwmqJYLL1JKFQcdqeIMW9xxk",
  authDomain: "shop-sphere-glow.firebaseapp.com",
  projectId: "shop-sphere-glow",
  storageBucket: "shop-sphere-glow.firebasestorage.app",
  messagingSenderId: "718620275901",
  appId: "1:718620275901:web:f1f72233df5b4aa1d533d4",
  measurementId: "G-9X3JGXEP8Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Analytics is optional and only available in production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  import('firebase/analytics').then(({ getAnalytics }) => {
    getAnalytics(app);
  });
} 