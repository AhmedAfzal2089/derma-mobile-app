import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { AuthContextType } from "../models/auth-context-type.model";
import { UserProfile } from "../models/user-profile.model";

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  error: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        setUser(currentUser);
        setProfile(null);
        if (currentUser) {
          try {
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              setProfile({ uid: currentUser.uid, email: currentUser.email || "", ...docSnap.data() });
            } else {
              setProfile({ uid: currentUser.uid, email: currentUser.email || "" });
            }
          } catch (err) {
            console.error("Error fetching user profile:", err);
            setError(err as Error);
          }
        }
        setLoading(false);
        console.log("Proifile in context", profile);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user, profile, loading, error }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
