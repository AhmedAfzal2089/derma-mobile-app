import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
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
            // call your API with the Firebase uid
            const res = await fetch(`https://derma-veritas.vercel.app/api/user/${currentUser.uid}`);

            if (!res.ok) throw new Error("Failed to fetch profile");

            const data: UserProfile = await res.json();
            console.log("Profile Data", data);
            setProfile(data);
          } catch (err) {
            console.error("Error fetching user profile:", err);
            setError(err as Error);
          }
        }

        setLoading(false);
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
