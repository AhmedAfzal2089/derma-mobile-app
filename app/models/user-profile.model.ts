export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  phoneNumber?: string;
  photoURL?: string;
  address?: string;
  role?: string;
  preferences?: Record<string, any>;
  createdAt?: number;
  [key: string]: any;
}