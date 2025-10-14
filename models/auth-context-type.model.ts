import { User as FirebaseUser } from "firebase/auth";
import { UserProfile } from "./user-profile.model";

export interface AuthContextType {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  loading: boolean;
  error: Error | null;
}
